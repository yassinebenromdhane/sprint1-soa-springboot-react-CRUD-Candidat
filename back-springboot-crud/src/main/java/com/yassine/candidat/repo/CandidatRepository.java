package com.yassine.candidat.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.yassine.candidat.entities.Candidat;
import com.yassine.candidat.entities.Post;

@RepositoryRestResource(path = "rest")
public interface CandidatRepository extends JpaRepository<Candidat, Long> {
	List<Candidat> findByNomCand(String nom);
	List<Candidat> findByNomCandContains(String nom);
	
	@Query("select c from Candidat c where c.nomCand like %?1 and c.age > ?2")
	List<Candidat> findByNomAge (String nom, int age);
	
	@Query("select c from Candidat c where c.post = ?1")
	List<Candidat> findByPost (Post post);
	
	List<Candidat> findByPostIdPost(Long id);
	
	List<Candidat> findByOrderByNomCandAsc();
	
	@Query("select c from Candidat c order by c.nomCand ASC, c.age DESC")
	List<Candidat> trierCandidatNomsAge ();




}
