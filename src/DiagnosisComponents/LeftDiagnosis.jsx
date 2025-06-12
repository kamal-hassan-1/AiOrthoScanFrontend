import { Link } from "react-router-dom";
import Bone from "../img/bone.png";
import Home from "../img/home.png";
import SignOut from "../svg/sign-out.svg";

const Left = ({ isVisible, toggleLeft }) => {
	return (
		<div
			className="w-[15%] h-[100vh] sticky top-0 bg-dark-blue max-1200:absolute pt-[50px] max-1200:top-[0px] max-1200:left-[-1000px] max-1200:w-[200px] z-20"
			style={{ left: isVisible ? "0px" : "-1000px" }}
		>
			<div className="buttons-box px-[20px] flex flex-col gap-[10px] max-1480:px-[10px] max-1200:px-[20px]">
				<div className="button hidden max-1200:flex" onClick={toggleLeft}>
					<div className="w-[40px] flex justify-center">
						<img src={Cross} alt="" className="w-[30px] h-[30px]" />
					</div>
					<span className="button-text">Close</span>
				</div>

				<Link to="/Dashboard" className="button">
					<div className="w-[40px] flex justify-center">
						<img src={Home} alt="" className="w-[20px] h-[20px]" />
					</div>
					<div className="button-text"> Dashboard </div>
				</Link>

				<Link to="/PatientRecord" className="button">
					<div className="w-[40px] flex justify-center">
						<div className="w-[30px] h-[30px] rounded-full bg-gray-400 flex items-center justify-center border-[3px] border-border-blue">
							<img
								src={Bone}
								alt=""
								className="w-[30px] max-820:w-[75px] max-520:w-[50px]"
							/>
						</div>
					</div>
					<div className="button-text"> Patient Record </div>
				</Link>

				<Link to="/Diagnose" className="button bg-green-300">
					<div className="w-[40px] flex justify-center">
						<div className="w-[30px] h-[30px] rounded-full bg-gray-400 flex items-center justify-center border-[3px] border-border-blue">
							<img
								src={Bone}
								alt=""
								className="w-[30px] max-820:w-[75px] max-520:w-[50px] filter-brightness-1"
							/>
						</div>
					</div>
					<div className="button-text text-black"> Treatment </div>
				</Link>

				<Link to="/" className="button">
					<div className="w-[40px] flex justify-center">
						<img src={SignOut} alt="" className="w-[25px]" />
					</div>
					<div className="button-text"> Sign Out </div>
				</Link>
			</div>
		</div>
	);
};

export default Left;
