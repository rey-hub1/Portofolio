import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import AppContent from "./AppContent";

const Layout = () => {
    return (
        <div className="font-['Roboto']">

            <Navbar />
            <AppContent >
                <Outlet /> {/* Konten halaman spesifik akan dirender di sini */}
            </AppContent>
        </div>
    );
}

export default Layout;