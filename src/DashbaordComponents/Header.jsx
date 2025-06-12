import Profile from "../img/profile-logo.jpg";
import Menu from "../svg/menu.svg";

const Header = ({ toggleLeft }) => {
	return (
		<header className="w-[100%] bg-background-blue pr-[40px] py-[20px] justify-end flex items-center gap-[40px] max-1200:w-[100%]">
			<img
				src={Menu}
				alt=""
				className="hidden max-1200:block absolute left-[30px] top-[30px] cursor-pointer"
				onClick={toggleLeft}
			/>
			<img
				src={Profile}
				alt="Profile Icon"
				className="w-[40px] cursor-pointer rounded-full"
			/>
		</header>
	);
};
export default Header;
