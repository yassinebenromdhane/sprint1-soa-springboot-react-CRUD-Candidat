package com.yassine.candidat.restController;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.yassine.candidat.entities.Candidat;
import com.yassine.candidat.services.CandidatServices;
@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:3000/")
public class CandidatRestController {
@Autowired
CandidatServices candidatService;
@RequestMapping(method = RequestMethod.GET)
public List<Candidat> getAllCandidats() {
return candidatService.getAllCandidats();
}

@RequestMapping(value="/{id}",method = RequestMethod.GET)
public Candidat getCandidatById(@PathVariable("id") Long id) {
return candidatService.getCandidat(id);
 }


@RequestMapping(method = RequestMethod.POST)
public Candidat createProduit(@RequestBody Candidat cand) {
return candidatService.saveCandidat(cand);
}

@RequestMapping(method = RequestMethod.PUT)
public Candidat updateCandidat(@RequestBody Candidat cand) {
return candidatService.updateCandidat(cand);
}


@RequestMapping(value="/{id}",method = RequestMethod.DELETE)
public void deleteCandidat(@PathVariable("id") Long id)
{
candidatService.deleteCandidatById(id);
}

@RequestMapping(value="/post/{idPost}",method = RequestMethod.GET)
public List<Candidat> getCandidatsByPostId(@PathVariable("idPost") Long idPost) {
return candidatService.findByPostIdPost(idPost);
}



}
