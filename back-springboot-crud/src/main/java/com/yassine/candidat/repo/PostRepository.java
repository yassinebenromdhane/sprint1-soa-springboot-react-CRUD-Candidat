package com.yassine.candidat.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.yassine.candidat.entities.Post;


@RepositoryRestResource(path = "rest")
public interface PostRepository extends JpaRepository<Post, Long> {
	

}
