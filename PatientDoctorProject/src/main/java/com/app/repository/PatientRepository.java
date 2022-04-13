package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojos.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {
	
	Optional<Patient> findByEmailAndPassword(String email,String password);
	
	@Query("select c from Patient c where c.email=?1")
	public Optional<Patient> findByEmail(String email);
}
