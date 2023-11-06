import expertOne from '/images/ex-one.jpg';
import { motion } from 'framer-motion';

const TrustedCompanies = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 md:px-5 2xl:px-0">
      <section className="overflow-hidden bg-[#DFF7E5] sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left">
            <h2 className="text-2xl font-bold text-slate-800 md:text-3xl">
              Have a job that needs attention? Hiring a Expert is just a few
              clicks away
            </h2>

            <p className="hidden text-gray-600 md:mt-4 md:block">
              Hire Experts from all around the world and Get a great value for
              money while maintaining Top Class Quality. We give you the best
              opportunity to meet great talents. We Provide safe and secure
              payment methods for buyer and seller
            </p>

            <div className="mt-4 md:mt-8">
              <motion.button
                whileHover={{ scale: 1.2 }}
                href="#"
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-800 focus:outline-none"
              >
                Get Started Today
              </motion.button>
            </div>
          </div>
        </div>

        <img
          alt="Expert"
          src={expertOne}
          className="h-56 w-full object-cover sm:h-full"
        />
      </section>
    </div>
  );
};

export default TrustedCompanies;
