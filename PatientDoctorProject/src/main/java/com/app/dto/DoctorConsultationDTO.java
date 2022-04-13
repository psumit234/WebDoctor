package com.app.dto;

import java.util.List;

import com.app.pojos.Doctor;
import com.app.pojos.DoctorConsultations;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DoctorConsultationDTO {

	Doctor doctor;
	List<DoctorConsultations>doctor_consultations;
}
