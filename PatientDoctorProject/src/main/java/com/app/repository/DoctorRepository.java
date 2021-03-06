package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojos.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {
	
	@Query("select d from Doctor d where lower(d.city) like %?1% and lower(d.speciality) like %?2%")
	List<Doctor> findByCityAndSpecialityIgnoreCasePartiolMatch(String  city,String speciality);
	
	Optional<Doctor> findByEmailAndPassword(String email,String password);
	@Query("select d from Doctor d where d.email=?1")
	public Optional<Doctor> findByEmail(String email);
}
