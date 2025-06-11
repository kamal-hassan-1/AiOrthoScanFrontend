import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading.png";
import Elbow from "./upload.webp";

const Mdiagnosis = () => {
	const [inputValue, setInputValue] = useState("");
	const [selectedFile, setSelectedFile] = useState(null);
	const [placeholder, setPlaceholder] = useState(
		"Insert any relevant details about the files..."
	);
	const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
	const [relevantDetails, setRelevantDetails] = useState("");
	const [loadingDiagnosis, setLoadingDiagnosis] = useState(false);
	const [diagnosisResult, setDiagnosisResult] = useState("");

	const triggerFileInput = () => {
		document.querySelector(".file-input").click();
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		setSelectedFile(file);
		if (file) {
			setUploadedImageUrl(URL.createObjectURL(file));
		}
	};

	const handleSubmit = async () => {
		if (!selectedFile || inputValue.trim() === "") {
			alert("Please select an image and enter relevant data!");
			return;
		}

		const formData = new FormData();
		formData.append("image", selectedFile);
		formData.append("relevantData", inputValue);

		try {
			const response = await axios.post(
				"https://aiorthoscanbackend-production.up.railway.app/api/main/uploadPatientData",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);

			setRelevantDetails(inputValue);
			alert("Data uploaded successfully!");
			//will store latest diagnosis data in local storage
			if (response.status === 200) {
				localStorage.setItem("patientData", JSON.stringify(response.data));
				console.log(localStorage.getItem("patientData"));
			}
		} catch (error) {
			console.error("Error uploading data:", error);
			alert(
				`Failed to upload data: ${error.response?.data?.error || error.message}`
			);
		}
	};

	const handleDiagnosis = async () => {
		if (!selectedFile) {
			alert("Please select an image first!");
			return;
		}

		const toBase64 = (file) =>
			new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onload = () => resolve(reader.result.split(",")[1]);
				reader.onerror = (error) => reject(error);
			});

		try {
			setLoadingDiagnosis(true); // Start loading
			const imageBase64 = await toBase64(selectedFile);
			const promptText =
				'Behave like a professional orthopedic doctor and analyze a sample x-ray/mri. Provide diagnoses, recommendations, any first aid etc. If the main prompt is not related to bones and orthopedic, say "I only analyze orthopedic issues". The prompt is: ' +
				inputValue;

			const response = await axios.post(
				"https://aiorthoscanbackend-production.up.railway.app/api/diagnosis/Aidiagnosis",
				{
					imageBase64,
					promptText,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			setDiagnosisResult(response.data.diagnosis);
		} catch (error) {
			console.error("Error getting diagnosis:", error);
			alert(
				`Failed to get diagnosis: ${
					error.response?.data?.error || error.message
				}`
			);
		} finally {
			setLoadingDiagnosis(false); // Stop loading
		}
	};

	useEffect(() => {
		const updatePlaceholder = () => {
			setPlaceholder(
				window.innerWidth <= 650
					? "Insert details..."
					: "Insert any relevant details about the files..."
			);
		};

		updatePlaceholder();
		window.addEventListener("resize", updatePlaceholder);

		return () => window.removeEventListener("resize", updatePlaceholder);
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
				<img src={uploadedImageUrl || Elbow} alt="" className="w-[130px]" />
				<div className="flex flex-row gap-[15px] justify-center items-center">
					<img src={Loading} alt="" className="w-[80px]" />
					<span className="text-green-300 text-[18px]">
						Upload your scan first then proceed to diagnosis
					</span>
				</div>
				<div className="w-[100%] h-auto flex justify-center">
					{relevantDetails ||
						"The relevant details will appear here once you upload the relevant files and data."}
				</div>
				<button
					onClick={handleDiagnosis}
					className="px-[15px] py-[8px] bg-purple-500 text-white rounded-[5px]"
				>
					Get AI Diagnosis
				</button>
				{loadingDiagnosis && (
					<div className="flex items-center gap-2 mt-[10px] text-purple-600">
						<svg
							className="animate-spin h-5 w-5 text-purple-600"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="4"
							></circle>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
							></path>
						</svg>
						<span>Getting AI diagnosis...</span>
					</div>
				)}
				{diagnosisResult && (
					<div className="mt-[20px] p-[20px] border border-purple-300 rounded-[10px] bg-purple-50 w-full max-w-[90%] lg:max-w-[1000px]">
						<h3 className="text-[20px] font-semibold text-purple-700 mb-[10px]">
							AI Diagnosis
						</h3>
						<p className="text-[16px] text-gray-800 whitespace-pre-wrap">
							{diagnosisResult}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Mdiagnosis;
