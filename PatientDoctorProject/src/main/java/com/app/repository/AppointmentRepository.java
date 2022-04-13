package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojos.AppointmentBooking;
@Repository
public interface AppointmentRepository extends JpaRepository<AppointmentBooking, Long> {

	@Query("select e from AppointmentBooking e where e.email=?1")
	List<AppointmentBooking>getDetailsAppointment(String email);
	
	@Query("select e from AppointmentBooking e where e.DEmail=?1")
	List<AppointmentBooking>getDetailsAppointmentForDoctor(String email);
}
