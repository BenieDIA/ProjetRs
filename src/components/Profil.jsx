import React, { useState, useRef } from "react";
import { 
  MessageSquare, 
  Megaphone, 
  Home, 
  User, 
  Edit, 
  MapPin, 
  Mail, 
  Calendar 
} from "lucide-react";
import "./Profil.css"; 

export default function Profil({ onNavigate, currentPage }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Malek Chaouche',
    email: 'malek.chaouche@iticparis.com',
    location: 'Paris, France',
    memberSince: 'Membre depuis Septembre 2023',
    bio: "Étudiant en informatique passionné par le développement web et l'intelligence artificielle. J'aime partager mes connaissances et apprendre avec les autres.",
  });
  const [draft, setDraft] = useState(profile);
  const [coverImageUrl, setCoverImageUrl] = useState(null);
  const [profileImageUrl, setProfileImageUrl] = useState(null);
  const coverInputRef = useRef(null);
  const profileInputRef = useRef(null);

  const handleCoverSelect = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) setCoverImageUrl(URL.createObjectURL(file));
  };
  const handleProfileSelect = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) setProfileImageUrl(URL.createObjectURL(file));
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const stats = [
    { label: "Posts dans les forums", value: "24" },
    { label: "Réponses données", value: "67" },
    { label: "Annonces publiées", value: "5" },
    { label: "Likes reçus", value: "143" }
  ];

  const recentActivities = [
    { icon: "💬", text: 'A publié dans le forum "Algorithmes"', time: "Il y a 2h", color: "#c5cae9" },
    { icon: "💬", text: 'A répondu à "Question sur React"', time: "Il y a 1 jour", color: "#c5cae9" },
    { icon: "📢", text: 'A publié une annonce "Stage disponible"', time: "Il y a 2 jours", color: "#ffcdd2" },
    { icon: "💬", text: 'A créé une discussion "Projet web"', time: "Il y a 3 jours", color: "#c5cae9" }
  ];

  const interests = ["React", "Node.js", "IA", "Machine Learning", "Web Design"];

  const mainContributions = [
    { icon: "🏆", text: 'Projet "System de gestion de bibliothèque"', description: "Développement du backend et de l'API REST", time: "Octobre 2023", color: "#fff3e0" },
    { icon: "💡", text: 'Workshop "Introduction à React"', description: "Animation d'un atelier pour 20 étudiants", time: "Septembre 2023", color: "#e3f2fd" },
    { icon: "📊", text: 'Analyse de données "Comportement utilisateur"', description: "Étude statistique et visualisation", time: "Août 2023", color: "#f3e5f5" },
    { icon: "🤝", text: 'Mentorat "Programmation Python"', description: "Accompagnement de 5 étudiants débutants", time: "Juillet 2023", color: "#e8f5e9" }
  ];

  return (
    <div className="profil-container">
      {/* Hamburger */}
      <button onClick={toggleSidebar} className="hamburger">☰</button>

      <div className="profil-layout">
        {/* Sidebar */}
        <nav className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
          <div>
            <h2 className="sidebar-title">ITICETUD</h2>
            <ul className="sidebar-menu">
              {[
                { name: 'Accueil', icon: <Home size={18} />, route: 'home' },
                { name: 'Forums', icon: <MessageSquare size={18} />, route: 'forums' },
                { name: 'Annonces', icon: <Megaphone size={18} />, route: 'annonces' },
                { name: 'Profil', icon: <User size={18} />, route: 'profil' }
              ].map((item, idx) => (
                <li 
                  key={idx} 
                  className={`sidebar-item ${currentPage === item.route ? "active" : ""}`}
                  onClick={() => onNavigate && onNavigate(item.route)}
                  style={{ cursor: 'pointer' }}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebar-footer">© 2025 ITICETUD</div>
        </nav>

        {/* Main Content */}
        <div className={`main-content ${sidebarOpen ? "sidebar-open" : ""}`}>
          <div className="profil-inner">

            {/* Profile Header Card */}
            <div className="profile-card">
              <div className="cover-photo" style={coverImageUrl ? { backgroundImage: `url(${coverImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}>
                <button className="cover-camera" onClick={() => coverInputRef.current && coverInputRef.current.click()}>
                  <span className="plus-icon">+</span>
                </button>
                <input ref={coverInputRef} type="file" accept="image/*" onChange={handleCoverSelect} style={{ display: 'none' }} />
              </div>

              <div className="profile-info">
                <div className="profile-picture">
                  {profileImageUrl ? (
                    <img src={profileImageUrl} alt="Profil" className="profile-picture-img" />
                  ) : (
                    'SM'
                  )}
                  <button className="profile-camera" onClick={() => profileInputRef.current && profileInputRef.current.click()}>
                    <span className="plus-icon">+</span>
                  </button>
                  <input ref={profileInputRef} type="file" accept="image/*" onChange={handleProfileSelect} style={{ display: 'none' }} />
                </div>

                <div className="profile-header">
                  <div>
                    {isEditing ? (
                      <>
                        <input
                          type="text"
                          value={draft.name}
                          onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                          style={{ fontSize: 24, padding: 6, marginBottom: 6, width: '100%' }}
                        />
                        <p style={{ margin: '6px 0 10px 0', color: '#717182' }}>Informatique • 3ème année - Bachelor</p>
                        <div className="profile-contact">
                          <div>
                            <Mail size={16} />
                            <input
                              type="email"
                              value={draft.email}
                              onChange={(e) => setDraft({ ...draft, email: e.target.value })}
                              style={{ padding: 6, width: '100%' }}
                            />
                          </div>
                          <div>
                            <MapPin size={16} />
                            <input
                              type="text"
                              value={draft.location}
                              onChange={(e) => setDraft({ ...draft, location: e.target.value })}
                              style={{ padding: 6, width: '100%' }}
                            />
                          </div>
                          <div><Calendar size={16} /><span>{profile.memberSince}</span></div>
                        </div>
                      </>
                    ) : (
                      <>
                        <h1>{profile.name}</h1>
                        <p>Informatique • 3ème année - Bachelor</p>
                        <div className="profile-contact">
                          <div><Mail size={16} /><span>{profile.email}</span></div>
                          <div><MapPin size={16} /><span>{profile.location}</span></div>
                          <div><Calendar size={16} /><span>{profile.memberSince}</span></div>
                        </div>
                      </>
                    )}
                  </div>
                  {isEditing ? (
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button
                        className="edit-btn"
                        onClick={() => { setProfile(draft); setIsEditing(false); }}
                      >
                        Enregistrer
                      </button>
                      <button
                        className="edit-btn"
                        onClick={() => { setDraft(profile); setIsEditing(false); }}
                        style={{ background: '#9e9e9e' }}
                      >
                        Annuler
                      </button>
                    </div>
                  ) : (
                    <button className="edit-btn" onClick={() => { setDraft(profile); setIsEditing(true); }}>
                      <Edit size={18} />Modifier le profil
                    </button>
                  )}
                </div>

                {isEditing ? (
                  <div className="profile-bio">
                    <textarea
                      value={draft.bio}
                      onChange={(e) => setDraft({ ...draft, bio: e.target.value })}
                      rows={4}
                      style={{ width: '100%', padding: 10 }}
                    />
                  </div>
                ) : (
                  <div className="profile-bio">
                    {profile.bio}
                  </div>
                )}

                <div className="stats-grid">
                  {stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="two-column-layout">
              {/* Left Column */}
              <div>
                {/* Academic Information */}
                <div className="card card--compact">
                  <h3>📚 Informations académiques</h3>
                  <div className="academic-info">
                    {[{ label: 'Université', value: 'Itic Paris' },
                      { label: "Niveau d'études", value: '3ème année - Bachelor' },
                      { label: 'Spécialité', value: 'Informatique' }].map((item, idx) => (
                        <div key={idx} className="academic-item">
                          <div className="academic-label">{item.label}</div>
                          <div className="academic-value">{item.value}</div>
                        </div>
                    ))}
                  </div>
                </div>

                {/* Interests */}
                <div className="card card--compact">
                  <h3>🎯 Centres d'intérêt</h3>
                  <div className="interests">
                    {interests.map((interest, index) => (
                      <span key={index} className="interest-item">{interest}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column Activities Container */}
              <div className="activities-container">
                {/* Recent Activity */}
                <div className="card recent-activities-card">
                  <h3>⚡ Activité récente</h3>
                  <div className="recent-activities">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="activity-item">
                        <div className="activity-icon" style={{ backgroundColor: activity.color }}>{activity.icon}</div>
                        <div className="activity-text">
                          <div>{activity.text}</div>
                          <div className="activity-time">{activity.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Contributions */}
                <div className="card main-contributions-card">
                  <h3>🎯 Contributions principales</h3>
                  <div className="main-contributions">
                    {mainContributions.map((contribution, index) => (
                    <div key={index} className="contribution-item">
                      <div className="contribution-icon" style={{ backgroundColor: contribution.color }}>{contribution.icon}</div>
                      <div className="contribution-text">
                        <div className="contribution-title">{contribution.text}</div>
                        <div className="contribution-description">{contribution.description}</div>
                        <div className="contribution-time">{contribution.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </div>  )
  ;}