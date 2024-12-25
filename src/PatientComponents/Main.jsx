import React from 'react';
import Elbow from "../DiagnosisComponents/upload.webp";
import PatientDetail from "./PatientDetail";
import Report from "./Report";

const Main = () => {

  const storedData = localStorage.getItem('patientData');
  let image = Elbow;
  if(storedData && JSON.parse(storedData).imageUrl){
    image = JSON.parse(storedData).imageUrl;
  }

  return (
    <main className="flex justify-center gap-[40px] max-1350:px-[20px] max-800:flex-col max-800:items-center max-800:gap-[20px]">
      <div className='w-[700px] flex flex-col gap-[20px] max-800:items-center max-800:w-[90%]'>
        <PatientDetail/>
        <Report/>
      </div>
    
      <img
        src={image}
        alt="MedicalImage"
        className="w-[30%] h-[30%]"
      />
    </main>
  )
}

export default Main