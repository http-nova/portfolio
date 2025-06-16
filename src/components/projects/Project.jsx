import pawsense from '../../assets/Pawsense-main.jpg'
import './Project.css'

function Project() {
  return (
    <>
    <div className="project-main" id='projects'>
        <a href="#"><div className='project-box1'><div className="project-boximg"><img src={pawsense} alt="" /></div><div className="project-boxtitle">Pawsense</div> <div className="project-boxdes">PawSense — Smart care for your pets.</div></div></a>
        <a href=""><div className='project-box2'><div className="project-boximg"></div><div className="project-boxtitle"></div> <div className="project-boxdes"></div></div></a>
        <a href=""><div className='project-box3'><div className="project-boximg"></div><div className="project-boxtitle"></div> <div className="project-boxdes"></div></div></a>
    </div>
    </>
  )
}

export default Project