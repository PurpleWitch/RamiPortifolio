import "./skills.css";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

const images = importAll(require.context("./ico", false, /\.(png|jpe?g|svg)$/));

function Skill({ show }) {
  const filtered = Object.keys(images).filter((image) =>
    show.includes(image.slice(0, -4))
  );
  return (
    <div className="centerfy">
      <div className="skillDispenser">
        {filtered.map((key, i) => (
          <img
            key={i}
            className="skill"
            src={images[key].default}
            alt="IconNotFound"
          ></img>
        ))}
      </div>
    </div>
  );
}
export default Skill;
