import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div className="nav-main">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <div className="nav-box">
                <a href="#">Home</a>
              </div>
            </li>
          </ul>
      </div>
    </>
  );
}

export default NavBar;
