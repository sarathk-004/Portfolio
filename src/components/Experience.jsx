import { EXPERIENCES } from '../constants';

const Experience = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-screen" id="experience">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
        {/* Experience Title */}
        <div className="flex flex-col items-center md:items-start md:justify-center text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl text-blue-500 font-semibold uppercase">Experience</h2>
          <p className='tracking-tighter mt-8 text-xl sm:text-2xl lg:text-6xl opacity-50'>
            "The best way to shape the future is to create it through hands-on experience."
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {EXPERIENCES.map((experience, index) => (
            <div 
              key={index} 
              className="flex flex-col gap-4 bg-gradient-to-r from-zinc-800 to-zinc-800 rounded-xl p-4 sm:p-6 lg:mr-5"
            >
              <div className="flex items-center gap-4">
                <div>
                  <img 
                    src={experience.logo} 
                    alt={`${experience.company} Logo`} 
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-md object-contain p-2"
                  />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold">{experience.company}</div>
              </div>
              <div className="font-semibold text-blue-500 text-sm sm:text-lg flex items-center justify-between">
                <div>{experience.role}</div>
                <div className="text-xs sm:text-sm lg:text-md lg:mr-3">{experience.duration}</div>
              </div>
              
              <p className="text-xs sm:text-sm lg:text-lg">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
