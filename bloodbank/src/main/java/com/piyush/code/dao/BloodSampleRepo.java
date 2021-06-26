package com.piyush.code.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.piyush.code.model.BloodSample;

public interface BloodSampleRepo extends JpaRepository<BloodSample, Integer>{



	boolean existsByDonorEmail(String donorEmail);

	boolean existsByDonorContact(String donorContact);

	List<BloodSample> findAllByBloodGroup(String group);

}
