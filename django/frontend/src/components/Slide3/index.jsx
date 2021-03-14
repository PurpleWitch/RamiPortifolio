import "./slide.css";
import Project from "../Project";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

const images = importAll(
  require.context("./imgs", false, /\.(png|jpe?g|svg|webp)$/)
);

// let allMyTechno = [
//   "googlemapsapi",
//   "html",
//   "css",
//   "js",
//   "jwt",
//   "react",
//   "redux",
//   "spring",
//   "angular",
//   "jquery",
//   "typescript",
//   "python",
//   "django",
//   "flask",
//   "mdb",
//   "mysql",
//   "firebase",
//   "heroku",
//   "docker",
//   "aws",
//   "git",
//   "postman",
//   "photoshop",
// ];

let projectData = [
  {
    title: "GAMES.IO",
    link: "https://gamesio.herokuapp.com/",
    git: "https://github.com/RamiOkkeh/GreenField-1",

    desc:
      "A Game Hosting Website that allows users to play games and upload their own.",
    skills: [
      "js",
      "react",
      "redux",
      "mdb",
      "jquery",
      "heroku",
      "git",
      "postman",
      "jwt",
    ],
    imgs: [
      {
        id: 0,
        img: images["games0.webp"],
      },
      {
        id: 1,
        img: images["games1.webp"],
      },
      {
        id: 2,
        img: images["games2.webp"],
      },
    ],
  },
  {
    title: "MEMORY GAME",
    link: "https://memory-game-1.herokuapp.com/index.html",
    git: "https://github.com/RamiOkkeh/Memory-Card-Game",

    desc:
      "Do you like puzzles? try this cute little game about matching images.",
    skills: ["js", "html", "css", "heroku", "jquery"],
    imgs: [
      {
        id: 0,
        img: images["memory0.webp"],
      },
      {
        id: 1,
        img: images["memory1.webp"],
      },
      {
        id: 2,
        img: images["memory2.webp"],
      },
    ],
  },
  {
    title: "HOTELCOM",
    link: "https://legacy-hotels2.herokuapp.com/",
    git: "https://github.com/RamiOkkeh/GreenFieldLegacy",

    desc:
      "A website for wandering travlers, Hotelcom provides you with acurate information about hotels in major cities around the glope.",
    skills: [
      "googlemapsapi",
      "js",
      "react",
      "redux",
      "mdb",
      "heroku",
      "postman",
      "jquery",
    ],
    imgs: [
      {
        id: 0,
        img: images["hotel0.webp"],
      },
      {
        id: 1,
        img: images["hotel1.webp"],
      },
      {
        id: 2,
        img: images["hotel2.webp"],
      },
    ],
  },
  {
    title: "CONNECT 4",
    link: "http://c0nnect-4.herokuapp.com/public/",
    git: "https://github.com/RamiOkkeh/challenge_4",

    desc: "Connect 4 is a tic tac toe-like two-player game.",
    skills: ["js", "html", "css", "heroku", "react"],
    imgs: [
      {
        id: 0,
        img: images["connect0.webp"],
      },
      {
        id: 1,
        img: images["connect1.webp"],
      },
      {
        id: 2,
        img: images["connect2.webp"],
      },
      {
        id: 3,
        img: images["connect3.webp"],
      },
    ],
  },
  {
    title: "ALPHAPLUS",
    link: "https://oss-0.herokuapp.com/",
    git: "https://github.com/RamiOkkeh/OnlineSchoolSystem",

    desc: "AlphaPlus is an Online School system for tutoring services.",
    skills: [
      "django",
      "js",
      "react",
      "redux",
      "heroku",
      "postman",
      "typescript",
      "python",
    ],
    imgs: [
      {
        id: 0,
        img: images["alpha0.webp"],
      },
      {
        id: 1,
        img: images["alpha1.webp"],
      },
      {
        id: 2,
        img: images["alpha2.webp"],
      },
      {
        id: 3,
        img: images["alpha3.webp"],
      },
      {
        id: 4,
        img: images["alpha4.webp"],
      },
      {
        id: 5,
        img: images["alpha5.webp"],
      },
    ],
  },
  {
    title: "TIC TAC TOE",
    link: "https://idsjndkjendk.herokuapp.com/index.html",
    git: "https://github.com/RamiOkkeh/challenge_1",

    desc: "a simple game of tic tac toe.",
    skills: ["js", "html", "css", "heroku", "jquery"],
    imgs: [
      {
        id: 0,
        img: images["x0.webp"],
      },
      {
        id: 1,
        img: images["x1.webp"],
      },
      {
        id: 2,
        img: images["x2.webp"],
      },
      {
        id: 3,
        img: images["x3.webp"],
      },
    ],
  },
];

function Slide3() {
  return (
    <div className="slide3 center">
      <div className="proContain">
        <div className="sticky">
          <span className="projects">Projects</span>
        </div>
        <div className="examples">
          {projectData.map((data, i) => (
            <Project key={i} data={data}></Project>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slide3;
