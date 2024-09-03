  import {
    FaXTwitter,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaDiscord,
    FaInstagram,
  } from "react-icons/fa6";


  import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
  import { SiC, SiMongodb } from 'react-icons/si';
  import { DiDatabase } from 'react-icons/di';
  import ITC_Logo  from '../assets/ITC_Logo.png';
  import Prep_Logo  from '../assets/Prep_Logo.png';


  import image1 from "../assets/Proj1.png";
  import image2 from "../assets/Proj2.png";
  import image3 from "../assets/Proj3.png";
  import image4 from "../assets/project4.jpeg";
  import image5 from "../assets/project5.jpeg";
  import image6 from "../assets/project6.jpeg";
  import image7 from "../assets/project7.jpeg";
  import image8 from "../assets/project8.jpeg";

  import user1 from "../assets/profile-pictures/user1.jpg";
  import user2 from "../assets/profile-pictures/user2.jpg";
  import user3 from "../assets/profile-pictures/user3.jpg";
  import user4 from "../assets/profile-pictures/user4.jpg";


  export const NAVIGATION_LINKS = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience " },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
  ];

  export const PROFILE = {
    name: "Sarath Kothapalli",
    info: "Computer Science Student",
  };

  export const ABOUT = {
    text1:
      "The best part of being a <span class='highlight'>programmer</span> and an <span class='highlight'>artist</span> is the thrill of creating something delightful. <span class='highlight'>It's logic-driven creativity!</span>",
    text2:
      "Welcome everybody! I am a guy from GITAM University who's Adept at problem-solving, with a keen interest in developing efficient software solutions. My academic journey has equipped me with a deep understanding of computer science principles and a knack for problem-solving. I'm eager to apply my skills to develop innovative and efficient software solutions. I'm constantly seeking opportunities to learn and grow in a dynamic work environment, where I can contribute to technological advancements and make a meaningful impact."};

  export const PROJECTS = [
    {
      title: "ITC Intranet Employee Portal",
      subtitle:
        "Developed an employee portal in internship duration for ITC (PSPD), one of the largest product manufacturing companies in India.",
      techstack: "HTML, CSS, JS, Node.js, MongoDB",
      image: image1,
    },
    {
      title: "GITAM Colab",
      subtitle:
        "Currently building an interface that helps students to collaborate within departments or inter department in the university to team up and work on projects.",
      techstack: "HTML, CSS, JS, Node.js, MongoDB",
      image: image2,
    },
    {
      title: "AQI Data Visualization",
      subtitle: "Created functional dashboards on Tableau (Public) on various datasets provided. Used Air Quality Index (AQI) data",
      techstack: "Tableau",
      image: image3,
    },
  ];

  export const EXPERIENCES = [
    {
      logo: ITC_Logo,
      company: "ITC, PSPD",
      role: "Full-Stack Intern",
      duration: "June 2024",
      description: "Developed an intranet employee portal that includes - Internal applications, Support Systems, HR Updates, Holiday Calendars, Contacts & Profile Integration",
    },
    {
      logo: Prep_Logo,
      company: "PrepInsta",
      role: "Data Analytics Intern",
      duration: "Dec 2023 - Feb 2024",
      description: "Performed data cleaning, manipulation, visualization & analysis on datasets and CSV files. Also created functional dashboards using Tableau",
    },
  ];

  export const SKILLS = [
    {
      icon: <FaPython className="text-4xl lg:text-6xl text-yellow-500" />,
      name: "Python",
    },
    {
      icon: <SiC className="text-4xl lg:text-6xl text-blue-500" />,
      name: "C Lang",
    },
    {
      icon: <FaJava className="text-4xl lg:text-6xl text-orange-500" />,
      name: "Java",
    },
    {
      icon: <DiDatabase className="text-4xl lg:text-6xl text-purple-600" />,
      name: "SQL",
    },
    {
      icon: <FaHtml5 className="text-4xl lg:text-6xl text-orange-600" />,
      name: "HTML",
    },
    {
      icon: <FaCss3Alt className="text-4xl lg:text-6xl text-blue-600" />,
      name: "CSS",
    },
    {
      icon: <FaJsSquare className="text-4xl lg:text-6xl text-yellow-400" />,
      name: "JavaScript",
    },
    {
      icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
      name: "MongoDB",
    },
  ];
  export const ACHIEVEMENT = {
    title: "International Hackaton - Tokyo",
    award: "Gold Medalist - 2024",
    description:
      "Winner of the 2024 Algo coding representing the University of Oxford. This achievement showcases exceptional problem-solving skills and dedication. The event provided a platform to innovate and collaborate with the brightest minds, resulting in a prestigious accolade.",
  };

  export const TESTIMONIALS = [
    {
      name: "Emily Johnson",
      title: "CEO, Tech Innovators",
      quote:
        "Working with Robert has been an incredible experience. His design sensibilities and technical expertise are top-notch, making him a valuable asset to any project.",
      image: user1,
    },
    {
      name: "Michael Lee",
      title: "CTO, Creative Minds",
      quote:
        "Robert consistently delivers high-quality work, combining creativity and technical prowess. His ability to solve complex problems with elegant solutions is truly impressive.",
      image: user2,
    },
    {
      name: "Sophia Martinez",
      title: "Lead Developer, Digital Solutions",
      quote:
        "Robert's dedication to his craft is evident in every project he undertakes. His innovative approach and attention to detail set him apart as a leading designer and developer.",
      image: user3,
    },
    {
      name: "Daniel Thompson",
      title: "Project Manager, InnovateX",
      quote:
        "Robert's ability to understand client needs and translate them into beautiful, functional designs is remarkable. He is a true professional who always exceeds expectations.",
      image: user4,
    },
  ];

  export const SOCIAL_MEDIA_LINKS = [
    {
      href: "https://x.com/",
      icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://x.com/",
      icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://x.com/",
      icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://x.com/",
      icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://github.com/",
      icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://www.linkedin.com/",
      icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
    },
  ];
