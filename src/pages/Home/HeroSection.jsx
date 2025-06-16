import './Home.css'

const HeroSection = () => {
  return (
    <section className="hero" role="banner" aria-label="Tailor hero section">
      <div className="hero-text">
        <div className="circle-text" aria-hidden="true">
          <svg viewBox="0 0 100 100" width="140" height="140">
            <path id="circlePath" fill="none" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
            <text fill="rgba(255,255,255,0.22)" font-family="'Poppins', sans-serif" font-size="12" font-weight="600">
              <textPath xlinkHref="#circlePath" startOffset="0%">BEST TAILOR SERVICE IN YOUR CITY • BEST TAILOR SERVICE IN YOUR CITY •</textPath>
            </text>
          </svg>
        </div>
        <h2></h2>
        <h1>We make clothes that suit you</h1>
        <p>Experience bespoke tailoring that celebrates your individuality. Our master tailors combine traditional craftsmanship with modern design to create garments that fit not just your body, but your lifestyle. From precise measurements to personalized styling, we bring your vision to life with impeccable attention to detail.</p>
        <button aria-label="Our services">OUR SERVICES</button>
      </div>
      <div className="hero-image">
        <div className="image-wrapper">
          <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d895f9aa-24d5-44c7-9ce0-68753d0ef4c0.png" alt="Tailor woman measuring fabric on mannequin in tailoring workshop" />
          <div className="image-decoration"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection