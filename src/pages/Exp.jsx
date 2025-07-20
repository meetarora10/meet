import { useState, useEffect, useRef } from "react";

const Exp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState([false, false]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset animations first
            setIsVisible(false);
            setCardsVisible([false, false]);
            
            // Trigger animations with staggered timing
            setTimeout(() => setIsVisible(true), 100);
            setTimeout(() => setCardsVisible([true, false]), 400);
            setTimeout(() => setCardsVisible([true, true]), 700);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '-50px 0px', // Start animation 50px before entering viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="bg-gradient-to-b from-neutral-900 to-neutral-700 text-center px-4 md:px-8 lg:px-16 py-20" 
      id="exp"
    >
      <div>
        <h1 
          className={`text-center text-4xl text-[#ff8300] font-bold transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          Experience
        </h1>
      </div>
      
      <div className="mt-12">
        <div className="firstcontainer flex flex-col md:flex-row justify-center items-center gap-8 text-gray-400 mb-12">
          {/* First Card */}
          <div 
            className={`first m-2 p-4 border border-gray-700 rounded w-full max-w-[300px] flex flex-col items-center transition-all duration-[1800ms] transform hover:scale-105 hover:border-[#ff8300] hover:shadow-lg hover:shadow-[#ff8300]/20 ${
              cardsVisible[0] 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-16'
            }`}
          >
            <img 
              className="w-20 h-20 object-contain mb-4 rounded-full transition-transform duration-300 hover:rotate-12" 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95Z4YVYbM6SAVHtlkuUqaFnyVFoQG54p-7A&s" 
              alt="Infosys Logo" 
            />
            <div className="title flex-grow w-full">
              <div className="p-4 rounded-lg shadow-md h-full flex flex-col justify-between text-center">
                <h3 className="text-lg font-bold text-white mb-2 transition-colors duration-300 hover:text-[#ff8300]">
                  Python Intern
                </h3>
                <p className="text-sm text-stone-300 mb-2" style={{fontFamily:'Satoshi, sans-serif'}}>
                  Infosys Springboard | Dec 2024 - Feb 2025 | Remote
                </p>
                <p className="mt-2 text-stone-200 text-sm" style={{fontFamily:'Satoshi, sans-serif'}}>
                  Developed a Python-based web application using Flask, integrating RESTful APIs for data retrieval and manipulation.
                  Implemented user authentication and authorization features, enhancing security and user experience.
                </p>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div 
            className={`second m-2 p-4 border border-gray-700 rounded w-full max-w-[300px] flex flex-col items-center transition-all duration-[1800ms] transform hover:scale-105 hover:border-[#ff8300] hover:shadow-lg hover:shadow-[#ff8300]/20 ${
              cardsVisible[1] 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-16'
            }`}
          >
            <img 
              className="w-20 h-20 object-contain mb-4 mx-auto rounded-full transition-transform duration-300 hover:rotate-12" 
              src="https://repository-images.githubusercontent.com/331823142/9764a900-5c8e-11eb-9f94-da2a01385e83" 
              alt="GirlScript Logo" 
            />
            <div className="title flex-grow w-full">
              <div className="p-4 rounded-lg shadow-md h-full flex flex-col justify-between text-center">
                <h3 className="text-lg font-bold text-white mb-2 transition-colors duration-300 hover:text-[#ff8300]">
                  Contributor
                </h3>
                <p className="text-sm text-stone-300 mb-2" style={{fontFamily:'Satoshi, sans-serif'}}>
                  GirlScript Summer Of Code | May 2024 - Aug 2024 | Remote
                </p>
                <p className="mt-2 text-stone-200 text-sm" style={{fontFamily:'Satoshi, sans-serif'}}>
                  Secured a spot in the top 25 contributors of the GirlScript Summer of Code 2024,
                  contributing to the development of open-source projects.
                </p>
              </div>
            </div>
          </div>

          <div 
            className={`second m-2 p-4 border border-gray-700 rounded w-full max-w-[300px] flex flex-col items-center transition-all duration-[1800ms] transform hover:scale-105 hover:border-[#ff8300] hover:shadow-lg hover:shadow-[#ff8300]/20 ${
              cardsVisible[1] 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-16'
            }`}
          >
            <img 
              className="w-20 h-20 object-contain mb-4 mx-auto rounded-full transition-transform duration-300 hover:rotate-12" 
              src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Defence_Research_and_Development_Organisation.svg/1200px-Defence_Research_and_Development_Organisation.svg.png" 
              alt="DRDO Logo" 
            />
            <div className="title flex-grow w-full">
              <div className="p-4 rounded-lg shadow-md h-full flex flex-col justify-between text-center">
                <h3 className="text-lg font-bold text-white mb-2 transition-colors duration-300 hover:text-[#ff8300]">
                  Intern
                </h3>
                <p className="text-sm text-stone-300 mb-2" style={{fontFamily:'Satoshi, sans-serif'}}>
                  Defence Research and Development Organisation | May 2025 - Jul 2025 | Hybrid
                </p>
                <p className="mt-2 text-stone-200 text-sm" style={{fontFamily:'Satoshi, sans-serif'}}>
                  Contributed to various projects focused on defense technology and research.
                </p>
              </div>
            </div>
          </div>
          <div 
            className={`second m-2 p-4 border border-gray-700 rounded w-full max-w-[300px] flex flex-col items-center transition-all duration-[1800ms] transform hover:scale-105 hover:border-[#ff8300] hover:shadow-lg hover:shadow-[#ff8300]/20 ${
              cardsVisible[1] 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-16'
            }`}
          >
            <img 
              className="w-20 h-20 object-contain mb-4 mx-auto rounded-full transition-transform duration-300 hover:rotate-12" 
              src="https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/001/927/827/datas/large.jpeg" 
              alt="Veersa Logo" 
            />
            <div className="title flex-grow w-full">
              <div className="p-4 rounded-lg shadow-md h-full flex flex-col justify-between text-center">
                <h3 className="text-lg font-bold text-white mb-2 transition-colors duration-300 hover:text-[#ff8300]">
                  Intern
                </h3>
                <p className="text-sm text-stone-300 mb-2" style={{fontFamily:'Satoshi, sans-serif'}}>
                  Defence Research and Development Organisation | Jul 2025 - Present | Hybrid
                </p>
                <p className="mt-2 text-stone-200 text-sm" style={{fontFamily:'Satoshi, sans-serif'}}>
                  Worked on Django, React and redux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exp;
