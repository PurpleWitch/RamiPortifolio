import "./Header.css";
import $ from "jquery";

function Header({ title, y }) {
  return (
    <div>
      <div onClick={() => $(window).scrollTop(y)} className="header">
        {title}
      </div>
    </div>
  );
}

export default Header;
