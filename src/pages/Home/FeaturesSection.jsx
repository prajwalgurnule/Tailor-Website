import './Home.css'

const FeaturesSection = () => {
  return (
    <section className="features-section" aria-labelledby="steps-title">
      <div className="container">
        <h2 id="steps-title" style={{ textAlign: 'center', fontWeight: 700, fontSize: '32px', marginBottom: '48px' }}>Our process</h2>
        <div className="features-grid">
          <article className="feature-card" tabIndex="0" aria-label="Tailor sewing step">
            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/04aeedb5-70c9-433d-b090-c8cf82e70748.png" alt="Close-up photo showing sewing machine in action" />
            <span className="feature-number" aria-hidden="true">1</span>
            <h3 className="feature-title">Tailor Sewing</h3>
            <p className="feature-desc">We bring craftsmanship to life with expert stitching and precision work for every custom order.</p>
          </article>
          <article className="feature-card" tabIndex="0" aria-label="Measurement step">
            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e5f50127-e9c2-49c1-bbbe-00c3a008dde0.png" alt="Photo showing a person measuring tailored jacket dimensions with tape measure" />
            <span className="feature-number" aria-hidden="true">2</span>
            <h3 className="feature-title">Measurement</h3>
            <p className="feature-desc">Precise digital or in-store measurements ensure a flawless fit tailored to your body and style.</p>
          </article>
          <article className="feature-card" tabIndex="0" aria-label="Ready-made step">
            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/50ad36ad-4a25-4ea6-ae06-e482d7aa5eab.png" alt="Close-up photo of person adjusting sleeve cuffs with measuring tape" />
            <span className="feature-number" aria-hidden="true">3</span>
            <h3 className="feature-title">Ready-made</h3>
            <p className="feature-desc">Receive your ready-made or custom suit delivered on time — perfectly crafted and quality assured.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
