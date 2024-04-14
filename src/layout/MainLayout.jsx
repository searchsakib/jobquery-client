import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { useEffect } from 'react';

const MainLayout = () => {
  useEffect(()=>{
    document.body.style.zoom="90%"
  },[])
  return (
    <div>
      <div className="bg-[#05386B]">
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div className="bg-[#05386B]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
