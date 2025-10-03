import { Linkedin, LinkedinIcon, Twitter } from 'lucide-react';

function Team1() {
  const teamMembers = [
    {
      name: 'ANNA SINGH',
      title: 'CHAIRMAN',
      description: 'Visioinary leader with a passion for sustainable design and community building. Anna guides the company\'s strategic growth, ensurtin, ensuring evejery project reflects our core values. With 15+ years nin industry, her expertise in umantched.',
      image: 'https://images.pexels.com/photos/7428096/pexels-photo-7428096.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'RAJESH KUMAR',
      title: 'DIRECTOR',
      description: 'Creative mastrminand and architectural Rajesh driva eesh drives the design phiosophy, integrating-cutteting technology eco-friendly eco-friendly practices. His award-winning designs : have respaped urban landscapes.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <div className="team-card">
          <div className="header">
            <h1 className="title">OUR TEAM</h1>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="team-members">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-content">
                  <div className="profile-image-container">
                    <div className="profile-gradient"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="profile-image"
                    />
                  </div>

                  <div className="member-description">
                    <p>{member.description}</p>
                  </div>
                </div>

                <div className="member-info">
                  <h2 className="member-name">{member.name}</h2>
                  <p className="member-title">{member.title}</p>
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
      .app-container {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #f9fafb, #f3f4f6);
  padding: 3rem 1rem;
}

.content-wrapper {
  max-width: 80rem;
  margin: 0 auto;
}

.team-card {
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  padding: 3rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4rem;
}

.title {
  font-size: 3.75rem;
  font-weight: 700;
  color: #111827;
  letter-spacing: -0.025em;
  margin: 0;
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  color: white;
  text-decoration: none;
}

.social-icon:hover {
  background-color: #1f2937;
}

.team-members {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.team-member {
  display: flex;
  flex-direction: column;
}

.member-content {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.profile-image-container {
  flex-shrink: 0;
  position: relative;
  width: 12rem;
  height: 12rem;
}

.profile-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom right, #fbbf24, #f59e0b, #d97706);
  border-radius: 50%;
  transform: scale(1.05);
}

.profile-image {
  position: relative;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  object-fit: cover;
  border: 8px solid white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.member-description {
  flex: 1;
  padding-top: 1rem;
}

.member-description p {
  color: #374151;
  font-size: 1.125rem;
  line-height: 1.75;
  margin: 0;
}

.member-info {
  margin-top: 1.5rem;
}

.member-name {
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.25rem 0;
}

.member-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin: 0;
}

.divider {
  margin-top: 3rem;
  border-top: 4px solid #1f2937;
  max-width: 28rem;
}

@media (max-width: 768px) {
  .team-card {
    padding: 2rem;
  }

  .title {
    font-size: 2.5rem;
  }

  .header {
    margin-bottom: 3rem;
  }

  .member-content {
    flex-direction: column;
  }

  .profile-image-container,
  .profile-gradient,
  .profile-image {
    width: 10rem;
    height: 10rem;
  }

  .member-description p {
    font-size: 1rem;
  }

  .member-name {
    font-size: 1.5rem;
  }
}

@media (max-width: 640px) {
  .app-container {
    padding: 1.5rem 1rem;
  }

  .team-card {
    padding: 1.5rem;
  }

  .title {
    font-size: 2rem;
  }

  .header {
    flex-direction: column;
    gap: 1rem;
  }

  .social-links {
    align-self: flex-start;
  }
}

      `}</style>
    </div>
  );
}

export default Team1;
