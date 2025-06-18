import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaArrowRight, FaChevronDown, FaQuoteLeft } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import styles from './Services.module.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const services = [
    {
      icon: "https://preview.colorlib.com/theme/tailor/assets/img/icon/services1.svg",
      title: "Custom Stitching",
      description: "Tailor App offers personalized clothing design and custom stitching services to match your unique style.",
      details: [
        "Complete garment creation from scratch",
        "Personalized design consultations",
        "Premium fabric selection",
        "Perfect fit guarantee"
      ],
      color: "#c69b7b",
      image: "https://img.freepik.com/premium-photo/cropped-hands-tailor-stitching-fabric-workshop_1048944-12683270.jpg"
    },
    {
      icon: "https://preview.colorlib.com/theme/tailor/assets/img/icon/services2.svg",
      title: "Alteration Service",
      description: "We provide professional alteration services to ensure your garments fit you perfectly every time.",
      details: [
        "Precision measurements",
        "Hemming and resizing",
        "Button and zipper replacement",
        "Same-day service available"
      ],
      color: "#1c274f",
      image: "https://silverbobbin.com/wp-content/uploads/Seamstress-vs-Tailor.jpg"
    },
    {
      icon: "https://preview.colorlib.com/theme/tailor/assets/img/icon/services3.svg",
      title: "Online Booking",
      description: "Book appointments with tailors online through the Tailor App, saving you time and effort.",
      details: [
        "Real-time availability",
        "Instant confirmation",
        "Reminder notifications",
        "Reschedule anytime"
      ],
      color: "#b28b6d",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
    },
    {
      icon: "https://preview.colorlib.com/theme/tailor/assets/img/icon/services4.svg",
      title: "Doorstep Pickup & Delivery",
      description: "Enjoy convenient doorstep pickup and delivery of your clothes with our seamless service.",
      details: [
        "Free pickup within city limits",
        "Eco-friendly packaging",
        "Real-time tracking",
        "Contactless delivery"
      ],
      color: "#394559",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
    },
  ];

  const testimonials = [
    {
      quote: "The custom suit I got made fits like a dream. The attention to detail is unmatched!",
      author: "Michael Chen",
      role: "Business Executive"
    },
    {
      quote: "I've never had alterations done so perfectly. They made my old suit look brand new!",
      author: "Sarah Johnson",
      role: "Fashion Consultant"
    },
    {
      quote: "The convenience of doorstep service saved me so much time. Highly recommended!",
      author: "David Wilson",
      role: "Frequent Customer"
    }
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div className={styles.servicesPage}>
      {/* Animated Hero Section */}
      <section className={styles.servicesHero}>
       <div className={styles.heroVideoOverlay}></div>
            <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className={styles.heroVideo}
            poster="https://tailuxy.com/assets/img/mb.jpeg"
            >
            </video>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.container}
        >
          <h1>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Precision Tailoring
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ color: '#c69b7b' }}
            >
              Perfected Over Generations
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className={styles.subtitle}
          >
            Experience the difference of handcrafted garments tailored to your exact measurements
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.scrollDown}
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <FaChevronDown />
        </motion.div>
      </section>

      {/* Services Showcase */}
      <section className={styles.servicesShowcase}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className={styles.sectionHeader}
          >
            <h2>Our Tailoring Services</h2>
            <p className={styles.subtitle}>
              Combining traditional craftsmanship with modern convenience
            </p>
          </motion.div>

          <div className={styles.tabsContainer}>
            <div className={styles.tabsNav}>
              {services.map((service, index) => (
                <button
                  key={index}
                  className={`${styles.tabButton} ${activeTab === index ? styles.active : ''}`}
                  onClick={() => setActiveTab(index)}
                  style={{ 
                    borderBottomColor: activeTab === index ? service.color : 'transparent'
                  }}
                >
                  {service.title}
                </button>
              ))}
            </div>

            <div className={styles.tabContent}>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={styles.tabPane}
              >
                <div className={styles.serviceDetails}>
                  <h3>{services[activeTab].title}</h3>
                  <p>{services[activeTab].description}</p>
                  
                  <ul className={styles.serviceFeatures}>
                    {services[activeTab].details.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <FiCheck className={styles.checkIcon} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <button 
                    className={styles.ctaButton}
                    style={{ backgroundColor: services[activeTab].color }}
                  >
                    Book This Service <FaArrowRight />
                  </button>
                </div>
                
                <div className={styles.serviceImage}>
                  <img 
                    src={services[activeTab].image} 
                    alt={services[activeTab].title}
                    loading="lazy"
                  />
                  <div 
                    className={styles.imageOverlay}
                    style={{ backgroundColor: services[activeTab].color }}
                  ></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Services Grid */}
      <section className={styles.servicesGridSection} ref={ref}>
        <div className={styles.container}>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className={styles.servicesGrid}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={styles.serviceCard}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100
                    }
                  }
                }}
                whileHover={{
                  y: -15,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
              >
                <motion.div 
                  className={styles.iconContainer}
                  style={{ backgroundColor: service.color }}
                  initial={{ rotate: -45, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ 
                    delay: 0.2 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ rotate: 10 }}
                >
                  <img src={service.icon} alt={service.title} className={styles.serviceIcon} />
                </motion.div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <motion.div 
                  className={styles.cardHoverEffect}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  style={{ backgroundColor: service.color }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className={styles.sectionHeader}
          >
            <h2>Our Tailoring Process</h2>
            <p className={styles.subtitle}>
              From consultation to final fitting - our meticulous approach ensures perfection
            </p>
          </motion.div>

          <div className={styles.processTimeline}>
            {[
              { 
                step: "1. Consultation", 
                description: "Understanding your needs and style preferences" 
              },
              { 
                step: "2. Measurement", 
                description: "Precision measurements for perfect fit" 
              },
              { 
                step: "3. Fabric Selection", 
                description: "Choosing from premium materials" 
              },
              { 
                step: "4. Pattern Making", 
                description: "Creating custom patterns for your garment" 
              },
              { 
                step: "5. Construction", 
                description: "Handcrafted by master tailors" 
              },
              { 
                step: "6. Fitting", 
                description: "Ensuring flawless fit and comfort" 
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.timelineItem}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h4>{item.step}</h4>
                  <p>{item.description}</p>
                </div>
                {index < 5 && (
                  <div className={styles.timelineConnector}></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className={styles.sectionHeader}
          >
            <h2>Client Testimonials</h2>
            <p className={styles.subtitle}>
              Hear what our satisfied customers say about our services
            </p>
          </motion.div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={styles.testimonialCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -10 }}
              >
                <FaQuoteLeft className={styles.quoteIcon} />
                <p className={styles.testimonialText}>{testimonial.quote}</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorInfo}>
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className={styles.ctaContent}
          >
            <h2>Ready to Experience Premium Tailoring?</h2>
            <p>Book an appointment with our master tailors today</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.ctaButton}
            >
              Schedule Your Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;