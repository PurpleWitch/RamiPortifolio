import React, { useState, useEffect } from "react";
import { useSpring, animated, useTransition, config } from "react-spring";
import "./project.css";
import $ from "jquery";
import Skills from "../Skills";

const calc = (x, y, t) => {
  let offset = $(t).offset();
  let top = offset.top - $(window).scrollTop();
  let left = offset.left - $(window).scrollLeft();
  let centerY = top + $(t).height() / 2;
  let centerX = left + $(t).width() / 2;
  return [-(y - centerY) / 20, (x - centerX) / 20, 1.03];
};
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Project({ data }) {
  const { title, link, git, desc, skills, imgs } = data;

  const [index, setIndex] = useState(0);

  const transitions = useTransition(imgs[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });

  useEffect(
    () =>
      setInterval(() => {
        void setIndex((state) => (state + 1) % imgs.length);
      }, 4000),
    [imgs.length]
  );

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <animated.div
      className="ex"
      onMouseMove={({ clientX: x, clientY: y, target }) => {
        set({ xys: calc(x, y, target.offsetParent) });
      }}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      {transitions.map(({ item, props, key }) => {
        return (
          <animated.div
            key={key}
            className="bg"
            style={{
              ...props,
              backgroundImage: `url(${item.img.default})`,
            }}
          ></animated.div>
        );
      })}
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none", color: "black" }}
      >
        <a href={git} target="_blank" rel="noreferrer" className="github">
          <p />
        </a>
        <div className="descContainer">
          <div className="descInnerContainer">
            <span className="descTitle black">{title}</span>
            <br />
            <span className="desc black">{desc}</span>
            <Skills show={skills} />
          </div>
        </div>
      </a>
    </animated.div>
  );
}

export default Project;
