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
import UpdateJob from '../pages/UpdateJob/UpdateJob';
import PrivateRoute from './PrivateRoute';

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
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: '/my-posted-jobs',
        element: (
          <PrivateRoute>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoute>
        ),
        loader: () =>
          fetch('https://jobquest-server.vercel.app/my-posted-jobs'),
      },
      {
        path: '/my-bids',
        element: (
          <PrivateRoute>
            <MyBids></MyBids>
          </PrivateRoute>
        ),
        loader: () => fetch('https://jobquest-server.vercel.app/my-bids'),
      },
      {
        path: '/bid-requests',
        element: (
          <PrivateRoute>
            <BidRequests></BidRequests>
          </PrivateRoute>
        ),
        loader: () => fetch('https://jobquest-server.vercel.app/my-bids'),
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
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://jobquest-server.vercel.app/jobs/${params.id}`),
      },
      {
        path: '/update-job/:id',
        element: <UpdateJob></UpdateJob>,
        loader: ({ params }) =>
          fetch(`https://jobquest-server.vercel.app/update-job/${params.id}`),
      },
    ],
  },
]);

export default myRoute;
