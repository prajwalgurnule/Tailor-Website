import { useEffect, useRef, useState } from 'react';
import { FaAward, FaUsers, FaProjectDiagram, FaChevronDown } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import { motion, useAnimation, useInView } from 'framer-motion';
import styles from './About.module.css';
import HeroSection from './HeroSection';

const About = () => {
  // Image URLs - replace with your actual images
  const aboutImg = 'https://thumbs.dreamstime.com/b/tailoring-industry-interior-garment-factory-shop-closes-making-atelier-sewing-machines-cheboksari-russia-tailors-work-193728718.jpg';
  const teamImg = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  const fabricImg = 'https://images.unsplash.com/photo-1539109136881-3be0616ac5d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';

  // Animation controls
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Scroll down arrow animation
  const [bouncing, setBouncing] = useState(true);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBouncing(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.aboutPage}>
      <HeroSection />
      {/* Animated Hero Section */}
      {/* <section 
        className={styles.aboutHero}
        style={{ backgroundImage: `linear-gradient(rgba(28, 39, 79, 0.85), rgba(28, 39, 79, 0.85)), url(${fabricImg})` }}
      >
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
              Crafting Excellence
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ color: '#c69b7b' }}
            >
              Since 1995
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Where tradition meets innovation in every stitch
          </motion.p>
        </motion.div>

        <motion.div
          animate={{ y: bouncing ? 0 : 10 }}
          transition={{ 
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.8,
            ease: "easeInOut"
          }}
          className={styles.scrollDown}
        >
          <FaChevronDown />
        </motion.div>
      </section> */}

      {/* Story Section with Parallax Effect */}
      <section className={styles.storySection}>
        
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          className={`${styles.container} ${styles.storyContainer}`}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.6 }
              }
            }}
            className={styles.storyImage}
          >
            <img 
              src={aboutImg} 
              alt="Tailor working on a suit" 
              loading="lazy"
            />
            <div className={styles.imageBorder}></div>
          </motion.div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.6 }
              }
            }}
            className={styles.storyContent}
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.4 }
                }
              }}
            >
              Our <span>Story</span>
            </motion.h2>
            
            <motion.p 
              className={styles.lead}
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { duration: 0.4, delay: 0.2 }
                }
              }}
            >
              Founded in 1995, our tailoring house has been dedicated to creating bespoke garments with unparalleled attention to detail.
            </motion.p>
            
            <motion.p
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { duration: 0.4, delay: 0.3 }
                }
              }}
            >
              What began as a small workshop with just two tailors has grown into a renowned atelier serving clients worldwide. 
              Our founder established the business with a simple philosophy: every garment should be crafted with the same care 
              and precision as if it were for one's own wardrobe.
            </motion.p>
            
            <motion.div 
              className={styles.stats}
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              {[
                { icon: <FaAward />, value: "25+", label: "Years Experience" },
                { icon: <FaUsers />, value: "5000+", label: "Satisfied Clients" },
                { icon: <FaProjectDiagram />, value: "10+", label: "Master Tailors" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.4 }
                    }
                  }}
                  className={styles.statItem}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Animated Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Meet Our <span>Artisans</span>
          </motion.h2>
          
          <div className={styles.teamContainer}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.teamContent}
            >
              <p>
                Our team of skilled artisans brings decades of combined experience to every garment. 
                Each tailor specializes in different aspects of the craft, from pattern making to fine hand-stitching.
              </p>
              
              <ul className={styles.teamList}>
                {[
                  "Minimum 15 years of experience",
                  "Extensive training in traditional techniques",
                  "Continuous professional development",
                  "Specialized in different garment types",
                  "Passionate about perfecting every detail"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <FiCheck className={styles.checkIcon} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.teamImage}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={teamImg} 
                alt="Our tailoring team at work" 
                loading="lazy"
              />
              <div className={styles.imageOverlay}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Process Section */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Our <span>Bespoke Process</span>
          </motion.h2>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Creating a custom garment is a journey we take with each client
          </motion.p>
          
          <div className={styles.processSteps}>
            {[
              {
                number: "1",
                title: "Consultation",
                desc: "We discuss your needs, preferences, and the occasion for the garment."
              },
              {
                number: "2",
                title: "Fabric Selection",
                desc: "Choose from our curated selection of premium fabrics from around the world."
              },
              {
                number: "3",
                title: "Precision Measurement",
                desc: "Over 25 measurements are taken to ensure a perfect fit."
              },
              {
                number: "4",
                title: "Creation",
                desc: "Your garment is handcrafted with meticulous attention to detail."
              },
              {
                number: "5",
                title: "Fitting",
                desc: "We conduct multiple fittings to perfect the garment's fit and silhouette."
              },
              {
                number: "6",
                title: "Delivery",
                desc: "Your finished garment is ready to wear and enjoy."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className={styles.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 30px rgba(198, 155, 123, 0.2)"
                }}
              >
                <div className={styles.stepNumber}>{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;