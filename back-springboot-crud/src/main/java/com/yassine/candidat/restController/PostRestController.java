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
import com.yassine.candidat.entities.Post;
import com.yassine.candidat.services.CandidatServices;
import com.yassine.candidat.services.PostServices;

@RestController
@RequestMapping("/api/cat")
@CrossOrigin(origins="http://localhost:3000/")
public class PostRestController {
	
	@Autowired(required=true)
	PostServices postService;

	@RequestMapping(method = RequestMethod.GET)
	public List<Post> getAllPostes() {
	return postService.getAllPostes();
	}

	@RequestMapping(value="/{id}",method = RequestMethod.GET)
	public Post getPostById(@PathVariable("id") Long id) {
	return postService.getPost(id);
	 }
}
