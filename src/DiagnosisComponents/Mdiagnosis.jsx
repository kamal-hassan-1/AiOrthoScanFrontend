import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from "./Loading.png";
import Elbow from "./upload.webp";


const Mdiagnosis = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [placeholder, setPlaceholder] = useState('Insert any relevant details about the files...');
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [relevantDetails, setRelevantDetails] = useState('');

  const triggerFileInput = () => {
    document.querySelector('.file-input').click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      setUploadedImageUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile || inputValue.trim() === '') {
      alert('Please select an image and enter relevant data!');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('relevantData', inputValue);


    try {
      const response = await axios.post('https://aiorthoscanbackend-production.up.railway.app/api/main/uploadPatientData', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      setRelevantDetails(inputValue);
      alert('Data uploaded successfully!');
      //will store latest diagnosis data in local storage
      if(response.status === 200){
        localStorage.setItem('patientData', JSON.stringify(response.data));
        console.log(localStorage.getItem('patientData'));
      }
    } catch (error) {
      console.error('Error uploading data:', error);
      alert(`Failed to upload data: ${error.response?.data?.error || error.message}`);
    }
  };

  useEffect(() => {
    const updatePlaceholder = () => {
      setPlaceholder(
        window.innerWidth <= 650 ? 'Insert details...' : 'Insert any relevant details about the files...'
      );
    };

    updatePlaceholder();
    window.addEventListener('resize', updatePlaceholder);

    return () => window.removeEventListener('resize', updatePlaceholder);
  }, []);

  return (
    <div className="px-[50px] flex flex-col items-center gap-[30px] max-1200:px-[90px] max-800:px-[20px]">
      <div className="w-[100%] h-[100px] bg-gray-300 px-[20px] flex gap-[20px] justify-between items-center rounded-[10px]">
        <button 
          onClick={triggerFileInput}
          className="px-[15px] py-[8px] bg-blue-500 text-white rounded-[5px]"
        >
          Upload Image
        </button>
        <input
          type="file"
          onChange={handleFileChange}
          className="file-input hidden"
          accept="image/*"
        />
        <input
          type="text"
          placeholder={placeholder}
          className="input-diagnosis w-[90%] h-[40px] bg-background-blue rounded-[5px] outline-none px-[10px] text-[18px]"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button 
          onClick={handleSubmit}
          className="px-[15px] py-[8px] bg-green-500 text-white rounded-[5px]"
        >
          Submit
        </button>
      </div>
      <div className="w-[100%] h-auto flex flex-col gap-[30px] items-center">
        <img 
          src={uploadedImageUrl || Elbow} 
          alt="" 
          className="w-[130px]" 
        />
        <div className="flex flex-row gap-[15px] justify-center items-center">
          <img src={Loading} alt="" className="w-[80px]" />
          <span className="text-green-300 text-[18px]">Upload your scan first then proceed to diagnosis</span>
        </div>
        <div className="w-[100%] h-auto flex justify-center">
          {relevantDetails || 'The relevant details will appear here once you upload the relevant files and data.'}
        </div>
        <button
          className="w-[120px] px-[5px] text-[20px] py-[5px] bg-green-300 text-black rounded-[5px]"
        >
          Diagnose
        </button>
      </div>
    </div>
  );
};

export default Mdiagnosis;
