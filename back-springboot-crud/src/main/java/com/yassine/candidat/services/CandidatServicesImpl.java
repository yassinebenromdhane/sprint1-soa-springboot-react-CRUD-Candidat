package com.yassine.candidat.services;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yassine.candidat.entities.Candidat;
import com.yassine.candidat.entities.Post;
import com.yassine.candidat.repo.CandidatRepository;

@Service
public class CandidatServicesImpl implements CandidatServices {
	@Autowired
	CandidatRepository candidatRepository;
	@Override
	public Candidat saveCandidat(Candidat c) {
		return candidatRepository.save(c);
	}
	@Override
	public Candidat updateCandidat(Candidat c) {
		return candidatRepository.save(c);
	}
	@Override
	public void deleteCandidat(Candidat c) {
		candidatRepository.delete(c);
	}
	@Override
	public void deleteCandidatById(Long id) {
		candidatRepository.deleteById(id);
	}
	@Override
	public Candidat getCandidat(Long id) {
		return candidatRepository.findById(id).get();
}
	@Override
	public List<Candidat> getAllCandidats() {
		return candidatRepository.findAll();
	}
	@Override
	public List<Candidat> findByNomCandidat(String nom) {
		return candidatRepository.findByNomCand(nom);
	}
	@Override
	public List<Candidat> findByNomCandidatContains(String nom) {
		return candidatRepository.findByNomCandContains(nom);
	}
	@Override
	public List<Candidat> findByNomAge(String nom, int age) {
		return candidatRepository.findByNomAge(nom, age);
	}
	@Override
	public List<Candidat> findByPost(Post post) {
		return candidatRepository.findByPost(post);	
	}
	@Override
	public List<Candidat> findByPostIdPost(Long id) {
		return candidatRepository.findByPostIdPost(id);
	}
	@Override
	public List<Candidat> findByOrderByNomCandidatAsc() {
		return candidatRepository.findByOrderByNomCandAsc();
	}
	@Override
	public List<Candidat> trierCandidatsNomsAge() {
		return candidatRepository.trierCandidatNomsAge();
	}
	
	
}
