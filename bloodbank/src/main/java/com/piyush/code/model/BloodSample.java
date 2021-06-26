package com.piyush.code.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
public @Data class BloodSample {
/**
 * {
    "bloodGroup":"AB+",
    "date":"2020-12-26",
    "id":1,
    "donorId":5
	}
 */
	@Id
	@GeneratedValue
	private int id;
	
	@Column(nullable = false)
	private String bloodGroup;
	
	@Column(nullable = false)
	private LocalDate date;

	
	@Column(nullable = false)
	private String donorName; 
	
	@Column(nullable = false)
	private String donorContact;
	
	@Column(nullable = false)
	private String donorAddress;
	
	@Column(nullable = false)
	private String donorEmail;
	
	
}
