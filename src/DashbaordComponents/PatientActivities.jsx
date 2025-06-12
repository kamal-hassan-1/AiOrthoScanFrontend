import Completed from "../img/completed.png";
import History from "../img/history.png";
import Pending from "../img/pending.png";
import Success from "../img/success.png";

const Patient_Achievement = () => {
	return (
		<div
			className="w-[80%] py-[30px] bg-dark-blue rounded-[10px] flex justify-evenly max-1350:grid max-1350:grid-cols-2
      max-1350:justify-items-center max-1350:w-[70%] max-1350:h-[400px] max-1350:gap-[30px] max-820:gap-[20px] max-820:px-[20px]
      max-650:h-[350px] max-650:w-[90%] max-400:py-[20px] max-400:h-[300px]
      "
		>
			<div className="achievementBox">
				<img src={Completed} alt="" className="w-[50px] max-650:w-[35px]" />
				<span className="text-[14px] max-400:text-[11px]">Scans Completed</span>
				<span className="text-[14px] max-400:text-[11px]">2</span>
			</div>

			<div className="achievementBox">
				<img src={Pending} alt="" className="w-[50px] max-650:w-[35px]" />
				<span className="text-[14px] max-400:text-[11px]">Pending Scans</span>
				<span className="text-[14px] max-400:text-[11px]">1</span>
			</div>

			<div className="achievementBox">
				<img src={Success} alt="" className="w-[50px] max-650:w-[35px]" />
				<span className="text-[14px] max-400:text-[11px]">Success Rate</span>
				<span className="text-[14px] max-400:text-[11px]">90%</span>
			</div>

			<div className="achievementBox">
				<img src={History} alt="" className="w-[60px] max-650:w-[40px]" />
				<span className="text-[14px] max-400:text-[11px]">
					Days Since Last Scan
				</span>
				<span className="text-[14px] max-400:text-[11px]">15</span>
			</div>
		</div>
	);
};

export default Patient_Achievement;
