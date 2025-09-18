import project1_img from '../assets/project1.jpg';
import project2_img from '../assets/project2.jpg';
import project3_img from '../assets/project3.jpg';
import tiffinwala_img from '../assets/project4.jpg'; // <-- Add screenshot here

const mywork_data = [
  {
    w_no: 1,
    w_name: "Training & Placement Management System",
    w_img: project1_img,
    w_link: "https://github.com/SanyamBinayake/TPO-Management-System",
    w_desc: "Full-stack system using React, Vite, Tailwind and Spring Boot with role-based dashboards."
  },
  {
    w_no: 2,
    w_name: "Real-Time Chat & Video Call App",
    w_img: project2_img,
    w_link: "https://github.com/SanyamBinayake/Chat-VideoCall-App",
    w_desc: "Real-time chat & video call app using Spring Boot, WebSocket (STOMP) and WebRTC."
  },
  {
    w_no: 3,
    w_name: "Portfolio Website",
    w_img: project3_img,
    w_link: "https://github.com/SanyamBinayake/Portfolio",
    w_desc: "Personal portfolio built using React and Tailwind CSS, showcasing projects and achievements."
  },
  {
    w_no: 4,
    w_name: "TiffinWala",
    w_img: tiffinwala_img,
    w_link: "https://github.com/SanyamBinayake/TiffinWala",
    w_desc: "A web-based tiffin service platform built with PHP & MySQL, featuring user registration, menu management, and order tracking."
  }
];

export default mywork_data;
