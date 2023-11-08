import { Helmet } from 'react-helmet-async';
import Banner from '../../components/Banner/Banner';
import Services from '../../components/Services/Services';
import HireExperts from '../../components/HireExperts/HireExperts';
import Career from '../../components/Career/Career';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  // for aos
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="pb-[100px] pt-[100px] overflow-x-hidden">
      <Helmet>
        <title>Job Quest | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="pb-[100px] pt-[100px]" data-aos="zoom-in-up">
        <Services></Services>
      </div>
      <div className="pb-[100px]" data-aos="zoom-out-right">
        <HireExperts></HireExperts>
      </div>
      <div data-aos="zoom-out-left">
        <Career></Career>
      </div>
    </div>
  );
};

export default Home;
