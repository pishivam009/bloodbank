package com.piyush.code.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.piyush.code.dao.BloodSampleRepo;
import com.piyush.code.dao.UserRepo;
import com.piyush.code.model.BloodSample;
import com.piyush.code.model.LoginDetails;
import com.piyush.code.model.User;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Resource {

	@Autowired
	BloodSampleRepo bloodSampleRepo;

	@Autowired
	UserRepo userRepo;

	@GetMapping("/users")
	public List<User> getAllUsers() {
		return userRepo.findAll();

	}

	@PostMapping("/login")
	public User login(@RequestBody LoginDetails loginDetails) {
		User u = new User();
		User temp = userRepo.findByEmail(loginDetails.getEmailid());
		if (temp != null && temp.getPassword().equals(loginDetails.getPassword())) {
			u = temp;
			u.setPassword(null);
			System.out.println("User found and logged in");
		}
		return u;
	}

	@DeleteMapping("/user/{id}")
	public String deleteUser(@PathVariable("id") int id) {
		Integer i = Integer.valueOf(id);
		userRepo.deleteById(i);
		return "User with ID=" + id + " deleted";
	}

	@GetMapping("/bloodsamples")
	public List<BloodSample> getAllBloodSamples() {
		return bloodSampleRepo.findAll();
	}
	
	@DeleteMapping("/bloodsample/{id}")
	public String deleteSample(@PathVariable("id") int id) {
		Integer i = Integer.valueOf(id);
		bloodSampleRepo.deleteById(i);
		return "Sample with ID=" + id + " deleted";
	}
	
	@PostMapping("/addAdmin/{id}")
	public String addAdmin(@PathVariable("id") int id) {
		userRepo.makeAdmin(id);
		return "User with ID="+id+" given Admin Rights";
	}
	
	@PostMapping("/removeAdmin/{id}")
	public String removeAdmin(@PathVariable("id") int id) {
		userRepo.removeAdmin(id);
		return "User with ID="+id+" revoked Admin Rights";
	}

	@PostMapping("/addUser")
	public String addUser(@RequestBody User user) {
		if (!userRepo.existsByEmail(user.getEmail())) {
			userRepo.save(user);
			System.out.println("saved");
			return "User saved";
		} else {
			return "Email already exists";
		}
	}

	@PutMapping("/updateUser")
	public String updateUser(@RequestBody User user) {
		if (userRepo.existsByEmail(user.getEmail())) {
			userRepo.updateByEmail(user.getAddress(), user.getContact(), user.getName(), user.getPassword(),
					user.getEmail());
			System.out.println(user);
			return "User updated";
		} else {
			return "User does not exist";
		}
	}

	@PostMapping("/addBloodSample")
	public String addBloodSample(@RequestBody BloodSample bloodSample) {
		if ((!bloodSampleRepo.existsByDonorEmail(bloodSample.getDonorEmail()))&&(!bloodSampleRepo.existsByDonorContact(bloodSample.getDonorContact()))) {
			BloodSample b = bloodSampleRepo.save(bloodSample);
			System.out.println(b);
			return "Blood Sample Saved. Sample ID="+b.getId();
		}else {
			return "User has already donated blood in last 90 days";
		}
		
	}
	
	@GetMapping("/bloodsample/{group}")
	public List<BloodSample> getSampleByBloodGroup(@PathVariable("group") String group) {
		return bloodSampleRepo.findAllByBloodGroup(group);
	}
	

}
