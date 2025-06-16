import './Home.css'

const ServicesSection = () => {
  const services = [
    {
      icon: "https://preview.colorlib.com/theme/tailor/assets/img/icon/services1.svg",
      title: "Custom Stitching",
      description:
        "Tailor App offers personalized clothing design and custom stitching services to match your unique style.",
    },
    {
      icon: "https://preview.colorlib.com/theme/tailor/assets/img/icon/services2.svg",
      title: "Alteration Service",
      description:
        "We provide professional alteration services to ensure your garments fit you perfectly every time.",
    },
    {
      icon: "https://preview.colorlib.com/theme/tailor/assets/img/icon/services3.svg",
      title: "Online Booking",
      description:
        "Book appointments with tailors online through the Tailor App, saving you time and effort.",
    },
    {
      icon: "https://preview.colorlib.com/theme/tailor/assets/img/icon/services4.svg",
      title: "Doorstep Pickup & Delivery",
      description:
        "Enjoy convenient doorstep pickup and delivery of your clothes with our seamless service.",
    },
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">Why use our service?</h2>
      <p className="services-subtitle">
        Tailor App streamlines your tailoring needs with modern solutions. Here's how we make it easier.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.icon} alt={`${service.title} Icon`} className="service-icon" />
            <h3 className="service-name">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
