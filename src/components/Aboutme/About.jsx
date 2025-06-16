import img1 from '../../assets/Hero Image.png'
import './About.css'

function About() {
  return (
    <>
    <div className="about-main" id='#About'>
        <div className="about-image"> <img src={img1} alt="" /> </div>
        <div className="about-text">
            <div className="about-title">About Me</div>
            <div className="about-para">Hey there! I'm Prashant, a passionate tech enthusiast currently pursuing a Bachelor's degree in Artificial Intelligence and Machine Learning. My journey started with a love for the web — learning HTML, CSS, JavaScript, and React — and grew into a deeper curiosity for how AI can reshape the world around us.
From crafting sleek web experiences to exploring the power of intelligent tools, I’m always building, learning, and pushing boundaries. Let's innovate something awesome!</div>
        </div>
    </div>
    </>
  )
}

export default About