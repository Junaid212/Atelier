import { Linkedin, Twitter } from 'lucide-react';

function Team1() {
  const teamMembers = [
    {
      name: "BAJPE BASHEER ABDUL KHADER ",
      title: "Founder & Chairman, ATELIER & G4 Complete Sanitary & Tiles",
      image: "data:image/png;base64,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",
      description: "My entrepreneurial journey began in 1995 with a simple vision, to build businesses rooted in trust, innovation, and excellence. Over 25 years in the electronics industry have taught me that true success lies in creating value and lasting relationships. ATELIER & G4 Tiles and Sanitary Ware is an extension of that belief, where design meets purpose. Our mission is to deliver world-class products that transform spaces into reflections of beauty, comfort, and sophistication. As we grow, our focus remains clear: quality without compromise and service with integrity, a commitment to elevate everyday living through design and dedication."
    },
    // {
    //   name: "RAJESH KUMAR",
    //   title: "DIRECTOR",
    //   image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   description: "Visioinary leader with a passion for sustainable design and community building. Anna guides the company's strategic growth, ensurtin, ensuring evejery project reflects our core values. With 15+ years nin industry, her expertise in umantched."
    // }
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