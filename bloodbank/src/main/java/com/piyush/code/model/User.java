package com.piyush.code.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
public @Data class User {
	/**
	  {
    "name":"Piyush",
    "email":"abc@xyz.com",
    "password":"12345",
    "address":"Patna",
    "isAdmin":false
	}
	 */
	
	@Id
	@GeneratedValue
	private int id;
	
	@Column(nullable = false)
	private String name;
	
	@Column(unique = true, nullable = false)
	private String email;
	
	@Column(nullable = false)
	private String contact;
	
	@Column(nullable = false)
	private String password;
	
	@Column(nullable = false)
	private String address;
	
	@Column(nullable = false)
	private int isAdmin;
	
	
	
}
