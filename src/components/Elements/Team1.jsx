import { Linkedin, Twitter } from 'lucide-react';

function Team1() {
  const teamMembers = [
    {
      name: "BAJPE BASHEER ABDUL KHADER ",
      title: "Founder & Chairman, ATELIER & G4 Complete Sanitary & Tiles",
      image: require('./../../images/about-slider/cm.png'),
      description: "My entrepreneurial journey began in 1995 with a simple vision, to build businesses rooted in trust, innovation, and excellence. Over 25 years in the electronics industry have taught me that true success lies in creating value and lasting relationships. ATELIER & G4 Tiles and Sanitary Ware is an extension of that belief, where design meets purpose. Our mission is to deliver world-class products that transform spaces into reflections of beauty, comfort, and sophistication. As we grow, our focus remains clear: quality without compromise and service with integrity, a commitment to elevate everyday living through design and dedication."
    },
    {
      name: "HAMDAN",
      title: "Managing Director , Atelier Designs",
      image: require('./../../images/about-slider/34.png'),
      description: "Hamdan is the MD of Atelier Designs, a premium tiles, sanitary ware, bathroom fittings, and modular kitchen showroom in Mangalore. With a strong passion for design and quality, he has created a space that offers stylish, functional, and reliable solutions for modern homes and commercial projects. He believes in delivering more than just products—focusing on understanding client needs, architectural vision, and long-term value. Known for personalized service and attention to detail, Hamdan works closely with architects, builders, designers, and homeowners to ensure seamless project execution."
    }
  ];

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <div className="team-card">
          <div className="header">
            <h1 className="title">OUR TEAM</h1>
            {/* <div className="social-icons">
              <div className="icon-circle">
                <Linkedin className="icon" />
              </div>
              <div className="icon-circle">
                <Twitter className="icon" />
              </div>
            </div> */}
          </div>

          <div className="members-container">
            {teamMembers.map((member, index) => (
              <div key={index}>
                <div className={`member-row ${index % 2 === 0 ? 'normal' : 'reverse'}`}>
                  <div className="member-image-section">
                    <img
                     src={member.image} 
   
                      alt={member.name}
                      className="member-image"
                    />
                    {/* <div className="member-info">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-title">{member.title}</p>
                    </div> */}
                  </div>

                  <div className="member-description-section">
                    <p className="member-description">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-title">{member.title}</p>
                      {member.description}
                    </p>
                  </div>
                </div>

                {index < teamMembers.length - 1 && (
                  <div className="divider"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
     
      <style>{`
      .page-container {
  min-height: 100vh;
  background-color: #f9fafb;
  padding: 4rem 0;
}

.content-wrapper {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 2rem;
}

.team-card {
  background-color: white;
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 3rem 6rem 3rem 6rem;
}

.header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 3rem;
}

.title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #111827;
  letter-spacing: -0.025em;
  margin: 0;
}

.social-icons {
  display: flex;
  gap: 0.75rem;
}

.icon-circle {
  width: 3rem;
  height: 3rem;
  background-color: #475569;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
}

.icon-circle:hover {
  background-color: #334155;
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
  color: white;
}

.members-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.member-row {
  display: flex;
  gap: 3rem;
  align-items: flex-start;
}

.member-row.normal {
  flex-direction: row;
}

.member-row.reverse {
  flex-direction: row-reverse;
}

.member-image-section {
  width: 16rem;
  flex-shrink: 0;
}

.member-image {
  width: 220px;
  height: 250px;
  object-fit: cover;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  // background-color: #F3C033;
  padding:5px;
  border: 3px solid #F3C033;
}

.member-info {
  margin-top: 1.5rem;
}

.member-name {
  font-size: 1.5rem;
  font-weight: 900;
  color: #111827;
  letter-spacing: -0.025em;
  margin: 0;
}

.member-title {
  color: #6b7280;
  font-weight: 500;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  letter-spacing: 0.025em;
}

.member-description-section {
  flex: 1;
  display: flex;
  align-items: center;
}

.member-description {
  color: #111827;
  font-size: 1.125rem;
  line-height: 1.75;
  text-align: justify;
  margin: 0;
}

.divider {
  margin-top: 2rem;
  border-top: 4px solid #111827;
}

@media (max-width: 1024px) {
  .team-card {
    padding: 2rem;
  }

  .title {
    font-size: 2.5rem;
  }

  .member-row.normal,
  .member-row.reverse {
    flex-direction: column;
  }

  .member-image-section {
    width: 100%;
  }
}

@media (max-width: 640px) {
  .page-container {
    padding: 2rem 0;
  }

  .content-wrapper {
    padding: 0 1rem;
  }

  .team-card {
    padding: 1.5rem;
  }

  .title {
    font-size: 2rem;
  }

  .header {
    flex-direction: column;
    gap: 1.5rem;
  }

  .social-icons {
    align-self: flex-start;
  }
}

      `}</style>
    </div>
  );
}

export default Team1;