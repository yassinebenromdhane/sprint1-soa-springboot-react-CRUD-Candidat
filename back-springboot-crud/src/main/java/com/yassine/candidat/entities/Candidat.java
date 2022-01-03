package com.yassine.candidat.entities;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
@Entity
public class Candidat {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long idCand;
private String nomCand;
private String email;
private String phone;
private int age;
@ManyToOne
private Post post;


public Candidat() {
	
}

public Candidat(String nomCand, String email, String phone, int age ) {
	super();
	this.nomCand = nomCand;
	this.email = email;
	this.phone = phone;
	this.age=age;
}

public Long getIdCand() {
	return idCand;
}
public void setIdCand(Long idCand) {
	this.idCand = idCand;
}
public String getNomCand() {
	return nomCand;
}
public void setNomCand(String nomCand) {
	this.nomCand = nomCand;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPhone() {
	return phone;
}
public void setPhone(String phone) {
	this.phone = phone;
}
public int getAge() {
	return age;
}
public void setAge(int age) {
	this.age = age;
}

@Override
public String toString() {
	return "Candidat [idCand=" + idCand + ", nomCand=" + nomCand + ", email=" + email + ", phone=" + phone + ", age="
			+ age + ", post=" + post + "]";
}

public Post getPost() {
	return post;
}

public void setPost(Post post) {
	this.post = post;
}

}
