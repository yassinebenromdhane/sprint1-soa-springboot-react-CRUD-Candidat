package com.yassine.candidat.services;

import java.util.List;

import com.yassine.candidat.entities.Post;

public interface PostServices {
	
	Post getPost(Long id);
	List<Post> getAllPostes();

}
