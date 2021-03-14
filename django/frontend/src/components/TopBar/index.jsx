import Header from "../Header";
import logo from "./fav.png";
import "./TopBar.css";
import $ from "jquery";

let titles = ["About me", "My Projects", "Contact me"];
let scroll = [570, 1100, 3000];

function TopBar() {
  return (
    <div className="container">
      <div className="">
        <img
          src={logo}
          alt="logo"
          id="logo"
          className="logo"
          onClick={() => $(window).scrollTop(0)}
        />
        <div className="flexy headers">
          {titles.map((title, i) => {
            return <Header key={i} title={title} y={scroll[i]}></Header>;
          })}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
