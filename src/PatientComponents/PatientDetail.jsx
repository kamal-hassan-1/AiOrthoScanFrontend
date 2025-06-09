import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Age from "../img/age.png";
import Id from "../img/id.png";
import Name from "../img/name.png";
import Profile from "../img/profile.png";

const PatientDetail = () =>{
  const [patientData, setPatientData] = useState({
    fullName: 'Loading...',
    age: 'Loading...',
    gender: 'Loading...',
    patientId: 'Loading...',
  });
useEffect (() => {
  const fetchPatientData = async () => {
    const token = localStorage.getItem('token');
    try{
      const response = await axios.get('https://aiorthoscanbackend-production.up.railway.app/api/main/patientRecords',{headers: {Authorization: `Bearer ${token}`, },});

      const { fullName, age, gender, patientId } = response.data;
      setPatientData({fullName,age,gender,patientId});
    }catch(error){
      console.log('Error fetching patient data:', error.response?.data?.error || error.message);
      setPatientData({fullName: 'Unavailable',age: 'Unavailable',gender: 'Unavailable',patientId: 'Unavailable'});
    }
  };
  fetchPatientData();
  }, []);

  return (
    <div className='w-[100%] bg-dark-blue px-[20px] py-[20px] rounded-[10px] flex flex-col gap-[20px] max-800:w-[100%]'>
      <div className="patient_detail flex flex-col gap-[5px] max-800:items-center">
        <span className="leading-none">Patient's Detail</span>
        <span className="text-gray-400 text-[12px] leading-none">Detail Summary</span>
      </div>

      <div className="name-age-gender flex justify-between max-960:grid max-960:grid-cols-2 max-960:gap-[20px] max-960:justify-items-center">

        <div className='patient-box'>
            <img src={Name} alt="Name Icon" className="w-[40px] max-400:w-[30px]"/>
            <span className='text-[20px] max-900:text-[22px] max-400:text-[16px]'>{patientData.fullName}</span>
            <span className='text-[12px] text-gray-400 max-400:text-[10px]'>Name</span>
        </div>

        <div className='patient-box'>
            <img src={Age} alt="Age Icon" className="w-[30px] max-400:w-[23px]"/>
            <span className='text-[20px] max-900:text-[22px] max-400:text-[16px]'>{patientData.age}</span>
            <span className='text-[12px] text-gray-400 max-400:text-[10px]'>Age</span>
        </div>

        <div className='patient-box'>
            <img src={Profile} alt="Profile Icon" className="w-[30px] max-400:w-[23px]"/>
            <span className='text-[20px] max-900:text-[22px] max-400:text-[16px]'>{patientData.gender}</span>
            <span className='text-[12px] text-gray-400 max-400:text-[10px]'>Gender</span>
        </div>

        <div className='patient-box'>
            <img src={Id} alt="ID Icon" className="w-[60px] max-400:w-[40px]"/>
            <span className='text-[20px] max-900:text-[22px] max-400:text-[16px]'>{patientData.patientId}</span>
            <span className='text-[12px] text-gray-400 max-400:text-[10px]'>ID Number</span>
        </div>
      </div>
    </div>
  )
}
export default PatientDetail;
