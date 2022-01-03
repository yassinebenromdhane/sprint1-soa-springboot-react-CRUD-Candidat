package com.yassine.candidat.services;

import java.util.List;

import com.yassine.candidat.entities.Candidat;
import com.yassine.candidat.entities.Post;

public interface CandidatServices {
	
	Candidat saveCandidat(Candidat c);
	Candidat updateCandidat(Candidat c);
	void deleteCandidat(Candidat c);
	void deleteCandidatById(Long id);
	Candidat getCandidat(Long id);
	List<Candidat> getAllCandidats();
	List<Candidat> findByNomCandidat(String nom);
	List<Candidat> findByNomCandidatContains(String nom);
	List<Candidat> findByNomAge (String nom, int age);
	List<Candidat> findByPost (Post post);
	List<Candidat> findByPostIdPost(Long id);
	List<Candidat> findByOrderByNomCandidatAsc();
	List<Candidat> trierCandidatsNomsAge();

}
