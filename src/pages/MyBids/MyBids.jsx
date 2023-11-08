import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const MyBids = () => {
  const myBids = useLoaderData();
  return (
    <div className="max-w-screen-xl mx-auto">
      <Helmet>
        <title>Job Quest | My Bids</title>
      </Helmet>
      <h2>This is My Bids {myBids.length} </h2>
    </div>
  );
};

export default MyBids;
