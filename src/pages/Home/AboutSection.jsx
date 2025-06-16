import './Home.css'

const AboutSection = () => {
  return (
    <section className="about-section" aria-labelledby="about-title">
      <div className="about-images" aria-hidden="true">
        <img className="main-img" src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5c6fd710-2c0b-477f-b93f-6509e3f32567.png" alt="Close-up photo of man adjusting buttons on his suit jacket" />
        <img className="overlay-img" src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/28b1ceef-cbdf-466f-9437-7a4d2bb018cb.png" alt="Woman tailor looking pensively surrounded by fabric rolls" />
      </div>
      <div className="about-text">
        <h2 id="about-title">About our tailor house</h2>
       <p className="lead">
          At our tailor house, we blend timeless craftsmanship with modern design to deliver suits that reflect your personal style.
        </p>
        <p className="desc">
          From fabric selection to final fittings, our platform ensures a seamless tailoring experience. Book appointments, track your orders, and collaborate with expert tailors — all from one elegant and easy-to-use interface.
        </p>
    <button aria-label="More about us">More about us</button>
      </div>
    </section>
  )
}

export default AboutSection