package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.AppointmentBooking;
import com.app.repository.AppointmentRepository;

@Service
public class AppointmentService {
	@Autowired
	AppointmentRepository appointment1;
	
	
	public String bookAppointment(AppointmentBooking appointment) {
		
		if(appointment1.findById(appointment.getAid()).isPresent()) {
			return "Appointment is Already Booked";
		}else {
			try {
			appointment1.save(appointment);
			return "Appointment Booked";
			}catch(Exception e) {
				return "Appointment Booking Failed";
			}
		}
	}
	
	public List<AppointmentBooking> getAppointmentDetails() {
		return appointment1.findAll();
	}

}
