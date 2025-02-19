import SidebarLightIcon from "../assets/svgs/sidebar-light.svg";

const Navbar = ({ toggleSidebar }) => {
    return (
        <div className="h-14 w-full bg-emerald-600 flex items-center px-4 relative sm:hidden">
            {/* Sidebar Button (Left-Aligned) */}
            <button onClick={toggleSidebar} className="flex items-center">
                <img src={SidebarLightIcon} alt="sidebar" className="h-8" />
            </button>

            {/* Centered Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <a href="#">
                    <img
                        src="https://www.chatpdf.com/_next/static/media/SidebarLogo.243d2948.svg"
                        alt="Care Simplify"
                        className="h-8"
                    />
                </a>
            </div>
        </div>
    );
};

export default Navbar;
