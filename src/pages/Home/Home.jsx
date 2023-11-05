import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div className="pb-[100px] pt-[100px] overflow-x-hidden">
      <Helmet>
        <title>Job Quest | Home</title>
      </Helmet>
      {/* Banner here */}
      <div className="p-4 md:p-5 lg:p-0">{/* Services here */}</div>
      <div className="p-4 md:p-5 lg:p-0">
        {/* Some other home section here */}
      </div>
      <div className="p-4 md:p-5 lg:p-0">
        {/* Some other home section here */}
      </div>
    </div>
  );
};

export default Home;
