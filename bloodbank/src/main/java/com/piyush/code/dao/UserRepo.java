package com.piyush.code.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.piyush.code.model.User;

public interface UserRepo extends JpaRepository<User, Integer> {
	
	

	User findByEmail(String emailid);

	boolean existsByEmail(String email);
	
	@Transactional
	@Modifying
	@Query(value="UPDATE User u SET u.address = :address , u.contact = :contact , u.name = :name , u.password = :password where u.email = :email")
	void updateByEmail(@Param("address") String address, @Param("contact") String contact,  @Param("name") String name, @Param("password") String password,@Param("email") String email);
	
	@Transactional
	@Modifying
	@Query(value="UPDATE User u SET u.isAdmin=1 where u.id= :id")
	void makeAdmin(@Param("id") int id);
	
	@Transactional
	@Modifying
	@Query(value="UPDATE User u SET u.isAdmin=0 where u.id= :id")
	void removeAdmin(@Param("id") int id);
	

}
