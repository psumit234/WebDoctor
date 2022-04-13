package com.app.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.AppointmentBooking;
import com.app.pojos.Doctor;
import com.app.pojos.Patient;
import com.app.service.AppointmentService;
import com.app.service.DoctorService;
import com.app.service.PatientService;

@CrossOrigin
@RestController
@RequestMapping("/patient")
public class PatientController {

	@Autowired
	PatientService patientService;
	@Autowired
	AppointmentService appointmentServices;
	@Autowired
	DoctorService doctorService;
	
	@GetMapping("/id/{patient_id}")
	public ResponseEntity<Optional<Patient>> findByPid(@PathVariable Long patient_id ){
		return new ResponseEntity<Optional<Patient>>(patientService.findById(patient_id),HttpStatus.OK);
	}
	
	@GetMapping("/email/{email}")
	public Optional<Patient> findByEmail(@PathVariable String email){
		return patientService.findByEmail(email);
	}
	@PostMapping("/booking")
	@ResponseBody
	public String appointmentBooking(@RequestBody AppointmentBooking appointment) {
		
		AppointmentBooking booking = new AppointmentBooking(appointment.getAid(),appointment.getName(), appointment.getEmail(), appointment.getAge(), appointment.getDName(), appointment.getDEmail(),appointment.getAppointmentDate(),appointment.getStartTime(),appointment.getEndTime());
		
		return appointmentServices.bookAppointment(booking);
	}
	@GetMapping("/booking/{email}")
	public List<AppointmentBooking> findById(@PathVariable String email){
		System.out.println(email);
		return patientService.getAppointmentDetails(email);
	}
	
}
