// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/photo2.jpeg";
// Tech stack images
import cpp from "./assets/techstack/cpp.png";
import python from "./assets/techstack/python.jpg";
import sql from "./assets/techstack/sql.png";
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import nodejs from './assets/techstack/nodejs.jpg';
import mongodb from './assets/techstack/mongodb.jpg';
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import tensorflow from "./assets/techstack/tensorflow.png";
import numpy from "./assets/techstack/numpy.png";

// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";
import projectImage7 from "./assets/projects/project7.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Avantika Khanna",
  tagline: "I am a Technophile.",
  img: profile,
  about: `I am a final year Btech student at Graphic Era University. I have strong problem solving, analytics,decision making and excellent communication with interpersonal skills. I pay attention to details and am able to interpret data and trends,diagnose problems, and formulate effective actions plans to resolve issues. I am self-driven and motivated with entrepreneurial passion and desire to work in a fast-paced, result driven environment with varied responsibilities.

  • I have scored a combined aggregate score of 8 or above across all semesters
  • I possess an extremely sound understanding in the basic areas of computer science such as Data structures , Algorithms, Object Oriented Programming and Design.
  • I have a good command on C/C++.
  
  Though I don't have much real world experience but I am a keen and quick learner and I am ready to put my 100% in whatever I do.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/avantika-khanna-586783228/",
  github: "https://github.com/avanti77",
  twitter: "https://twitter.com/_a_one_7804",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Full Stack Web Development Intern",
    Company: `TBI GEU`,
    Location: "Dehradun",
    Type: "Internship",
    Duration: "April 2024 - June 2024",
  },
  // {
  //   Position: "Internship",
  //   Company: `Company Name here`,
  //   Location: "Bengaluru",
  //   Type: "Internship",
  //   Duration: "Sep 2021 - Dec 2021",
  // },
  // {
  //   Position: "Internship",
  //   Company: `Company Name here`,
  //   Location: "Bengaluru",
  //   Type: "Internship",
  //   Duration: "Sep 2021 - Dec 2021",
  // },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Course: "Bachelor in Computer Science and Engineering",
    College: `Graphic Era Deemed To Be University`,
    Location: "Dehradun",
    Type: "Full Time",
    Duration: "2021 - Present",
  },
  {
    Course: "Intermediate",
    College: "St. Mary Senior Secondary School",
    Location: "Moradabad",
    Type: "96.4%",
    Duration: "2021",
  },
  {
    Course: "High School",
    College: "St. Mary Senior Secondary School",
    Location: "Moradabad",
    Type: "97%",
    Duration: "2019",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  cpp: cpp,
  python: python,
  sql: sql,
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  nodejs: nodejs,
  mongodb: mongodb,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  tensorflow: tensorflow,
  numpy: numpy,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Gmail Clone",
    image: projectImage5,
    description: `Developed a Gmail clone with core features including email composition, sending, and management.Integrated with various Google services and implemented robust security measures`,
    techstack: "React, Node.js, Express.js, MongoDB)",
    previewLink: "https://github.com/avanti77/Simulation_of_Gmail",
    githubLink: "https://github.com/avanti77/Simulation_of_Gmail",
  },
  {
    title: "Real Estate Management System",
    image: projectImage6,
    description: `Addressed real-world challenges by providing a comprehensive platform for property owners and buyers, improving transaction transparency and user experience`,
    techstack: "MongoDB, Express.js, React.js, Node.js, Firebase",
    previewLink: "https://github.com/avanti77/Real-E-State-Management-System-master",
    githubLink: "https://github.com/avanti77/Real-E-State-Management-System-master",
  },
  {
    title: "Weather Forecast Website",
    image: projectImage7,
    description: `- Developed a user-friendly weather website offering real-time weather conditions and forecasts.Integrated weekly forecasts with detailed data on pressure, windspeed, and humidity`,
    techstack: "React.js, CSS, OpenWeather API",
    previewLink: "https://github.com/avanti77/Weather_application-",
    githubLink: "https://github.com/avanti77/Weather_application-",
  },
  {
    title: "Student Result Management System",
    image: projectImage2,
    description: `Developed a streamlined Student Result Management System (SRMS) utilizing Python and a database to
    automate and enhance the management of student academic records and results. Facilitated efficient storage,
    retrieval, and manipulation of essential student information, fostering improved administrative processes.
    `,
    techstack: "Tkinter, Pillow",
    previewLink: "https://github.com/avanti77/Student-Result-Management-System",
    githubLink: "https://github.com/avanti77/Student-Result-Management-System",
  },
  {
    title: "Twitter Sentimental Analysis",
    image: projectImage3,
    description: `Developed a hate speech detection system for tweets, distinguishing tweets with racist or sexist sentiment
    from others. Task involves precise classification of tweets into categories of negative sentiment or otherwise.
    `,
    techstack: "NLTK , WordCloud , Matplotlib , Seaborn , Pandas , Numpy",
    previewLink: "https://github.com/avanti77/twitter-sentimental-analysis",
    githubLink: "https://github.com/avanti77/twitter-sentimental-analysis",
  },
  {
    title: "Next Word Predictor",
    image: projectImage4,
    description: `Designed a next-word predictor enhancing user experience in applications like text editors, messaging, search
    engines, and virtual assistants, by providing accurate and contextually relevant word suggestions for efficient
    typing.`,
    techstack: "TensorFlow, Tokenizer, LSTM, pickle, Numpy",
    previewLink: "https://github.com/avanti77/Next-Word-Predictor",
    githubLink: "https://github.com/avanti77/Next-Word-Predictor",
  },
//   {
//     title: "Project title 5",
//     image: projectImage5,
//     description: `This is sample project description random things are here in description This is sample
// project lorem ipsum generator for dummy content`,
//     techstack: "HTML/CSS, JavaScript",
//     previewLink: "https://google.com",
//     githubLink: "https://github.com",
//   },
//   {
//     title: "Project title 6",
//     image: projectImage6,
//     description: `This is sample project description random things are here in description This is sample
// project lorem ipsum generator for dummy content`,
//     techstack: "HTML/CSS, JavaScript",
//     previewLink: "https://google.com",
//     githubLink: "https://github.com",
//   },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "avantiak7804@gmail.com",
  phone: "+91 7505428450",
};
