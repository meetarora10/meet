const Exp = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <h1 className="text-4xl font-bold text-center mb-16 text-white">
        <span className="text-blue-500 hover:text-blue-400 transition-colors duration-300">Experience</span>
      </h1>
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 mb-8 transform hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              Infosys Springboard
            </h2>
            <div className="flex items-center space-x-2">
              <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium">
                Python Intern
              </span>
            </div>
            <p className="text-gray-300 text-center mt-4">
              {/* Add your experience description here */}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exp
