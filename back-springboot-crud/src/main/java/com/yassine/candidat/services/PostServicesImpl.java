package com.yassine.candidat.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yassine.candidat.entities.Post;
import com.yassine.candidat.repo.PostRepository;

@Service
public class PostServicesImpl implements PostServices {

	
@Autowired
PostRepository postRepository;
	
@Override
public Post getPost(Long id) {
return postRepository.findById(id).get();
}

@Override
public List<Post> getAllPostes() {
 return postRepository.findAll();
}
}
