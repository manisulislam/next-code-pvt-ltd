const Partnerships = () => {
    return (
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-black mb-12">
            Our Trusted Partners
          </h2>
  
          {/* Partners Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Partner 1 */}
            <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Partner 1"
                className="h-16 w-auto object-contain"
              />
            </div>
  
            {/* Partner 2 */}
            <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Partner 2"
                className="h-16 w-auto object-contain"
              />
            </div>
  
            {/* Partner 3 */}
            <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Partner 3"
                className="h-16 w-auto object-contain"
              />
            </div>
  
            {/* Partner 4 */}
            <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Partner 4"
                className="h-16 w-auto object-contain"
              />
            </div>
  
            {/* Partner 5 */}
            <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Partner 5"
                className="h-16 w-auto object-contain"
              />
            </div>
  
            {/* Partner 6 */}
            <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Partner 6"
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Partnerships;
  