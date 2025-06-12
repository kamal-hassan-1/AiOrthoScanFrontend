import Diagnose from "../DiagnosisComponents/Mdiagnosis";
import Main from "../PatientComponents/Main";
import Header from "./Header";
import MainDashboard from "./MainDashboard";

import { useLocation } from "react-router-dom";

const RightDash = ({ toggleLeft }) => {
	const location = useLocation();

	return (
		<div className="w-[85%] min-h-screen bg-background-blue pb-[30px] max-1200:w-[100%] overflow-y-auto z-10">
			<Header toggleLeft={toggleLeft} />
			{location.pathname === "/Dashboard" && <MainDashboard />}
			{location.pathname === "/PatientRecord" && <Main />}
			{location.pathname === "/Diagnose" && <Diagnose />}
		</div>
	);
};

export default RightDash;
