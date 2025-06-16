import './Footer.css'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import PinterestIcon from '@mui/icons-material/Pinterest'

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner container">
        <div className="footer-map" aria-label="Location map of New York City">
          <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/57974607-fd68-4563-a38d-0bfbffc8bbd7.png" alt="Map showing New York City and surrounding areas" />
        </div>
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-brand">Tailor.</div>
            <p className="footer-text">Experience bespoke tailoring that celebrates your individuality.</p>
            <div className="footer-phones">
              <p className="footer-phone">(80) 783 367-3904</p>
              <p className="footer-phone">(80) 783 367-3904</p>
            </div>
          </div>
          <div className="footer-right">
            <h3 className="footer-solutions">Our solutions</h3>
            <table className="footer-table">
              <tbody>
                <tr>
                  <td className="table-label"></td>
                  <td><a href="#">Home</a></td>
                </tr>
                <tr>
                  <td className="table-label"></td>
                  <td><a href="#">About</a></td>
                </tr>
                <tr>
                  <td className="table-label"></td>
                  <td><a href="#">Services</a></td>
                </tr>
                <tr>
                  <td className="table-label"></td>
                  <td><a href="#">Blog</a></td>
                </tr>
                <tr>
                  <td className="table-label"></td>
                  <td><a href="#">Contact</a></td>
                </tr>
              </tbody>
            </table>
            <div className="footer-social">
              <a href="#" aria-label="Twitter"><TwitterIcon /></a>
              <a href="#" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" aria-label="Pinterest"><PinterestIcon /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        Copyright ©2025 All rights reserved | This template is made with <span className="heart">❤️</span> by Colorlib
      </div>
    </footer>
  )
}

export default Footer