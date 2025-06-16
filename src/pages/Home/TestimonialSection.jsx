import { useState, useEffect } from 'react';
import './Home.css';

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      quote: "Brook presents your services with flexible, convenient and custom layouts. You can select your favorite layouts & elements with unlimited customization possibilities. Pixel-perfect replication of their designers intended scents your se.",
      name: "Robart Brown",
      role: "Creative designer at Colorlib",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "I've never seen such attention to detail in tailoring before. The fit was perfect and the service was exceptional. Will definitely be coming back for all my tailoring needs.",
      name: "Sarah Johnson",
      role: "Fashion Consultant",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "The quality of the fabric and stitching is outstanding. They transformed my old suit into something that looks brand new and fits like a dream.",
      name: "Michael Chen",
      role: "Business Executive",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonial-section" aria-label="Customer testimonials">
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className={`testimonial-slide ${index === currentSlide ? 'active' : ''}`}
            aria-hidden={index !== currentSlide}
          >
            <div className="quote-icon" aria-hidden="true">Testimonial</div>
            <p>" {testimonial.quote} "</p>
            <div className="testimonial-author">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                width="50" 
                height="50"
                loading="lazy"
              />
              <div>
                <h5>{testimonial.name}</h5>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
        
        <div className="navigation-buttons">
          <button 
            className="prev" 
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button 
            className="next" 
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;