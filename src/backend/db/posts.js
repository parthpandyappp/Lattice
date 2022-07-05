import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "We @gazetti_India are extremely fortunate to work with many amazing founders over the last 16 years in India and SEA, and are deeply committed to back the next generations of enduring companies.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "khiladi786",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "prathamagrawal8",
        text: "It's a complete fraud. I've a case study to prove this wrong.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "ashp",
        text: "Really wanna be a part of @gazetti_India!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Happy #Pride ! Here’s a look at this year’s Pride background offerings 🖼. This year, we've designed 35 different Pride flags 🏳️‍🌈 represented through deep and dimensional compositions. Download them now at http://unlocked.microsoft.com 💻. #MicrosoftPride",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "testcool",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "logan1x",
        text: "Woahhh",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "ashp",
        text: "Great initiative!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "A lot of stress around thesis and research paper. God knows why I opted for M.tech. Anyway building my proof of work to get into tech first industry. Soon to join @roc8, glad to be a part of such a huge community.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "logan1x",

    comments: [
      {
        _id: uuid(),
        username: "ashp",
        text: "Feeling sorry, bhaiyaa :(",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "parthpandyappp",
        text: "Kyu kia bhai M.tech?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Habibi… habibi… habibi… Jabse pehna hai maine yeh ishq- e - sehra Khalibali ho gaya hai dil Duniya se mera khalibali ho gaya hai dil",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "alauddin_khilji",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "adbhutswami",
        text: "@bhopa_swami admit him in Aashram, inka upchaar krna hoga",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "ashp",
        text: "Hey, Mr Khilji.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "84% of survey respondents stated one advantage of enterprise #OpenSource is the flexibility to customize solutions to meet their business needs. Read @RedHat's State of Enterprise Open source: #Telecommunications key findings to learn more ➡️ https://red.ht/3bdzPlu",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "testcool",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "khiladi786",
        text: "Gajab survey hain!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "adbhutswami",
        text: "Not possible at all.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "भवन्ति भेदा ज्ञातिनां कलहाश्च वृकोदर।\nप्रसक्तानी च वैराणि कुलधर्मो न नश्यति ।।: Hey Bhim! There is always some tussle between brothers. Sometimes there is even animosity. But relation of blood never dies.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adbhutswami",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "prathamagrawal8",
        text: "It's a complete fraud. I've a case study to prove this wrong.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "ashp",
        text: "Really wanna be a part of @gazetti_India!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
