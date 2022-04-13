package com.app.pojos;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor

@MappedSuperclass
public class BaseEntity {

	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private Long Aid;

	public BaseEntity(Long aid) {
		super();
		Aid = aid;
	}
	
}
