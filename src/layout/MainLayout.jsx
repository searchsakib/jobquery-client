import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      <div className="">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
