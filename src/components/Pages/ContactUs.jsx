
////////////////////////////////////////
import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Clock, 
  MessageSquare,
  CheckCircle 
} from 'lucide-react';
import Footer2 from '../Common/Footer2';
import Header4 from '../Common/Header4';
import Banner from '../Elements/Banner';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  var bnrimg = require('./../../images/banner/c-banner.webp');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91 72040 97368', '+91 80504 81583'],
      color: 'primary'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@atelierdz.com'],
      color: 'success'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['Atelier Designs, Fr. Muller Road', 'Valencia, Mangalore, India - 575 002'],
      color: 'info'
    },
    // {
    //   icon: Clock,
    //   title: 'Business Hours',
    //   details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
    //   color: 'warning'
    // }
  ];

  return (
    <div className="contact-page">
      
      <Header4 />
      
      <Banner 
        title="Get in Touch with ATELIER" 
        pagename="Contact us" 
        description="We're here to help you create the home of your dreams. Reach out for inquiries, support, 
        or personalized guidance, and our team will assist you every step of the way."
        bgimage={bnrimg}
      />

      <main className="main-content">
        <div className="container">
          {/* Contact Form & Info Section - Side by Side */}
          <div className="contact-section">
            {/* Contact Form */}
            <div className="contact-form-col">
              <div className="card form-card">
                <div className="card-body">
                  <div className="form-header">
                    <div className="form-title-container">
                      <MessageSquare className="form-icon" size={24} />
                      <h2 className="form-title">Send us a Message</h2>
                    </div>
                    <p className="form-description">
                      Tell us about your project and how we can help bring your vision to life.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="success-message">
                      <CheckCircle className="success-icon" size={64} />
                      <h3 className="success-title">Message Sent!</h3>
                      <p className="success-text">Thank you for your inquiry. We'll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="form-row">
                        <div className="form-group">
                          <label className="form-label">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="form-control"
                            placeholder="Your full name"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="form-control"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      
                      {/* <div className="form-row">
                        <div className="form-group">
                          <label className="form-label">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="+91 12345 67890"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Subject</label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Project inquiry"
                          />
                        </div>
                      </div> */}

                      <div className="form-group-textarea">
                        <label className="form-label">Message *</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="form-control textarea"
                          placeholder="Tell us about your project, requirements, budget, and timeline..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="submit-btn"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="spinner" role="status">
                              <span className="visually-hidden">Loading...</span>
                            </div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="btn-icon" size={20} />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="contact-info-col">
              <div className="info-cards">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="info-card-wrapper">
                      <div className="card info-card">
                        <div className="card-body" style={{backgroundColor:'#F9C828', borderRadius:'0.5rem'}}>
                          <div className="info-card-content" >
                            <div className={`icon-container ${info.color}`}>
                              <IconComponent size={24} />
                            </div>
                            <div className="info-details">
                              <h5 className="info-title">{info.title}</h5>
                              {info.details.map((detail, i) => (
                                <p key={i} className="info-text">{detail}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="card map-card">
            <div className="card-body">
              <div className="map-header">
                <h2 className="map-title">Visit Our Office</h2>
                <p className="map-description">
                  Located in the heart of Mangalore.
                </p>
              </div>
              <div className="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d896.5115493592374!2d74.85450477455817!3d12.858944440773849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35bc91553bafb%3A0xb29391a58706aff6!2sAtelier%20Designs!5e1!3m2!1sen!2sin!4v1758343897497!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

         
        </div>
      </main>

      <Footer2/>

      <style jsx>{`
        /* Global Styles */
        .contact-page {
          min-height: 100vh;
          background-color: #f8f9fa;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }
        
        .container {
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
        }
        
        @media (min-width: 576px) {
          .container {
            max-width: 540px;
          }
        }
        
        @media (min-width: 768px) {
          .container {
            max-width: 720px;
          }
        }
        
        @media (min-width: 992px) {
          .container {
            max-width: 960px;
          }
        }
        
        @media (min-width: 1200px) {
          .container {
            max-width: 1140px;
          }
        }
        
        
        
        /* Main Content */
        .main-content {
          padding: 3rem 0;
        }
        
        /* Contact Section - Side by Side Layout */
        .contact-section {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 3rem;
          gap: 1.5rem;
        }
        
        .contact-form-col {
          flex: 1 1 60%;
          min-width: 300px;
        }
        
        .contact-info-col {
          flex: 1 1 35%;
          min-width: 250px;
        }
        
        /* Card Styles */
        .card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
          word-wrap: break-word;
          background-color: #fff;
          background-clip: border-box;
          border: 1px solid rgba(0,0,0,0.125);
          border-radius: 0.5rem;
        }
        
        .card-body {
        
          flex: 1 1 auto;
          padding: 1.5rem;
        }
        
        /* Form Styles */
        .form-card {
          box-shadow: 0 1rem 3rem rgba(0,0,0,0.175);
          border: none;
          border-radius: 1rem;
        }
        
        .form-header {
          margin-bottom: 2rem;
        }
        
        .form-title-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }
        
        .form-icon {
          color: #F9C828;
        }
        
        .form-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #212529;
          margin-bottom: 0;
        }
        
        .form-description {
          color: #6c757d;
          font-size: 1.1rem;
        }
        
        .form-row {
          display: flex;
          flex-wrap: wrap;
          margin-right: -0.75rem;
          margin-left: -0.75rem;
          margin-bottom: 1rem;
        }
        
        .form-group {
          flex: 0 0 auto;
          width: 100%;
          padding-right: 0.75rem;
          padding-left: 0.75rem;
          margin-bottom: 1rem;
        }
        
        @media (min-width: 768px) {
          .form-group {
            width: 50%;
          }
        }
        
        .form-label {
          font-weight: 600;
          color: #212529;
          margin-bottom: 0.5rem;
          display: inline-block;
        }
        
        .form-control {
          display: block;
          width: 100%;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          color: #212529;
          background-color: #fff;
          background-clip: padding-box;
          border: 2px solid #dee2e6;
          border-radius: 0.5rem;
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }
        
        .form-control:focus {
          color: #212529;
          background-color: #fff;
          border-color: #86b7fe;
          outline: 0;
          box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
        }
        
        .textarea {
          min-height: calc(1.5em + 0.75rem + 10px);
          resize: vertical;
        }
        
        .form-group-textarea {
          width: 100%;
          padding-right: 0.75rem;
          padding-left: 0.75rem;
          margin-bottom: 1.5rem;
        }
        
        .submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          color: #fff;
          text-align: center;
          vertical-align: middle;
          cursor: pointer;
          user-select: none;
          background: linear-gradient(135deg, #f9c828 0%, #F9C826 100%);
          border: none;
          padding: 0.75rem 1.5rem;
          font-size: 1.1rem;
          border-radius: 0.5rem;
          transition: all 0.15s ease-in-out;
        }
        
        .submit-btn:disabled {
          opacity: 0.65;
        }
        
        .btn-icon {
          margin-right: 0.5rem;
        }
        
        .spinner {
          display: inline-block;
          width: 1rem;
          height: 1rem;
          vertical-align: -0.125em;
          border: 0.15em solid currentColor;
          border-right-color: transparent;
          border-radius: 50%;
          animation: spinner-border 0.75s linear infinite;
          margin-right: 0.5rem;
        }
        
        @keyframes spinner-border {
          to { transform: rotate(360deg); }
        }
        
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        /* Success Message */
        .success-message {
          text-align: center;
          padding: 3rem 0;
        }
        
        .success-icon {
          color: #198754;
          margin-bottom: 1rem;
        }
        
        .success-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #198754;
          margin-bottom: 0.5rem;
        }
        
        .success-text {
          color: #6c757d;
        }
        
        /* Contact Info Styles */
        .info-cards {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .info-card {
          box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15);
          border: none;
          border-radius: 0.5rem;
          height: 100%;
        }
        
        .info-card-content {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }
        
        .icon-container {
          padding: 0.75rem;
          border-radius: 0.5rem;
          background-color: #f8f9fa;
          flex-shrink: 0;
        }
        
        .icon-container.primary {
          color: #F9C828;
        }
        
        .icon-container.success {
          color: #F9C828;
        }
        
        .icon-container.info {
          color: #F9C828;
        }
        
        .icon-container.warning {
          color: #F9C828;
        }
        
        .info-details {
          flex-grow: 1;
        }
        
        .info-title {
          font-weight: 600;
          color: #212529;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }
        
        .info-text {
          color: #ffff;
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
        }
        
        /* Map Section */
        .map-card {
          box-shadow: 0 1rem 3rem rgba(0,0,0,0.175);
          background-color:#F9C828;
          border: none;
          border-radius: 1rem;
          margin-bottom: 3rem;
        }
        
        .map-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .map-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #212529;
          margin-bottom: 0.75rem;
        }
        
        .map-description {
          color: #6c757d;
          font-size: 1.1rem;
          margin-left: auto;
          margin-right: auto;
          max-width: 600px;
        }
        
        .map-container {
          width: 100%;
          border-radius: 0.5rem;
          box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15);
          overflow: hidden;
          height: 400px;
        }
        
        /* CTA Section */
        .cta-section {
          text-align: center;
        }
        
        .cta-card {
          border: none;
          border-radius: 1rem;
          color: #fff;
          background: linear-gradient(135deg, #0d6efd 0%, #6f42c1 50%, #4c63d2 100%);
        }
        
        .cta-title {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }
        
        .cta-description {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.9);
          margin-bottom: 1.5rem;
          margin-left: auto;
          margin-right: auto;
          max-width: 600px;
        }
        
        .cta-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          justify-content: center;
        }
        
        @media (min-width: 576px) {
          .cta-buttons {
            flex-direction: row;
          }
        }
        
        .btn {
          display: inline-block;
          font-weight: 600;
          text-align: center;
          vertical-align: middle;
          cursor: pointer;
          user-select: none;
          padding: 0.75rem 1.5rem;
          font-size: 1.1rem;
          border-radius: 0.5rem;
          transition: all 0.15s ease-in-out;
        }
        
        .btn-primary {
          color: #212529;
          background-color: #fff;
          border: none;
        }
        
        .btn-outline {
          color: #fff;
          background-color: transparent;
          border: 1px solid #fff;
        }
        
        .btn-outline:hover {
          color: #212529;
          background-color: #fff;
        }
        
        /* Footer Styles */
        .footer {
          background-color: #212529;
          color: #fff;
          padding: 3rem 0;
        }
        
        .footer-content {
          text-align: center;
        }
        
        .footer-logo {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .footer-text {
          color: #6c757d;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;