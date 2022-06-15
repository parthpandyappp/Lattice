import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Shree Adbhut",
    lastName: "Swami",
    bio: "धर्म धुरंधर आचार्य १००८",
    plink: "https://nirala_dham.github.io",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnaXSAIYEdxM19QIVjiF8zU4ncU1o_M4-P4w&usqp=CAU",
    username: "adbhutswami",
    password: "adbhut123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Testman",
    lastName: "Saheb",
    bio: "Ex-Microsoft | Ex-Twitter, Loves to read & sing.",
    plink: "https://parthpandyappp.github.io",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    username: "testcool",
    password: "test123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Ashwini",
    lastName: "Pandya",
    bio: "Mandala artist | Teen",
    plink: "https:/ashwinipandya.netlify.app",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    username: "ashp",
    password: "ash123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Khushal",
    lastName: "Sharma",
    bio: "Another GitHub user with extra capabilities.",
    plink: "https://logan1x.github.io",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    username: "logan1x",
    password: "khush123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Pratham",
    lastName: "Agrawal",
    bio: "That's my business & none of yours.",
    plink: "https://parthpandyappp.github.io",
    avatar: "https://randomuser.me/api/portraits/men/21.jpg",
    username: "prathamagrawal8",
    password: "pratham123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Alauddin",
    lastName: "khilji",
    bio: "Shehenshaah-e-aalam",
    plink: "https://khiljiworld.github.io",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR1HL-rEzIulhBR90O75PuJkVU6whXbH5syA&usqp=CAU",
    username: "alauddin_khilji",
    password: "alak123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Bahattar",
    lastName: "Singh",
    bio: "Ex-Policemen | Ex-CM_Security",
    plink: "https://parthpandyappp.github.io",
    avatar: "https://randomuser.me/api/portraits/men/40.jpg",
    username: "khiladi786",
    password: "khiladi123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
