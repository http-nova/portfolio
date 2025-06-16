import reactjs from '../../assets/atom.png';
import bootstrap from '../../assets/bootstrap.png';
import css from '../../assets/css-3.png';
import html from '../../assets/html-5-logo.png';
import js from '../../assets/java-script.png';
import mysql from '../../assets/mysql.png';
import python from '../../assets/python.png';
import wordpress from '../../assets/wordpress-logo.png';
import "./Skill.css";


function Skill() {
  return (
    <>
        <div className="skill-icons">
          <img src={html} alt="html" />
          <img src={css} alt="css" />
          <img src={mysql} alt="mysql" />
          <img src={python} alt="python" />
          <img src={js} alt="js" />
          <img src={reactjs} alt="reactjs" />
          <img src={wordpress} alt="wordpress" />
          <img src={bootstrap} alt="bootstrap" />
        </div>
    </>
  );
}

export default Skill;
