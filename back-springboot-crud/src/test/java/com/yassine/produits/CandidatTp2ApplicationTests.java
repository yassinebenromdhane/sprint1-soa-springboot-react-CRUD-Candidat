package com.yassine.produits;


import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.yassine.candidat.CandidatTp2Application;
import com.yassine.candidat.entities.Candidat;
import com.yassine.candidat.entities.Post;
import com.yassine.candidat.repo.CandidatRepository;

@SpringBootTest(classes = CandidatTp2Application.class)
class CandidatTp2ApplicationTests {

	 @Autowired
	  private CandidatRepository candidatRepository;

	  @Test
	  public void testCreateCandidat() {
	    Candidat cand = new Candidat("mouna","mouna@gmail.com" , "23300054",22);
	    candidatRepository.save(cand);
	  }

	 @Test
	  public void testFindCandidat() {
	    Candidat c = candidatRepository.findById(1L).get();
	    System.out.println(c);
	  }
	 @Test
	 public void testFindByNomCandidat()
	 {
	 List<Candidat> cands = candidatRepository.findByNomCand("yassine");

	 for (Candidat c : cands)
	 {
	 System.out.println(c);
	 }

	 }
	 @Test
	 public void testFindByNomCandidatContains ()
	 {
	 List<Candidat> cands=candidatRepository.findByNomCandContains("ya");

	 for (Candidat c : cands)
	 {
	 System.out.println(c);
	 } }

	  @Test
	  public void testUpdateCandidat() {
	    Candidat c = candidatRepository.findById(2L).get();
	    c.setEmail("abirbk@gmail.com");
	    candidatRepository.save(c);
	  }

	  @Test
	  public void testDeleteCandidat() {
	    candidatRepository.deleteById(2L);
	  }
	  
	  @Test
	  public void testListerTousCandidats() {
	    List<Candidat> cands = candidatRepository.findAll();
	    for (Candidat c : cands) {
	      System.out.println(c);
	    }
	  }
	  
	  @Test
	  public void testfindByNomAge()
	  {
	  List<Candidat> cands = candidatRepository.findByNomAge("yassine", 22);
	  for (Candidat c : cands)
	  {
	  System.out.println(c);
	  }
	  }
	  
	  @Test
	  public void testfindByPost()
	  {
	  Post post = new Post();
	  post.setIdPost(1L);
	  List<Candidat> cands = candidatRepository.findByPost(post);
	  for (Candidat c : cands)
	  {
	  System.out.println(c);
	  }
	  }
	  
	  @Test
	  public void findByPostIdPost()
	  {
	  List<Candidat> cands = candidatRepository.findByPostIdPost(1L);
	  for (Candidat c : cands)
	  {
	  System.out.println(c);
	  }
	   }
	  @Test
	  public void testfindByOrderByNomCandtAsc()
	  {
	  List<Candidat> cands =
	  candidatRepository.findByOrderByNomCandAsc();
	  for (Candidat c : cands)
	  {
	  System.out.println(c);
	  }
	  }
	  @Test
	  public void testTrierCandidatsNomsAge()
	  {
	  List<Candidat> cands = candidatRepository.trierCandidatNomsAge();
	  for (Candidat c : cands)
	  {
	  System.out.println(c);
	  }
	  }

	  
	  
	  



}
