import { FaStar } from 'react-icons/fa';

const OurJourney = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Journey</h2>
          <p className="text-lg text-gray-600 mt-4">
            Explore the milestones that have shaped our growth and success.
          </p>
        </div>

        <div className="space-y-16">
          {/* Milestone 1 */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex justify-center items-center">
              <FaStar size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-4">2020 - The Beginning</h3>
            <p className="text-gray-600 mt-2 text-center max-w-md">
              We launched our journey with a clear vision of transforming the software industry.
            </p>
          </div>

          {/* Milestone 2 */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex justify-center items-center">
              <FaStar size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-4">2021 - First Milestone</h3>
            <p className="text-gray-600 mt-2 text-center max-w-md">
              Successfully completed our first major project, gaining the trust of several key clients.
            </p>
          </div>

          {/* Milestone 3 */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex justify-center items-center">
              <FaStar size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-4">2022 - Expanding Reach</h3>
            <p className="text-gray-600 mt-2 text-center max-w-md">
              We expanded our services to international markets, broadening our impact across the globe.
            </p>
          </div>

          {/* Milestone 4 */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex justify-center items-center">
              <FaStar size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-4">2023 - Innovative Solutions</h3>
            <p className="text-gray-600 mt-2 text-center max-w-md">
              We introduced innovative software solutions that revolutionized the industry.
            </p>
          </div>

          {/* Milestone 5 */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex justify-center items-center">
              <FaStar size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-4">2024 - The Future Ahead</h3>
            <p className="text-gray-600 mt-2 text-center max-w-md">
              We are preparing to launch a new wave of innovative products that will set new standards in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
