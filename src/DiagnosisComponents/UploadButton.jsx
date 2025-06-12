import { useState } from "react";
import Cross from "../img/cross.png";
import Attach from "../svg/attach.svg";

function UploadButton({ Upload }) {
	const [selectedImage, setSelectedImage] = useState(null);

	const handleImageUpload = (event) => {
		const file = event.target.files[0];
		if (file) {
			setSelectedImage(URL.createObjectURL(file));
		}
	};

	const cancelUpload = () => {
		setSelectedImage(null);
	};

	return (
		<div>
			<input
				type="file"
				accept="image/*"
				onChange={handleImageUpload}
				style={{ display: "none" }}
				id="fileInput"
			/>

			{!selectedImage ? (
				<button
					className="w-[100px] h-[40px] bg-gray-100 border-[2px] rounded-[5px] text-[18px] text-black font-[600] 
          font-sans flex justify-center items-center max-800:h-[35px] max-650:h-[25px] max-650:text-[16px] max-480:w-[90px]"
					onClick={() => document.getElementById("fileInput").click()}
				>
					<img src={Attach} alt="" className="w-[20px] max-650:w-[15px]" />
					Attach
				</button>
			) : (
				<div className="flex flex-row items-center space-x-2">
					<button
						className="w-[100px] h-[40px] bg-gray-100 border-[2px] rounded-[5px] text-[18px] text-black font-[600] 
            font-sans flex justify-center items-center max-800:h-[35px] max-650:h-[25px] max-650:text-[16px] max-480:text-[14px] max-480:w-[70px]"
						onClick={Upload}
					>
						Upload
					</button>
					<img
						src={Cross}
						onClick={cancelUpload}
						className="w-[20px] h-[20px] cursor-pointer max-480:w-[10px] max-480:h-[10px]"
						alt="Cancel Upload"
						title="Cancel Upload"
					/>
				</div>
			)}
		</div>
	);
}

export default UploadButton;
