import "./footer.css";
import { Icon } from "../Icons";

let icons = [
  {
    link: "https://www.linkedin.com/in/rami-okkeh/",
    id: "in",
    name: "Linked In",
  },
  {
    link: "https://www.codewars.com/users/RamiOkkeh",
    id: "cw",
    name: "CodeWars",
  },
  {
    link: "https://leetcode.com/RamiOkkeh/",
    id: "lc",
    name: "Leet Code",
  },
  {
    link: "https://www.hackerrank.com/ramiokkeh",
    id: "hr",
    name: "HackerRank",
  },
  { link: "https://github.com/RamiOkkeh", id: "git", name: "Github" },
  {
    link:
      "https://drive.google.com/file/d/1BEt2tvD2wvFN5QwqPDisIshKzgUZ0bJ_/view?usp=sharing",
    id: "cv",
    name: "My CV",
  },
];

function Footer() {
  return (
    <div className="footerCon">
      <div className="touchCon">
        <span className="touch">Contact Me</span>
      </div>
      <div className="contactsCon">
        <div className="contacts">
          <div className="email">
            <div className="padding">
              <p className="send">Send me an E-mail</p>
              <p className="myEmail">ramiokkeh@gmail.com</p>
            </div>
          </div>
          <div className="media">
            <div className="padding">
              <p className="send">Media</p>
              <div className="mediaCon">
                {icons.map((obj, i) => (
                  <div className="iconsWrap">
                    <Icon key={i} id={obj.id + " Icon"} link={obj.link} />
                    <span className="mediaText">{obj.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
