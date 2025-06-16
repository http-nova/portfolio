import heroimg from '../../assets/Hero Image.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import email from '../../assets/mail.png'
import twitter from '../../assets/twitter.png'
import './Footer.css'

function Footer() {
  return (
    <>
    <div className="footer-main" id='footer'>
        <div className="footer-split">
            <div className='footer-icons'>
                <a href="#"><img src={linkedin} alt="linkedin" /></a>
                <a href="#"><img src={instagram} alt="Instagram" /></a>
                <a href="#"><img src={email} alt="Mail" /></a>
                <a href="#"><img src={twitter} alt="X" /></a>
            </div>
            <div className='footer-image'><img src={heroimg} alt="" /></div></div>
            <div className="footer-text">
            Follow me
        </div>
    </div>
    </>
  )
}

export default Footer