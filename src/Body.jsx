import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Upload from "./components/Upload";
import Chat from "./components/Chat";
import Preview from "./components/Preview";
import { useSharedFile } from "./utils/useSharedFile";
import Navbar from "./components/Navbar";

const Body = () => {
    const { sharedFile } = useSharedFile();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <div className="flex flex-col h-screen w-full">
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="flex flex-row h-full w-full ">
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                {sharedFile ? (
                    <>
                        <Preview />
                        <Chat />
                    </>
                ) : (
                    <Upload />
                )}
            </div>
        </div>
    );
};

export default Body;
