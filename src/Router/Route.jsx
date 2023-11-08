import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import AddJob from '../pages/AddJob/AddJob';
import MyPostedJobs from '../pages/MyPostedJobs/MyPostedJobs';
import MyBids from '../pages/MyBids/MyBids';
import BidRequests from '../pages/BidRequests/BidRequests';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import JobDetails from '../pages/JobDetails/JobDetails';

const myRoute = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '',
        element: <Home></Home>,
      },
      {
        path: '/add-job',
        element: <AddJob></AddJob>,
      },
      {
        path: '/my-posted-jobs',
        element: <MyPostedJobs></MyPostedJobs>,
        loader: () =>
          fetch('https://jobquest-server.vercel.app/my-posted-jobs'),
      },
      {
        path: '/my-bids',
        element: <MyBids></MyBids>,
        loader: () => fetch('https://jobquest-server.vercel.app/my-bids'),
      },
      {
        path: '/bid-requests',
        element: <BidRequests></BidRequests>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/job-details/:id',
        element: <JobDetails></JobDetails>,
        loader: ({ params }) =>
          fetch(`https://jobquest-server.vercel.app/jobs/${params.id}`),
      },
    ],
  },
]);

export default myRoute;
