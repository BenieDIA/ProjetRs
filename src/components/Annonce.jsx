import React, { useEffect, useState } from "react";
import "./Accueil.css";
import "./Annonce.css";
import { MessageSquare, Megaphone, Home, User } from "lucide-react";

export default function Annonce({ onNavigate }) {
  const [annonces, setAnnonces] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [categorie, setCategorie] = useState("Toutes");
  const [sortOrder, setSortOrder] = useState("recent");
  const [showModal, setShowModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [newAnnonce, setNewAnnonce] = useState({
    titre: "",
    description: "",
    categorie: "",
    auteur: "",
  });

  // --- Données simulées (sans json-server)
  useEffect(() => {
    const fakeData = [
      {
        id: 1,
        titre: "Stage React disponible",
        description: "Entreprise X recherche un stagiaire en développement web.",
        categorie: "Stage",
        auteur: "Admin",
        date: "2025-11-01",
        vues: 12,
        epingler: true,
      },
      {
        id: 2,
        titre: "Événement Hackathon",
        description: "Participez au hackathon ITIC 2025 !",
        categorie: "Événement",
        auteur: "ITIC",
        date: "2025-10-28",
        vues: 25,
        epingler: false,
      },
      {
        id: 3,
        titre: "Plateforme d'échange Étudiants",
        description:
          "Échanger, publier des annonces, discuter et interagir autour de la vie étudiante",
        categorie: "Projet",
        auteur: "ITIC DEVS",
        date: "2025-11-07",
        vues: 5,
        epingler: false,
      },
    ];

    setAnnonces(fakeData);
    setFiltered(fakeData);
  }, []);

<<<<<<< HEAD
  
  // --- Filtres + recherche + tri
=======
  // --- Recherche + filtres + tri
>>>>>>> 8581835 (J’ai corrigé les mauvaises pratiques de code dans les fichiers Profil.jsx, Forum.jsx, ForumDetail.jsx et Annonce.jsx)
  useEffect(() => {
    let result = annonces.filter((annonce) =>
      annonce.titre.toLowerCase().includes(search.toLowerCase())
    );

    if (categorie !== "Toutes") {
      result = result.filter(
        (annonce) => annonce.categorie === categorie
      );
    }

    result.sort((annonce1, annonce2) => {
      if (sortOrder === "recent") {
        return new Date(annonce2.date) - new Date(annonce1.date);
      } else {
        return new Date(annonce1.date) - new Date(annonce2.date);
      }
    });

    setFiltered(result);
  }, [search, categorie, sortOrder, annonces]);

  // --- Épingler / désépingler
  const toggleEpingler = (annonceId) => {
    const updatedAnnonces = annonces.map((annonce) =>
      annonce.id === annonceId
        ? { ...annonce, epingler: !annonce.epingler }
        : annonce
    );
    setAnnonces(updatedAnnonces);
  };

  // --- Publication d'une annonce
  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !newAnnonce.titre ||
      !newAnnonce.description ||
      !newAnnonce.categorie
    ) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    const annonceToAdd = {
      ...newAnnonce,
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      vues: 0,
      epingler: false,
    };

    setAnnonces([annonceToAdd, ...annonces]);
    setShowModal(false);
    setNewAnnonce({
      titre: "",
      description: "",
      categorie: "",
      auteur: "",
    });
  };

  return (
    <div className="dashboard">
      {/* Bouton hamburger */}
      <button
        className="hamburger"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>

<<<<<<< HEAD
      {/* --- Sidebar identique à Accueil --- */}
=======
      {/* Sidebar */}
>>>>>>> 8581835 (J’ai corrigé les mauvaises pratiques de code dans les fichiers Profil.jsx, Forum.jsx, ForumDetail.jsx et Annonce.jsx)
      <nav className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <h2>ITICETUD</h2>
        <ul>
          <li onClick={() => onNavigate("home")}>
            <Home size={18} /> <span>Accueil</span>
          </li>
          <li onClick={() => onNavigate("forums")}>
            <MessageSquare size={18} /> <span>Forums</span>
          </li>
          <li onClick={() => onNavigate("annonces")}>
            <Megaphone size={18} /> <span>Annonces</span>
          </li>
          <li onClick={() => onNavigate("profil")}>
            <User size={18} /> <span>Profil</span>
          </li>
        </ul>
        <div className="sidebar-footer">© 2025 ITICETUD</div>
      </nav>

<<<<<<< HEAD
      {/* --- Contenu principal --- */}
      <div className={`main-content ${sidebarOpen ? "with-sidebar" : "full-width"}`}>
        {/* --- Hero (même que dans Accueil) --- */}
=======
      {/* Contenu principal */}
      <div
        className={`main-content ${
          sidebarOpen ? "with-sidebar" : "full-width"
        }`}
      >
        {/* Hero */}
>>>>>>> 8581835 (J’ai corrigé les mauvaises pratiques de code dans les fichiers Profil.jsx, Forum.jsx, ForumDetail.jsx et Annonce.jsx)
        <div className="hero">
          <img src="https://images.unsplash.com/photo-1693011142814-aa33d7d1535c?auto=format&fit=crop&w=1200&q=80" alt="Campus" className="hero-image"/>
          <div className="hero-overlay">
            <h2>ANNONCES ITICETUD</h2>
            <p>
              Découvrez ou publiez des opportunités pour la communauté ITIC
            </p>
          </div>
        </div>

        {/* Bloc annonces */}
        <main className="annonce-container">
          <div className="annonce-header">
            <div>
              <h2>Annonces</h2>
              <p>Partagez des opportunités avec la communauté</p>
            </div>
            <button
              className="btn-publier"
              onClick={() => setShowModal(true)}
            >
              + Publier une annonce
            </button>
          </div>

          {/* Recherche */}
          <div className="search-bar">
<<<<<<< HEAD
            <input type="text" placeholder="Rechercher une annonce..." value={search} onChange={(e) => setSearch(e.target.value)}/>
=======
            <input
              type="text"
              placeholder="Rechercher une annonce..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />
>>>>>>> 8581835 (J’ai corrigé les mauvaises pratiques de code dans les fichiers Profil.jsx, Forum.jsx, ForumDetail.jsx et Annonce.jsx)
          </div>

          {/* Filtres */}
          <div className="filters">
<<<<<<< HEAD
            {["Toutes", "Événement", "Stage", "Projet", "Important", "Général"].map(
              (cat) => (
                <button key={cat} className={`filter-btn ${categorie === cat ? "active" : ""}`} onClick={() => setCategorie(cat)}>
                  {cat}
                </button>
              )
            )}
            <select className="tri-select" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
=======
            {[
              "Toutes",
              "Événement",
              "Stage",
              "Projet",
              "Important",
              "Général",
            ].map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${
                  categorie === cat ? "active" : ""
                }`}
                onClick={() => setCategorie(cat)}
              >
                {cat}
              </button>
            ))}

            <select
              className="tri-select"
              value={sortOrder}
              onChange={(event) =>
                setSortOrder(event.target.value)
              }
            >
>>>>>>> 8581835 (J’ai corrigé les mauvaises pratiques de code dans les fichiers Profil.jsx, Forum.jsx, ForumDetail.jsx et Annonce.jsx)
              <option value="recent">Plus récentes</option>
              <option value="ancien">Plus anciennes</option>
            </select>
          </div>

          {/* Liste des annonces */}
          <div className="annonce-list">
<<<<<<< HEAD
            {filtered.map((a) => (
              <div key={a.id} className={`annonce-card ${a.epingler ? "epinglee" : ""}`}>
=======
            {filtered.map((annonce) => (
              <div
                key={annonce.id}
                className={`annonce-card ${
                  annonce.epingler ? "epinglee" : ""
                }`}
              >
>>>>>>> 8581835 (J’ai corrigé les mauvaises pratiques de code dans les fichiers Profil.jsx, Forum.jsx, ForumDetail.jsx et Annonce.jsx)
                <div className="annonce-info">
                  <div className="annonce-top">
                    <h3>{annonce.titre}</h3>
                    <span
                      className={`badge cat-${annonce.categorie.toLowerCase()}`}
                    >
                      {annonce.categorie}
                    </span>
                  </div>

                  <p>{annonce.description}</p>

                  <div className="annonce-meta">
                    <span>{annonce.auteur}</span>
                    <span>
                      •{" "}
                      {new Date(annonce.date).toLocaleDateString()}
                    </span>
                    <span>• {annonce.vues} vues</span>
                  </div>
                </div>
<<<<<<< HEAD
                <button className="btn-epingle" onClick={() => toggleEpingler(a.id)}>
                  {a.epingler ? "★ Épinglée" : "☆ Épingler"}
=======

                <button
                  className="btn-epingle"
                  onClick={() =>
                    toggleEpingler(annonce.id)
                  }
                >
                  {annonce.epingler
                    ? "★ Épinglée"
                    : "☆ Épingler"}
>>>>>>> 8581835 (J’ai corrigé les mauvaises pratiques de code dans les fichiers Profil.jsx, Forum.jsx, ForumDetail.jsx et Annonce.jsx)
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Modal publication */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Publier une nouvelle annonce</h3>

            <form onSubmit={handleSubmit}>
<<<<<<< HEAD
              <input type="text" placeholder="Titre de votre annonce" value={newAnnonce.titre} onChange={(e) => setNewAnnonce({ ...newAnnonce, titre: e.target.value })}/>
              <textarea placeholder="Décrivez votre annonce" value={newAnnonce.description} onChange={(e) => setNewAnnonce({...newAnnonce, description: e.target.value,})}/>
              <select value={newAnnonce.categorie} onChange={(e) => setNewAnnonce({ ...newAnnonce, categorie: e.target.value })}>
=======
              <input
                type="text"
                placeholder="Titre de votre annonce"
                value={newAnnonce.titre}
                onChange={(event) =>
                  setNewAnnonce({
                    ...newAnnonce,
                    titre: event.target.value,
                  })
                }
              />

              <textarea
                placeholder="Décrivez votre annonce"
                value={newAnnonce.description}
                onChange={(event) =>
                  setNewAnnonce({
                    ...newAnnonce,
                    description: event.target.value,
                  })
                }
              />

              <select
                value={newAnnonce.categorie}
                onChange={(event) =>
                  setNewAnnonce({
                    ...newAnnonce,
                    categorie: event.target.value,
                  })
                }
              >
>>>>>>> 8581835 (J’ai corrigé les mauvaises pratiques de code dans les fichiers Profil.jsx, Forum.jsx, ForumDetail.jsx et Annonce.jsx)
                <option value="">Choisir une catégorie</option>
                <option value="Événement">Événement</option>
                <option value="Stage">Stage</option>
                <option value="Projet">Projet</option>
                <option value="Important">Important</option>
                <option value="Général">Général</option>
              </select>
<<<<<<< HEAD
              <input type="text" placeholder="Auteur" value={newAnnonce.auteur} onChange={(e) => setNewAnnonce({ ...newAnnonce, auteur: e.target.value })}/>
=======

              <input
                type="text"
                placeholder="Auteur"
                value={newAnnonce.auteur}
                onChange={(event) =>
                  setNewAnnonce({
                    ...newAnnonce,
                    auteur: event.target.value,
                  })
                }
              />

>>>>>>> 8581835 (J’ai corrigé les mauvaises pratiques de code dans les fichiers Profil.jsx, Forum.jsx, ForumDetail.jsx et Annonce.jsx)
              <div className="modal-actions">
                <button type="submit" className="btn-submit">
                  Publier
                </button>
                <button type="button" className="btn-cancel" onClick={() => setShowModal(false)}>
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}