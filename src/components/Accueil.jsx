import React, { useState } from "react";
import "./Accueil.css";
import { MessageSquare, TrendingUp, Megaphone, Home, User } from "lucide-react";

export default function Accueil({ onNavigate }) {
  const [sidebarOpen, setSidebarOpen] = useState(true); // État de la sidebar

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const stats = [
    {
      label: "Discussions actives",
      value: "45",
      icon: <TrendingUp />,
      color: "#4caf50",
    },
    {
      label: "Posts dans les forums",
      value: "128",
      icon: <MessageSquare />,
      color: "#2196f3",
    },
    {
      label: "Annonces récentes",
      value: "8",
      icon: <Megaphone />,
      color: "#9c27b0",
    },
  ];

  const recentForums = [
    {
      forumName: "Projet de fin d'année",
      lastMessageTitle: "Nouvelle discussion sur le projet React",
      time: "Il y a 10 min",
      author: "Marie Dupont",
    },
    {
      forumName: "Algorithmes",
      lastMessageTitle: "Question sur les algorithmes de tri",
      time: "Il y a 1h",
      author: "Jean Martin",
    },
    {
      forumName: "Stage Data Science",
      lastMessageTitle: "Nouvelle annonce: Stage Data Science",
      time: "Il y a 2h",
      author: "Bureau des stages",
    },
    {
      forumName: "Aide React",
      lastMessageTitle: "Aide pour le projet React",
      time: "Il y a 3h",
      author: "Sophie Bernard",
    },
  ];

  return (
    <div className="dashboard">
      {/* Hamburger */}
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Sidebar */}
      <nav className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <h2>ITICETUD</h2>
        <ul>
          <ul>
            <li className="active">
              <Home size={18} /> <a href="#accueil">Accueil</a>
            </li>
            <li>
              <MessageSquare size={18} /> <a href="#forums">Forums</a>
            </li>
            <li>
              <Megaphone size={18} /> <a href="#annonces">Annonces</a>
            </li>
            <li>
              <User size={18} /> <a href="#profil">Profil</a>
            </li>
          </ul>
        </ul>
        <div className="sidebar-footer">© 2025 ITICETUD</div>
      </nav>

      {/* Main Content */}
      <div
        className={`main-content ${
          sidebarOpen ? "with-sidebar" : "full-width"
        }`}
      >
        {/* Hero Section */}
        <div className="hero">
          <img
            src="https://images.unsplash.com/photo-1693011142814-aa33d7d1535c?auto=format&fit=crop&w=1200&q=80"
            alt="Campus"
            className="hero-image"
          />
          <div className="hero-overlay">
            <h2>Bienvenue sur ITICETUD 👋</h2>

            <p>
              Votre plateforme collaborative pour échanger, apprendre et réussir
              ensemble
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-info">
                <p className="stat-label">{stat.label}</p>
                <p className="stat-value">{stat.value}</p>
              </div>
              <div
                className="stat-icon"
                style={{ backgroundColor: stat.color }}
              >
                {stat.icon}
              </div>
            </div>
          ))}
        </div>

        <div className="activities-card">
          <h3>Forums récents</h3>
          {recentForums.map((forum, index) => (
            <div key={index} className="activity-item">
              <div className="avatar">{forum.author.charAt(0)}</div>
              <div className="activity-info">
                <p className="activity-title">{forum.lastMessageTitle}</p>
                <p className="activity-details">
                  {forum.forumName} • {forum.author} • {forum.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="actions-card">
          <h3>Actions rapides</h3>
          <div className="actions-grid">
            <button
              onClick={() => onNavigate && onNavigate("forums")}
              className="action-btn"
            >
              🗨️ Nouveau post
              <p>Créer une discussion</p>
            </button>
            <button
              onClick={() => onNavigate && onNavigate("announcements")}
              className="action-btn"
            >
              📢 Publier annonce
              <p>Informer la communauté</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
