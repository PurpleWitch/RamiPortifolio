import "./icons.css";
import $ from "jquery";
import clamp from "lodash-es/clamp";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-with-gesture";

let icons = [
  { link: "https://www.linkedin.com/in/rami-okkeh/", id: "in" },
  { link: "https://www.codewars.com/users/RamiOkkeh", id: "cw" },
  { link: "https://leetcode.com/RamiOkkeh/", id: "lc" },
  { link: "https://www.hackerrank.com/ramiokkeh", id: "hr" },
  { link: "https://github.com/RamiOkkeh", id: "git" },
  {
    link:
      "https://drive.google.com/file/d/1krpiqvjt6ArlFzhI13XRfqOLY1L15lPv/view?usp=sharing",
    id: "cv",
  },
];

export function Icon({ id, link }) {
  let html = document.getElementsByTagName("html")[0];
  window.onscroll = function () {
    $(".container").css({
      "border-bottom": `${
        html.scrollTop > 60 ? 1 : 0
      }px solid rgb(179, 179, 179)`,
    });

    document.body.offsetHeight - (window.pageYOffset + window.innerHeight) < 235
      ? $(".icons").css({ bottom: "-300px", transition: "0.5" })
      : $(".icons").css({ bottom: "40px", transition: "0.5" });
  };

  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const bind = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 3, 8);
    set({
      xy: down ? delta : [0, 0],
      config: { mass: velocity, tension: 1000 * velocity, friction: 50 },
    });
  });
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <animated.div
        {...bind()}
        className={"icon " + id}
        style={{
          transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
        }}
      />
    </a>
  );
}

function Icons() {
  return (
    <div className="iconsCon">
      <div className="icons">
        {icons.map((obj, i) => (
          <Icon key={i} id={obj.id} link={obj.link} />
        ))}
      </div>
    </div>
  );
}

export default Icons;
