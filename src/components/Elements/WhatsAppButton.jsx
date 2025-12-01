import { useState } from 'react';
import { MessageCircle } from "lucide-react";

const WhatsAppButton = ({ phoneNumber = "+917204097368", message = "Hello!" }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const buttonStyle = {
    position: 'fixed',
    bottom: '4rem',
    right: '1rem',
    width: '3rem',
    height: '3rem',
    borderRadius: '999px',
    backgroundColor: '#25D366',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: isHovered 
      ? '0 6px 20px rgba(37, 211, 102, 0.6)' 
      : '0 4px 12px rgba(37, 211, 102, 0.4)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    zIndex: 1000,
    textDecoration: 'none',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)'
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Chat on WhatsApp"
    >
      <i class="fa fa-whatsapp" style={{fontSize:'32px'}}></i>
    </a>
  );
};

export default WhatsAppButton;