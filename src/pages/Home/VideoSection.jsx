import React from 'react'
import './Home.css'

const VideoSection = () => {
  return (
    <section className="video-section" data-aos="fade-up">
      <div className="video-wrapper">
        <iframe
          className="responsive-video"
          src="https://www.youtube.com/embed/up68UAfH0d0"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  )
}

export default VideoSection
