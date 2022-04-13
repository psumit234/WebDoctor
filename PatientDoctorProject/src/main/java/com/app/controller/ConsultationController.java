package com.app.controller;

import java.time.LocalDate;
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

import com.app.dto.ConsultationFormDTO;
import com.app.dto.DoctorConsultationDTO;
import com.app.dto.PatientConsultationDTO;
import com.app.pojos.Consultation;
import com.app.pojos.Doctor;
import com.app.pojos.Patient;
import com.app.repository.ConsultationRepository;
import com.app.repository.DoctorRepository;
import com.app.repository.PatientRepository;
import com.app.service.DoctorService;
import com.app.service.PatientService;

import lombok.extern.slf4j.Slf4j;
@CrossOrigin
@RestController
@RequestMapping("/consultations")
@Slf4j
public class ConsultationController {

	@Autowired
	PatientService patientService;
	@Autowired
	DoctorService doctorService;
	@Autowired
	ConsultationRepository consultationRepository;
	@Autowired
	PatientRepository patientRepository;
	@Autowired
	DoctorRepository doctorRepository;
	
	
	
	
	@GetMapping("/patient/{patient_id}")
	public ResponseEntity<?> patientHistory(@PathVariable Long patient_id){
		PatientConsultationDTO patientConsltationDTO = patientService.findByIdGroupByDoctor(patient_id);
		if(patientConsltationDTO.getPatient()!=null) {
			return new ResponseEntity<PatientConsultationDTO>(patientConsltationDTO,HttpStatus.OK);
		}
		return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("/doctor/{doctor_id}")
	public ResponseEntity<?>doctorHistory(@PathVariable Long doctor_id){
		DoctorConsultationDTO doctorConsultationDTO = doctorService.findByIdGroupByPatient(doctor_id);
		if(doctorConsultationDTO.getDoctor()!=null) {
			return new ResponseEntity<DoctorConsultationDTO>(doctorConsultationDTO,HttpStatus.OK);
		}
		return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
	}
	
	
	@PostMapping("/form")
	@ResponseBody
	public String consultPatient(@RequestBody ConsultationFormDTO consultationForm) {
		
		Long patient_id = consultationForm.getPatient_id();
		Long doctor_id = consultationForm.getDoctor_id();
		String diagnosis = consultationForm.getDiagnosis();
		String medicines = consultationForm.getMedicines();
		String prognosis = consultationForm.getPrognosis();
		
		Optional<Patient>patient = patientService.findById(patient_id);
		Optional<Doctor>doctor = doctorService.findById(doctor_id);
		
		if(patient.isPresent() && doctor.isPresent()) {
			Consultation consultation = new  Consultation(LocalDate.now(), prognosis, medicines, diagnosis, patient.get(), doctor.get());
			
			consultationRepository.save(consultation);
			return "Patient consulted successfully";
		}
		return "Patient consultation failed";
	}
	
	
}
