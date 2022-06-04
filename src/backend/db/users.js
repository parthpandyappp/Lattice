import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adbhut",
    lastName: "Chawda",
    bio: "Extra-ordinary TT player, Pankaj trophy",
    username: "adbhutchawda",
    password: "adbhut123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Testman",
    lastName: "Saheb",
    bio: "Ex-Microsoft | Ex-Twitter, Loves to read & sing.",
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
    username: "khiladi786",
    password: "khiladi123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
