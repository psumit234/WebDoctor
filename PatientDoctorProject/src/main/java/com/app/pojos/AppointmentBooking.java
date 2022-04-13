package com.app.pojos;

import java.sql.Time;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "appointment_tbl")
public class AppointmentBooking  extends BaseEntity{

	@Column(name = "Patient_name")
	private String name;
	@Column(name = "patient_email")
	private String email;
	private int age;
	@Column(name = "doctor_name")
	private String DName;
	@Column(name = "doctor_email")
	private String DEmail;
	@JsonFormat(pattern = "yyyy-MM-dd")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate appointmentDate;
	
	private String StartTime;
	
	private String EndTime;
	
	
	public AppointmentBooking(Long aid, String name, String email, int age, String dName, String dEmail,
			LocalDate appointmentDate, String startTime, String endTime) {
		super(aid);
		this.name = name;
		this.email = email;
		this.age = age;
		DName = dName;
		DEmail = dEmail;
		this.appointmentDate = appointmentDate;
		StartTime = startTime;
		EndTime = endTime;
		
	}
	
	
	
	
	
	
	
}
