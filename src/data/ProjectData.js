import netflix from "../assets/netflix.png";
import hooBank from "../assets/hoobank.png";
// import textUtils from "../assets/textUtils.png";
import netflixCompressed from "../assets/netflix-compresed.jpg";
import hooCompressed from "../assets/hoobank-compresed.jpg";
import todoApp from "../assets/todoApp.png";
import todoCompressed from "../assets/todoApp-compressed.jpg";
import ecart from "../assets/ecart.png";
import ecartCompressed from "../assets/ecart_compressed.jpg";

export const ProjectData = [
  {
    id: 1,
    title: "netflix",
    img: netflix,
    liveLink: "https://netflix-main.netlify.app",
    code: "https://github.com/PunitMudgal/netflix-main",
    compresedImg: netflixCompressed,
  },
  {
    id: 2,
    title: "E-Commerce app",
    img: ecart,
    compresedImg: ecartCompressed,
    liveLink: "https://ecart-main.vercel.app/",
    code: "https://github.com/PunitMudgal/e_commerce-main",
  },
  {
    id: 3,
    title: "UI UX Design",
    img: hooBank,
    liveLink: "https://hoo-app.netlify.app",
    code: "https://github.com/PunitMudgal/hoo-bank-app",
    compresedImg: hooCompressed,
  },
  {
    id: 4,
    title: "UI UX Design",
    img: todoApp,
    liveLink: "https://my-task-application.netlify.app/",
    code: "https://github.com/PunitMudgal/my_todo_application",
    compresedImg: todoCompressed,
  },
  // {
  //   id: 5,
  //   title: "text Utils",
  //   img: textUtils,
  //   liveLink: "textformatter114.netlify.app/",
  //   code: "https://github.com/PunitMudgal/textutils",
  //   compresedImg: undefined,
  // },
];
