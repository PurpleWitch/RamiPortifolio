import "./slide.css";
import $ from "jquery";

function Slide1() {
  $(document).ready(() => {
    $(".slide1 .link").on("mouseenter", function (event) {
      let curr = event.currentTarget,
        currColor =
          curr.id === "des"
            ? "#ff9933"
            : curr.id === "dev"
            ? "#ff0066"
            : curr.id === "gam"
            ? "#00ff99"
            : "white";
      $(`#${curr.dataset.show}`).css({ opacity: 1 });
      $("span").css({ color: "white", "text-shadow": "0px 0px 5px black" });
      $(".container").css({
        "background-color": "rgb(255, 255, 255, 0)",
        "backdrop-filter": "blur(0px)",
      });
      $(curr).css({
        color: currColor,
        "text-shadow": `0px 0px 5px ${
          currColor === "white" ? "black" : currColor
        }`,
      });
    });

    $(".slide1 .link").on("mouseleave", function (event) {
      let curr = event.currentTarget;
      $(`#${curr.dataset.show}`).css({ opacity: 0 });
      $("span").css({ color: "black", "text-shadow": "" });
      $(".container").css({
        "background-color": "rgb(255, 255, 255, 0.6)",
        "backdrop-filter": "blur(10px)",
      });
    });
  });
  return (
    <div className="slide1">
      <div className="textCon">
        <div className="center colmn">
          <span data-show="desk" className="name link">
            Rami Okkeh
          </span>
          <span data-show="desk" className="myTitle link">
            Full Stack Developer
          </span>
        </div>
        <div className="center">
          <span id="des" data-show="designer" className="title link">
            Designer.
          </span>
          <span id="dev" data-show="developer" className="title link">
            Developer.
          </span>
          <span id="gam" data-show="gamer" className="title link">
            Gamer.
          </span>
        </div>
      </div>
    </div>
  );
}
export default Slide1;
