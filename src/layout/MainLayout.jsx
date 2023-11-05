import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      <div className="bg-emerald-900">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <div className="bg-emerald-900">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
