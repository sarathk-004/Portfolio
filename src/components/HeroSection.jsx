    import banner from "../assets/profile-pictures/banner.png";
    import { FaLinkedin, FaGithub } from 'react-icons/fa';
    import resume from "../assets/resume.pdf";
    import { FaChevronDown } from 'react-icons/fa';

    const HeroSection = () => {
    return (
    <div className='relative flex min-h-screen items-start justify-center' id="hero">
    <img src={banner} alt="banner" className="absolute inset-0 z-10 h-full w-full object-cover bg-no-repeat opacity-70" />
    <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-80% to to-black lg:from-60%"></div>
    <div className="z-20 mx-4 mt-60 ml-8 max-w-3xl">
        <p className="text-blue-500 text-center text-4xl md:text-4xl mb-4">Hi there! This is,</p>
        <h1 className="text-center text-4xl font-semibold tracking-wide md:text-7xl sm: -ml-3">Sarath Kothapalli</h1>
        <p className="text-center lg:text-2xl lg:mt-2 md:text-2xl mb-4 sm:text-sm sm:-m-2">Computer Science Student</p>
        <div className="flex justify-center mt-4 gap-4 items-center">
        <a href="https://www.linkedin.com/in/sarath-kothapalli" target="_blank" rel="noopener noreferrer" className="text-white">
            <div className="p-3 rounded-full bg-gray-900 hover:bg-gray-700">
                <FaLinkedin size={24} />
            </div>
        </a>
        <a href="https://github.com/sarathk-004" target="_blank" rel="noopener noreferrer" className="text-gray-200">
            <div className="p-3 rounded-full bg-gray-900 hover:bg-gray-700">
                <FaGithub size={24} />
            </div>
        </a>
        <a href={resume} download="resume.pdf" className="text-gray-200">
            <div className="p-2 rounded bg-blue-600 hover:bg-blue-500">
                Resume
            </div>
        </a>
        
    </div>
    <div className="mt-24 text-center flex flex-col items-center justify-center">
        <p className="mt-2 text-xl">Scroll Down</p>
        <FaChevronDown className="" />
        </div>
    </div>
    </div>

    );
    }

    export default HeroSection;
