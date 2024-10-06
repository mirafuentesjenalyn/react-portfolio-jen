import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HOME_CONTENT = `//Passionate for continuous learning in coding and design.`;

export const ABOUT_TEXT = `A creative developer with a strong eye for design and a passion for coding. I specialize in creating user-friendly and visually appealing software solutions, combining creativity with technical expertise to deliver impactful results.`;

export const EXPERIENCES = [
  // {
  //   year: "2023 - Present",
  //   role: "Senior Full Stack Developer",
  //   company: "Google Inc.",
  //   description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
  //   technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  // },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  {
    year: "2024",
    role: "Java Developer",
    company: " NRG Info-Tech Institute Inc.",
    description: `Utilized SQL for effective database queries and database manipulation. Executed Object Oriented Programming concepts such as Encapsulation, Abstract, Inheritance, and Polymorphism to developed a functional Point of Sale (POS) system. Implemented the CRUD operations for effective data management and integration between database and Java application.`,
    technologies: ["Java", "MySQL"],
  },
  {
    year: "2023",
    role: "Backend Developer",
    company: " Pixel8 Web Solutions & Consultancy Inc.",
    description: `CRUD operations were developed for database management and data manipulation. RESTful APIs were implemented to facilitate communication between front end and back-end. PHP were used to create and execute unit tests to validate the functionality of backend components`,
    technologies: ["PHP", "Insomnia", "MySQL", "Git"],
  },
];

export const PROJECTS = [
  {
    title: "Kapelicious: Coffee Shop Ordering System",
    image: project1,
    description:
      "A Java application that allows customers to easily select and customize their coffee orders. Users can choose from a menu and place their orders. The system also includes features for viewing past orders and managing payments, making it a convenient tool for coffee shops and customers alike.",
    technologies: ["Java", "MySQL"],
  },
  {
    title: "CUENTA: A Real-Time Bus Passenger Counting",
    image: project2,
    description:
      " Developed an innovative application, CUENTA, that employs Convolutional Neural Networks (CNN) for real-time passenger counting on buses. This system leverages advanced computer vision techniques to accurately track and differentiate between passengers entering and exiting the bus.",
    technologies: ["Python", "Firebase", "Flask", "OpenCV", "YOLOv8"],
  },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "CSS", "React", "Bootstrap"],
  // },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "Polangui, Albay",
  phoneNo: "09219734756",
  email: "mirafuentesjenalyn@gmail.com",
};
