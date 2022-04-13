package com.app.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.DoctorConsultationDTO;
import com.app.pojos.AppointmentBooking;
import com.app.pojos.Consultation;
import com.app.pojos.Doctor;
import com.app.pojos.DoctorConsultations;
import com.app.pojos.Patient;
import com.app.repository.AppointmentRepository;
import com.app.repository.ConsultationRepository;
import com.app.repository.DoctorRepository;

@Service
public class DoctorService {

	@Autowired
	DoctorRepository doctorRepository;
	@Autowired
	ConsultationRepository consultationRepository;
	@Autowired
	AppointmentRepository appointment;
	
	
	
	public DoctorConsultationDTO findByIdGroupByPatient(Long doctor_id) {
		Optional<Doctor> d = doctorRepository.findById(doctor_id);
		Doctor doctor = d.isPresent() ? d.get():null;
		
		List<Consultation> consultation = consultationRepository.findByDoctorId(doctor_id);
		HashMap<Patient, List<Consultation>>map = new HashMap<Patient, List<Consultation>>();
		consultation.stream().forEach(c->{
			Patient patient = c.getPatient();
			if(map.containsKey(patient)) {
				List<Consultation>listOfConsultations = map.get(patient);
				listOfConsultations.add(c);
				map.put(patient, listOfConsultations);
			}else {
				List<Consultation> listOfConsultations = new ArrayList<>();
				listOfConsultations.add(c);
				map.putIfAbsent(patient, listOfConsultations);	
			}	
		});
		
		List<DoctorConsultations> listOfDoctorConsultations = new ArrayList<DoctorConsultations>();
		for(Map.Entry<Patient, List<Consultation>>entry:map.entrySet()) {
			DoctorConsultations doctorConsultations = new DoctorConsultations(entry.getKey(),entry.getValue());
			listOfDoctorConsultations.add(doctorConsultations);
		}
		return new DoctorConsultationDTO(doctor, listOfDoctorConsultations);
		
	}
	
	
	
	public List<Doctor>findByCityAndSpeciality(String city,String speciality){
		return doctorRepository.findByCityAndSpecialityIgnoreCasePartiolMatch(city, speciality);
	}
	public Optional<Doctor> findByEmail(String email){
		return doctorRepository.findByEmail(email);
	}
	
	public List<AppointmentBooking>getPatientAppointmentDetails(String email){
		return appointment.getDetailsAppointmentForDoctor(email);
	}
	
	public Optional<Doctor> findById(Long doctor_id){
		return doctorRepository.findById(doctor_id);
	}
	
	public Optional<Doctor> findByEmailAndPassword(String email,String password){
		return doctorRepository.findByEmailAndPassword(email, password);
	}
	
	public String registerDoctor(Doctor doctor) {
		if(doctorRepository.findById(doctor.getDid()).isPresent()) {
			return "Doctor already exists";
		}else {
			try {
				doctorRepository.save(doctor);
				return "Doctor registered successfully";
			}catch (Exception e) {
				return "Doctor registration failed"; 
			}
		}
	}
}
