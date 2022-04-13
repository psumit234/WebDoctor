package com.app.dto;

import java.util.List;

import com.app.pojos.Patient;
import com.app.pojos.PatientConsultations;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PatientConsultationDTO {

	Patient patient;
	List<PatientConsultations> patient_consultaitons;
}
