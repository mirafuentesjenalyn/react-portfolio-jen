import project1 from "../assets/projects/project-1.png";
import project1_1 from "../assets/projects/project-1-1.png";
import project2 from "../assets/projects/project-2.png";
import project2_1 from "../assets/projects/project-2-1.png";
import project2_2 from "../assets/projects/project-2-2.png";
import project2_3 from "../assets/projects/project-2-3.png";
import project2_4 from "../assets/projects/project-2-4.png";
import project3 from "../assets/projects/project-3.png";
import project3_1 from "../assets/projects/project-3-1.png";
import project3_2 from "../assets/projects/project-3-2.png";
import project3_3 from "../assets/projects/project-3-3.png";
import project3_4 from "../assets/projects/project-3-4.png";
import project3_5 from "../assets/projects/project-3-5.png";
import project3_6 from "../assets/projects/project-3-6.png";
import project3_7 from "../assets/projects/project-3-7.png";
import project3_8 from "../assets/projects/project-3-8.png";
import project3_9 from "../assets/projects/project-3-9.png";
import cert1 from "../assets/certs/ms_teams.jpg";
import cert2 from "../assets/certs/cyber.png";
import cert3 from "../assets/certs/yapos.png";
import cert4 from "../assets/certs/merit.png";
import cert5 from "../assets/certs/proj_man.png";
import cert6 from "../assets/certs/intern.png";
import cert7 from "../assets/certs/qa.png";
import cert8 from "../assets/certs/dict.png";
import cert9 from "../assets/certs/figma.jpg";
import cert10 from "../assets/certs/ubiquiti.jpg";
import cert11 from "../assets/certs/specialist.png";
import cert12 from "../assets/certs/assembly.jpg";
import cert13 from "../assets/certs/ml.png";
import cert14 from "../assets/certs/agile.png";

export const HOME_CONTENT = `//Passionate for continuous learning in coding and design.`;

export const ABOUT_TEXT = `A creative developer with a strong eye for design and a passion for coding. I specialize in creating user-friendly and visually appealing software solutions, combining creativity with technical expertise to deliver impactful results.`;

export const EXPERIENCES = [
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
    title: "EmpoWork365: Employee Management System",
    image: [project3, project3_1, project3_2, project3_3, project3_4, project3_5, project3_6, project3_7, project3_8, project3_9],
    description:
      "A system that allows employees and administrators to create accounts, set up profiles, manage employee profiles, track attendance, manage payroll, and generate detailed reports on employee attendance, leave balances, and payroll summaries.",
    technologies: ["Java", "MySQL"],
  },

 {
    title: "Kapelicious: Coffee Shop Ordering System",
    image: [project2, project2_1, project2_2, project2_3, project2_4],
    description:
      "A Java application that allows customers to easily select and customize their coffee orders. Users can choose from a menu and place their orders. The system also includes features for viewing past orders and managing payments, making it a convenient tool for coffee shops and customers alike.",
    technologies: ["Java", "MySQL"],
  },

  {
    title: "CUENTA: A Real-Time Bus Passenger Counting",
    image: [project1, project1_1],
    description:
      "Developed an innovative application, CUENTA, that employs Convolutional Neural Networks (CNN) for real-time passenger counting on buses. This system leverages advanced computer vision techniques to accurately track and differentiate between passengers entering and exiting the bus.",
    technologies: ["Python", "Firebase", "Flask", "OpenCV", "YOLOv8"],
  },
];

export const CERTIFICATES = [
  {
    title: "Agile Practices for Efficient Software Development",
    image: cert14,
    description: "Participated in a one-day seminar regarding Agile methodologies for effective project management and team collaboration, held on March 15, 2024.",
  },
  {
    title: "Applications of Machine Learning in Computer Vision",
    image: cert13,
    description: "Participated in a one-day seminar about machine learning techniques for developing intelligent applications, held on March 7, 2024.",
  },
  {
    title: "General Assembly",
    image: cert12,
    description: "The ICpEP General Assembly was convened on December 2, 2023, at Ateneo de Naga University.",
  },
  {
    title: "UISO Broadband Wireless Specialist",
    image: cert11,
    description: "Recognized as a Ubiquiti specialist.",
  },
  {
    title: "Ubiquiti Training Completion",
    image: cert10,
    description: "Completed the Ubiquiti Broadband Wireless Specialist Seminar and Workshop hosted by DoubleSquare Networks, Inc. on November 25-26, 2023.",
  },
  {
    title: "UI/UX Design using FIGMA",
    image: cert9,
    description: "Organized by Team Innovatica and held on October 14, 2023.",
  },
  {
    title: "Critical Security Control (CIS): Basics and Implementation",
    image: cert8,
    description: "Conducted by the DICT Region IV-A Cybersecurity Bureau in partnership with USAID-BEACON on September 29, 2023.",
  },
  {
    title: "Software Quality Assurance: Building a Strong Foundation",
    image: cert7,
    description: "Participated in a webinar about quality assurance, focusing on ensuring software reliability and performance, held on September 26, 2023.",
  },
  {
    title: "Backend Development",
    image: cert6,
    description: "Successfully completed an internship program, gaining practical experience in software development at Pixel8 Web Solutions & Consultancy Inc.",
  },
  {
    title: "Devs Unite's Webinar",
    image: cert5,
    description: "Learned the fundamentals of effective project management on May 6, 2023.",
  },
  {
    title: "Certificate of Merit",
    image: cert4,
    description: "The College Virtual Recognition Program was held on June 24, 2022.",
  },
  {
    title: "YAPOS: A Mental Health Webinar",
    image: cert3,
    description: "A discussion on mental health issues, online class management, and the importance of self-care during the pandemic, held on March 5, 2022.",
  },
  {
    title: "A Close Look at Cyber-Novelty through the New Lens of Wider Discovery",
    image: cert2,
    description: "A regional assembly was held on November 14, 2021.",
  },
  {
    title: "General Assembly",
    image: cert1,
    description: "ICpEP.se-BU held a general assembly on October 15, 2021.",
  },
];

export const CONTACT = {
  agreement: "I agree that the data I put in here is processed so that my message can be answered. I understand that my data is NOT stored or used in any other way.",
  address: "Polangui, Albay",
  phoneNo: "+639219734756",
  email: "mirafuentesjenalyn@gmail.com",
};

