import axios from "axios";


const BASE_URL = "http://localhost:8080";

/*GET request URLs*/

const PATIENT_INFO_API_URL = `${BASE_URL}/patient/id`;
const doctor_info_api_url =`${BASE_URL}/doctor/id`;
const find_doctor_api_url = `${BASE_URL}/doctor/city`;
const doctor_consultations_api_url = `${BASE_URL}/consultations/doctor`;
const patient_consultations_api_url = `${BASE_URL}/consultations/patient`;
const patient_get_appointment_details = `${BASE_URL}/patient/booking`;
const doctor_get_appointment_details = `${BASE_URL}/doctor/booking`;
const get_patient_details = `${BASE_URL}/patient/email`;

/*POST request urls*/

const login_api_url = `${BASE_URL}/login`;
const consultation_form_api_url = `${BASE_URL}/consultations/form`;
const patient_regration_api_url = `${BASE_URL}/register/patient`;
const doctor_registration_api_url = `${BASE_URL}/register/doctor`;
const appointment_booking_api_url = `${BASE_URL}/patient/booking`;

class ApiService{
    getByEmail(email){
        return axios.get(`${get_patient_details}/${email}`);
    }
    getDoctorBookingDetails(email){
        return axios.get(`${doctor_get_appointment_details}/${email}`);
    }

    getBookingDetails(email){
        return axios.get(`${patient_get_appointment_details}/${email}`);
    }

    appointmentBooking(data){
        return axios.post(appointment_booking_api_url,data);
    }
    patientInfo(patient_id){
        return axios.get(`${PATIENT_INFO_API_URL}/${patient_id}`);
    }

    doctorInfo(doctor_id){
        return axios.get(`${doctor_info_api_url}/${doctor_id}`);
    }


    login(data){
        return axios.post(login_api_url,data);
    }

    findDoctor(city,speciality){
        return axios.get(`${find_doctor_api_url}/${city}?speciality=${speciality}`);
    }

    giveConsultation(data){
        return axios.post(consultation_form_api_url,data);
    }

    patientConsultations(patient_id){
        return axios.get(`${patient_consultations_api_url}/${patient_id}`);
    }

    patientRegistion(data){
        return axios.post(patient_regration_api_url,data);

    }
    doctorConsultaions(doctor_id){
        return axios.get(`${doctor_consultations_api_url}/${doctor_id}`);
    }

    doctorregistration(data){
        return axios.post(doctor_registration_api_url,data);
    }
}

export default new ApiService();
