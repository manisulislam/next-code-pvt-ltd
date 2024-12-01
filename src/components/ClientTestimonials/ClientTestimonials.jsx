import { FaStar } from 'react-icons/fa';

const ClientTestimonials = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-black mb-12">
          What Our Clients Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <img
                src="https://via.placeholder.com/80"
                alt="Client"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">John Doe</h3>
            <p className="text-gray-700 mb-4">CEO, Acme Inc.</p>
            <p className="text-gray-600 italic mb-4">
              The team at Next Code Pvt Ltd provided exceptional service and helped us streamline our business operations. Their solutions are top-notch!
            </p>
            <div className="flex justify-center">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <img
                src="https://via.placeholder.com/80"
                alt="Client"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Jane Smith</h3>
            <p className="text-gray-700 mb-4">COO, Beta Solutions</p>
            <p className="text-gray-600 italic mb-4">
              Working with Next Code Pvt Ltd was a game-changer. Their expertise in software development and customer service exceeded our expectations.
            </p>
            <div className="flex justify-center">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <img
                src="https://via.placeholder.com/80"
                alt="Client"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Michael Lee</h3>
            <p className="text-gray-700 mb-4">Founder, InnovateX</p>
            <p className="text-gray-600 italic mb-4">
              The professionalism and expertise demonstrated by Next Code Pvt Ltd helped us achieve our goals efficiently and effectively. Highly recommend!
            </p>
            <div className="flex justify-center">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
