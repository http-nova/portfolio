import { useEffect, useState } from 'react';
import heroimg from "../../assets/Hero Image.png";
import "./Home.css";

function ChangingText() {
  const titles = [
    'Prashant Kumawat',
    'Nova',
    'AI Engineer',
    'Web Developer',
    'Front-End Developer',
    'Tech Enthusiast'
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return <span className='home-changing'>{titles[index]}</span>;
}

function Home() {
  return (
    <div className="home-split" id='home'>
      <div className="home-text">
        <div className="home-title">
          I'm <ChangingText />
        </div>
        <div className="home-words">Clean</div>
        <div className="home-words">Creative</div>
        <div className="home-words">Efficient Code</div>
      </div>
      <div className="home-image">
        <img src={heroimg} alt="Hero" />
      </div>
    </div>
  );
}

export default Home;
