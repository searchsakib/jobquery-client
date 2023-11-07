import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const WebDev = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:p-3">
        {/* Card start */}
        <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-3 lg:p-5">
          <div className="">
            <div className="p-4">
              <div className="text-3xl text-gray-800 font-bold pb-3">
                JS Developer frontend backend
              </div>
              <p className="text-gray-600 text-lg mt-2">
                Proficient in JavaScript, responsible for developing interactive
                and dynamic user interfaces. Collaborates with design and
                backend teams to ensure seamless integration of JavaScript
                functionalities, enhancing the overall performance and user
                experience of web applications.
              </p>
              <div className="flex flex-col xl:flex-row justify-between mt-4">
                <p className="text-slate-700 text-lg font-medium pb-2">
                  <span className="font-semibold">Deadline:</span> 08-02-2024
                </p>
                <p className="text-slate-700 text-lg font-medium">
                  <span className="font-semibold">Price Range:</span> $1200 -
                  $1500
                </p>
              </div>
              <div className="pt-5">
                <Link>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    className="rounded-lg btn bg-emerald-600 text-white transition hover:bg-emerald-800 w-40 text-base"
                  >
                    Bid Now
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Card end */}
      </div>
    </div>
  );
};

export default WebDev;
