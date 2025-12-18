import React, { useState } from "react";
import "./Forums.css";
import { MessageSquare, Home, Megaphone, User, Plus } from "lucide-react";

export default function Forums({ forums = [], onNavigate, onCreateForum, onSelectForum }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // Ajout d'un état pour l'erreur visuelle
  const [error, setError] = useState("");
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Correction 2 : Validation avec message d'erreur visuel
    if (!title.trim()) {
      setError("Le titre du forum est obligatoire.");
      return;
    }
    setError(""); // On réinitialise l'erreur si c'est bon
    onCreateForum(title, description);
    setTitle("");
    setDescription("");
    setShowForm(false);
  };

  return (
    <div className="dashboard">
      <button className="hamburger" onClick={toggleSidebar} aria-label="Menu">☰</button>
      <nav className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <h2>ITICETUD</h2>
        <ul>
          {/* Correction 1 : Accessibilité sur les éléments cliquables */}
          <li onClick={() => onNavigate("home")} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onNavigate("home")}>
            <Home size={18} /> <span>Accueil</span>
          </li>
          <li onClick={() => onNavigate("forums")} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onNavigate("forums")}>
            <MessageSquare size={18} /> <span>Forums</span>
          </li>
          <li onClick={() => onNavigate("annonces")} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onNavigate("annonces")}>
            <Megaphone size={18} /> <span>Annonces</span>
          </li>
          <li onClick={() => onNavigate("profil")} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onNavigate("profil")}>
            <User size={18} /> <span>Profil</span>
          </li>
        </ul>
        <div className="sidebar-footer">© 2025 ITICETUD</div>
      </nav>

      <div className={`main-content ${sidebarOpen ? "with-sidebar" : "full-width"}`}>
        <div className="hero">
          <img
            src="https://images.unsplash.com/photo-1693011142814-aa33d7d1535c?auto=format&fit=crop&w=1200&q=80"
            alt="Forums"
            className="hero-image"
          />
          <div className="hero-overlay">
            <h2>Forums ITICETUD 💬</h2>
            <p>Échangez, collaborez et partagez vos idées</p>
          </div>
        </div>

        <div className="forums-container">
          {/* Correction 3 : Vérification si la liste est vide */}
          {forums && forums.length > 0 ? (
            forums.map((forum) => (
              <div 
                key={forum.id} 
                className="forum-card" 
                onClick={() => onSelectForum(forum)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onSelectForum(forum)}
              >
                <div>
                  <h3>{forum.title}</h3>
                  <p>{forum.description}</p>
                </div>
                <span className="posts-count">{forum.messages ? forum.messages.length : 0} messages</span>
              </div>
            ))
          ) : (
            <p className="no-forums">Aucun forum n'a été créé pour le moment.</p>
          )}
        </div>

        <div className="actions-card">
          <h3>Créer un nouveau forum</h3>
          {showForm ? (
            <form onSubmit={handleSubmit} className="forum-form">
              {/* Affichage visuel de l'erreur */}
              {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
              <input
                type="text"
                placeholder="Titre du forum"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className={error ? "input-error" : ""}
              />
              <textarea
                placeholder="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
              <button type="submit">Créer</button>
              <button type="button" onClick={() => {setShowForm(false); setError("");}}>Annuler</button>
            </form>
          ) : (
            <button className="action-btn" onClick={() => setShowForm(true)}>
              <Plus size={16} /> Nouveau forum
            </button>
          )}
        </div>
      </div>
    </div>
  );
}