import { Helmet } from 'react-helmet-async';

// strt
import { FcGoogle } from 'react-icons/fc';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../components/providers/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../components/Firebase/firebase.config';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// end

const Login = () => {
  const { signIn, user } = useContext(AuthContext);
  console.log(user);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const location = useLocation();
  const navigate = useNavigate();

  const [logError, setLogError] = useState('');

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        console.log(`This is Display Name ${user.displayName}`);
        console.log(`This is Email ${user.email}`);
        Swal.fire({
          title: 'Login Successfull!',
          text: 'You Logged in Successfully.',
          icon: 'success',
          confirmButtonText: 'Okay',
        });

        navigate(location?.state ? location.state : '/');
      })
      .catch((err) => {
        console.log('error', err.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);

    setLogError('');

    signIn(email, password)
      .then((result) => {
        console.log(result.user);

        Swal.fire({
          title: 'Login Successfull!',
          text: 'You Logged in Successfully.',
          icon: 'success',
          confirmButtonText: 'Okay',
        });
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        console.error(error);
        setLogError(error.message);
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <Helmet>
        <title>Job Quest | Login</title>
      </Helmet>
      <div className="pt-[60px] pb-[76px] overflow-x-hidden">
        <div className="mx-auto w-5/12 min-w-fit ">
          <h2 className="text-3xl font-medium mt-0 mb-14 text-center uppercase">
            Login Here
          </h2>
          {logError && (
            <div className="text-red-600 text-center text-xl max-w-[540px] mx-auto pb-10">
              <p> {logError} </p>
            </div>
          )}

          <form
            onSubmit={handleLogin}
            className="card-body shadow-none md:shadow-xl rounded-none bg-green-200"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-base">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered rounded-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-medium text-base">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered rounded-none"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#05386B] text-white hover:text-[#05386B] hover:bg-blue-50 hover:border-2 hover:border-[#05386B] rounded-none">
                Login
              </button>
            </div>
          </form>
          <div className="flex items-center justify-center gap-3 mx-auto my-8">
            <p className="font-medium text-xl">
              {' '}
              <span className="text-lg">or</span> Login With
            </p>
            <div
              onClick={handleGoogleSignIn}
              className="bg-gray-200 rounded-full"
            >
              <Link>
                <FcGoogle className="p-1" size={55}></FcGoogle>
              </Link>
            </div>
          </div>
          <p className="font-medium text-center text-lg">
            Do not have an account?{'   '}
            <Link
              to="/register"
              className="font-semibold text-[#05386B] underline text-2xl"
            >
              Register
            </Link>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
