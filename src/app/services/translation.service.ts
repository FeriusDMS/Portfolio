import { Injectable, signal } from '@angular/core';

type Language = 'fr' | 'en';

interface Translations {
  [key: string]: {
    fr: string;
    en: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang = signal<Language>('fr');

  private translations: Translations = {
    // Header
    'nav.home': { fr: 'Accueil', en: 'Home' },
    'nav.about': { fr: 'À propos', en: 'About' },
    'nav.projects': { fr: 'Projets', en: 'Projects' },
    'nav.skills': { fr: 'Compétences', en: 'Skills' },
    'nav.contact': { fr: 'Contact', en: 'Contact' },
    
    // Hero
    'hero.greeting': { fr: '👋 Bonjour, je suis', en: '👋 Hello, I am' },
    'hero.title': { fr: 'Data Scientist & Développeur IA', en: 'Data Scientist & AI Developer' },
    'hero.description': { fr: "Passionné par l'Intelligence Artificielle et le Machine Learning. Étudiant à EPITECH, je transforme des données en solutions innovantes et crée des projets tech qui mélangent créativité et IA.", en: "Passionate about Artificial Intelligence and Machine Learning. EPITECH student, I transform data into innovative solutions and create tech projects that blend creativity and AI." },
    'hero.viewProjects': { fr: 'Voir mes projets', en: 'View my projects' },
    'hero.contact': { fr: 'Me contacter', en: 'Contact me' },
    
    // About
    'about.title': { fr: 'À Propos de Moi', en: 'About Me' },
    'about.subtitle': { fr: 'Étudiant & Développeur Passionné', en: 'Student & Passionate Developer' },
    'about.intro': { fr: "Salut ! 👋 Je suis Andrea, étudiant en 5ème année à EPITECH Rennes. Passionné par l'Intelligence Artificielle, le Machine Learning et le développement de jeux vidéo, j'aime créer des projets innovants qui mélangent créativité et technique. Que ce soit entraîner des modèles d'IA, créer des mods pour FFXIV ou développer des applications web, j'adore transformer des idées en réalité.", en: "Hi! 👋 I'm Andrea, a 5th year student at EPITECH Rennes. Passionate about Artificial Intelligence, Machine Learning and video game development, I love creating innovative projects that blend creativity and technology. Whether training AI models, creating mods for FFXIV or developing web applications, I love turning ideas into reality." },
    'about.journey.title': { fr: '🎓 Mon Parcours', en: '🎓 My Journey' },
    'about.journey.text': { fr: "Durant mes années à EPITECH, j'ai eu la chance de partir 1 an à l'étranger aux Pays-Bas (HZ University) pour explorer le monde de l'Intelligence Artificielle et du Deep Learning. J'ai aussi eu l'opportunité de travailler sur des projets professionnels lors de stages chez ADESIO et ARCHE MC2, où j'ai pu mettre en pratique mes compétences en développement.", en: "During my years at EPITECH, I had the chance to spend 1 year abroad in the Netherlands (HZ University) to explore the world of Artificial Intelligence and Deep Learning. I also had the opportunity to work on professional projects during internships at ADESIO and ARCHE MC2, where I was able to put my development skills into practice." },
    'about.passion.title': { fr: '💡 Ce que j\'aime faire', en: '💡 What I love to do' },
    'about.passion.text': { fr: "Je suis du genre à me lancer dans des projets variés : du Machine Learning et NLP à la création de mods pour FFXIV, en passant par le développement de jeux vidéo et d'applications web. J'aime particulièrement expérimenter avec de nouvelles technologies d'IA, analyser des données et créer des solutions innovantes. Toujours en train d'explorer de nouvelles techniques et de créer des projets passionnants !", en: "I'm the type to dive into various projects: from Machine Learning and NLP to creating mods for FFXIV, to developing video games and web applications. I particularly enjoy experimenting with new AI technologies, analyzing data and creating innovative solutions. Always exploring new techniques and creating exciting projects!" },
    'about.interests.title': { fr: '🎮 Centres d\'Intérêt', en: '🎮 Interests' },
    'about.interests.ai': { fr: 'IA & Machine Learning', en: 'AI & Machine Learning' },
    'about.interests.games': { fr: 'Jeux Vidéo & Modding', en: 'Video Games & Modding' },
    'about.interests.data': { fr: 'Data Science', en: 'Data Science' },
    'about.interests.innovation': { fr: 'Innovation Tech', en: 'Tech Innovation' },
    'about.stack.title': { fr: '🚀 Stack Technique', en: '🚀 Tech Stack' },
    'about.stats.projects': { fr: 'Projets Réalisés', en: 'Completed Projects' },
    'about.stats.technologies': { fr: 'Technologies Maîtrisées', en: 'Mastered Technologies' },
    'about.stats.experience': { fr: 'Années d\'Expérience', en: 'Years of Experience' },
    
    // Projects
    'projects.title': { fr: 'Mes Projets', en: 'My Projects' },
    'projects.subtitle': { fr: 'Découvrez mes réalisations personnelles et académiques', en: 'Discover my personal and academic achievements' },
    'projects.personal': { fr: 'Personnel', en: 'Personal' },
    'projects.academic': { fr: 'Académique', en: 'Academic' },
    'projects.viewCode': { fr: 'Voir le code', en: 'View code' },
    'projects.viewDemo': { fr: 'Démo', en: 'Demo' },
    
    // Projects Descriptions
    'projects.computerVision.title': { fr: 'Computer Vision', en: 'Computer Vision' },
    'projects.computerVision.desc': { fr: 'Projet de vision par ordinateur utilisant des techniques de Deep Learning pour la détection et reconnaissance d\'objets.', en: 'Computer vision project using Deep Learning techniques for object detection and recognition.' },
    'projects.computerVision.objective': { fr: 'Développer un système de vision par ordinateur capable de détecter et classifier des objets dans des images en temps réel en utilisant des réseaux de neurones convolutifs (CNN).', en: 'Develop a computer vision system capable of detecting and classifying objects in images in real-time using convolutional neural networks (CNN).' },
    'projects.computerVision.challenges': { fr: 'Optimisation des modèles pour une détection en temps réel, gestion de datasets volumineux, amélioration de la précision de détection dans différentes conditions d\'éclairage.', en: 'Model optimization for real-time detection, managing large datasets, improving detection accuracy under different lighting conditions.' },
    'projects.computerVision.results': { fr: 'Système capable de détecter plus de 80 classes d\'objets avec une précision de 92%, temps de traitement < 50ms par image. Implémentation de techniques comme YOLO et CNN personnalisés.', en: 'System capable of detecting over 80 object classes with 92% accuracy, processing time < 50ms per image. Implementation of techniques like YOLO and custom CNNs.' },
    'projects.computerVision.date': { fr: '2025', en: '2025' },
    'projects.hptarget.title': { fr: 'HPTarget - Mod FFXIV', en: 'HPTarget - FFXIV Mod' },
    'projects.hptarget.desc': { fr: 'Plugin Dalamud pour Final Fantasy XIV permettant d\'améliorer l\'expérience de jeu avec des fonctionnalités personnalisées de ciblage.', en: 'Dalamud plugin for Final Fantasy XIV to enhance gaming experience with custom targeting features.' },
    'projects.hptarget.objective': { fr: 'Créer un plugin pour FFXIV qui affiche les barres de vie des cibles et améliore l\'interface utilisateur pendant les combats.', en: 'Create a plugin for FFXIV that displays target health bars and improves the user interface during combat.' },
    'projects.hptarget.challenges': { fr: 'Intégration avec l\'API Dalamud, gestion de la mémoire du jeu', en: 'Integration with Dalamud API, game memory management' },
    'projects.hptarget.results': { fr: 'Plugin fonctionnel, support multi-langues. Performance optimisée avec < 1% d\'impact sur le FPS.', en: 'Functional plugin, multi-language support. Optimized performance with < 1% FPS impact.' },
    'projects.hptarget.date': { fr: '2025', en: '2025' },
    'projects.chatbot.title': { fr: 'IA ChatBot', en: 'AI ChatBot' },
    'projects.chatbot.desc': { fr: 'Chatbot intelligent utilisant des modèles de langage pour des conversations naturelles et contextuelles.', en: 'Intelligent chatbot using language models for natural and contextual conversations.' },
    'projects.chatbot.objective': { fr: 'Développer un chatbot intelligent capable de comprendre le contexte des conversations et de fournir des réponses pertinentes en utilisant des techniques de NLP avancées.', en: 'Develop an intelligent chatbot capable of understanding conversation context and providing relevant responses using advanced NLP techniques.' },
    'projects.chatbot.challenges': { fr: 'Gestion du contexte conversationnel, entraînement du modèle sur des datasets spécifiques, optimisation des temps de réponse, gestion multi-langues.', en: 'Managing conversational context, training the model on specific datasets, optimizing response times, multi-language handling.' },
    'projects.chatbot.results': { fr: 'Chatbot avec compréhension contextuelle, support FR/EN, temps de réponse < 2s, taux de satisfaction utilisateur de 85%. Implémentation de modèles transformers.', en: 'Chatbot with contextual understanding, FR/EN support, response time < 2s, 85% user satisfaction rate. Implementation of transformer models.' },
    'projects.chatbot.date': { fr: '2023', en: '2023' },
    'projects.area.title': { fr: 'Application Web & Mobile - Services', en: 'Web & Mobile App - Services' },
    'projects.area.desc': { fr: 'Application complète offrant des connexions à divers services (Spotify, Discord, Google) avec système d\'actions/réactions automatisées.', en: 'Complete application offering connections to various services (Spotify, Discord, Google) with automated actions/reactions system.' },
    'projects.area.objective': { fr: 'Créer une plateforme type IFTTT permettant d\'automatiser des actions entre différents services web. Connexion à Spotify, Discord, Google Calendar et autres APIs.', en: 'Create an IFTTT-like platform to automate actions between different web services. Connection to Spotify, Discord, Google Calendar and other APIs.' },
    'projects.area.challenges': { fr: 'Intégration OAuth multiple, gestion des webhooks en temps réel, architecture microservices, synchronisation des états entre services, sécurité des données utilisateur.', en: 'Multiple OAuth integration, real-time webhook management, microservices architecture, state synchronization between services, user data security.' },
    'projects.area.results': { fr: 'Application full-stack avec 15+ services intégrés, API RESTful documentée, interface web React et mobile React Native. Support de 50+ automatisations personnalisables.', en: 'Full-stack application with 15+ integrated services, documented RESTful API, React web and React Native mobile interface. Support for 50+ customizable automations.' },
    'projects.area.date': { fr: '2022', en: '2022' },
    'projects.myrpg.title': { fr: 'My_RPG', en: 'My_RPG' },
    'projects.myrpg.desc': { fr: 'Jeu vidéo de type RPG avec système de combat, quêtes et progression du personnage.', en: 'RPG video game with combat system, quests and character progression.' },
    'projects.myrpg.objective': { fr: 'Développer un jeu RPG complet en C avec la librairie CSFML incluant combats, inventaire, quêtes et une carte explorable.', en: 'Develop a complete RPG game in C with CSFML library including combat, inventory, quests and an explorable map.' },
    'projects.myrpg.challenges': { fr: 'Gestion mémoire en C, système de collision, animation fluide 60 FPS, sauvegarde/chargement, équilibrage du gameplay, design de niveaux.', en: 'Memory management in C, collision system, smooth 60 FPS animation, save/load system, gameplay balancing, level design.' },
    'projects.myrpg.results': { fr: 'Jeu complet avec 5 zones explorables, 20+ ennemis différents, système de combat tour par tour, inventaire et équipement, sauvegarde JSON. Performance stable à 60 FPS.', en: 'Complete game with 5 explorable zones, 20+ different enemies, turn-based combat system, inventory and equipment, JSON save system. Stable performance at 60 FPS.' },
    'projects.myrpg.date': { fr: '2021', en: '2021' },
    'projects.rtype.title': { fr: 'R-Type', en: 'R-Type' },
    'projects.rtype.desc': { fr: 'Recréation du jeu d\'arcade R-Type (type Space Invaders) jouable en réseau multi-plateforme.', en: 'Recreation of the R-Type arcade game (Space Invaders style) playable in multi-platform network.' },
    'projects.rtype.objective': { fr: 'Recréer le jeu classique R-Type en C++ avec support multijoueur en réseau utilisant une architecture client-serveur robuste et un moteur de jeu ECS (Entity Component System).', en: 'Recreate the classic R-Type game in C++ with network multiplayer support using robust client-server architecture and an ECS (Entity Component System) game engine.' },
    'projects.rtype.challenges': { fr: 'Programmation réseau UDP, synchronisation des états de jeu, gestion de la latence, architecture ECS, compilation multi-plateforme (Windows/Linux), gestion des collisions.', en: 'UDP network programming, game state synchronization, latency management, ECS architecture, cross-platform compilation (Windows/Linux), collision handling.' },
    'projects.rtype.results': { fr: 'Jeu multijoueur fonctionnel jusqu\'à 4 joueurs, latence < 50ms, architecture ECS performante, 15+ types d\'ennemis, 3 niveaux complets, système de power-ups.', en: 'Functional multiplayer game up to 4 players, latency < 50ms, performant ECS architecture, 15+ enemy types, 3 complete levels, power-up system.' },
    'projects.rtype.date': { fr: '2023', en: '2023' },
    'projects.legacy.title': { fr: 'Legacy Project', en: 'Legacy Project' },
    'projects.legacy.desc': { fr: 'AWKWARD LEGACY - Suite logicielle restaurée, initialement développée entre 1995 et 2008 en OCaml, modernisée avec Python et Angular. Outil de recherche généalogique.', en: 'AWKWARD LEGACY - Restored software suite, initially developed between 1995 and 2008 in OCaml, modernized with Python and Angular. Genealogical research tool.' },
    'projects.legacy.objective': { fr: 'Restaurer et moderniser un logiciel de généalogie développé en OCaml il y a 20+ ans, en migrant vers une architecture moderne Python/Angular tout en préservant les fonctionnalités originales.', en: 'Restore and modernize a genealogy software developed in OCaml 20+ years ago, migrating to a modern Python/Angular architecture while preserving original functionalities.' },
    'projects.legacy.challenges': { fr: 'Rétro-ingénierie du code OCaml legacy, migration de base de données, refonte complète de l\'interface, maintien de la compatibilité des données, documentation d\'un code ancien.', en: 'Reverse engineering legacy OCaml code, database migration, complete interface overhaul, maintaining data compatibility, documenting old code.' },
    'projects.legacy.results': { fr: 'Application web moderne avec backend Python FastAPI, frontend Angular, migration complète de 10000+ entrées généalogiques, interface responsive, export PDF/GEDCOM.', en: 'Modern web application with Python FastAPI backend, Angular frontend, complete migration of 10000+ genealogical entries, responsive interface, PDF/GEDCOM export.' },
    'projects.legacy.date': { fr: '2025', en: '2025' },
    'projects.gomoku.title': { fr: 'Gomoku IA', en: 'Gomoku AI' },
    'projects.gomoku.desc': { fr: 'Intelligence artificielle pour le jeu Gomoku utilisant des algorithmes de recherche et d\'apprentissage automatique.', en: 'Artificial intelligence for the Gomoku game using search algorithms and machine learning.' },
    'projects.gomoku.objective': { fr: 'Développer une IA compétitive pour le jeu Gomoku en utilisant des algorithmes avancés comme Minimax avec élagage Alpha-Beta, réseaux de neurones et Monte Carlo Tree Search.', en: 'Develop a competitive AI for Gomoku game using advanced algorithms like Minimax with Alpha-Beta pruning, neural networks and Monte Carlo Tree Search.' },
    'projects.gomoku.challenges': { fr: 'Optimisation de l\'évaluation de position, élagage efficace de l\'arbre de recherche, équilibrage exploration/exploitation, temps de calcul limité, détection de patterns gagnants.', en: 'Position evaluation optimization, efficient search tree pruning, exploration/exploitation balance, limited computation time, winning pattern detection.' },
    'projects.gomoku.results': { fr: 'IA capable de battre des joueurs avancés, temps de décision < 5s, implémentation de 3 algorithmes différents (Minimax, MCTS, Neural Network), taux de victoire 75% contre IA standards.', en: 'AI capable of beating advanced players, decision time < 5s, implementation of 3 different algorithms (Minimax, MCTS, Neural Network), 75% win rate against standard AIs.' },
    'projects.gomoku.date': { fr: '2023', en: '2023' },
    'projects.zappy.title': { fr: 'Zappy', en: 'Zappy' },
    'projects.zappy.desc': { fr: 'Création d\'une civilisation devant survivre et évoluer. Projet de simulation multi-agents avec IA.', en: 'Creation of a civilization that must survive and evolve. Multi-agent simulation project with AI.' },
    'projects.zappy.objective': { fr: 'Créer une simulation multi-agents où des équipes d\'IA doivent collecter des ressources, communiquer et évoluer pour atteindre le niveau maximum. Architecture client-serveur avec visualisation graphique.', en: 'Create a multi-agent simulation where AI teams must collect resources, communicate and evolve to reach maximum level. Client-server architecture with graphical visualization.' },
    'projects.zappy.challenges': { fr: 'Communication réseau entre serveur et multiples clients IA, protocole de communication custom, gestion de la concurrence, stratégies d\'IA pour la survie et collaboration, interface graphique 3D temps réel.', en: 'Network communication between server and multiple AI clients, custom communication protocol, concurrency management, AI strategies for survival and collaboration, real-time 3D graphical interface.' },
    'projects.zappy.results': { fr: 'Serveur C gérant 50+ clients simultanés, 4 clients IA avec stratégies différentes, interface graphique 3D avec SFML, protocole réseau robuste, système de communication inter-agents.', en: 'C server handling 50+ simultaneous clients, 4 AI clients with different strategies, 3D graphical interface with SFML, robust network protocol, inter-agent communication system.' },
    'projects.zappy.date': { fr: '2023', en: '2023' },
    
    // Project Detail
    'projectDetail.about': { fr: 'À propos du projet', en: 'About the project' },
    'projectDetail.objective': { fr: 'Objectif', en: 'Objective' },
    'projectDetail.challenges': { fr: 'Défis techniques', en: 'Technical challenges' },
    'projectDetail.results': { fr: 'Résultats', en: 'Results' },
    'projectDetail.technologies': { fr: 'Technologies utilisées', en: 'Technologies used' },
    'projectDetail.repository': { fr: 'Dépôt GitHub', en: 'GitHub Repository' },
    'projectDetail.date': { fr: 'Date', en: 'Date' },
    'projectDetail.backToProjects': { fr: 'Retour aux projets', en: 'Back to projects' },
    
    // Skills
    'skills.title': { fr: 'Compétences Techniques', en: 'Technical Skills' },
    'skills.subtitle': { fr: 'Technologies et outils que j\'utilise au quotidien', en: 'Technologies and tools I use daily' },
    
    // Contact
    'contact.title': { fr: 'Contactez-moi', en: 'Contact Me' },
    'contact.subtitle': { fr: 'Une question ? Un projet ? N\'hésitez pas à me contacter', en: 'A question? A project? Feel free to contact me' },
    'contact.name': { fr: 'Nom', en: 'Name' },
    'contact.email': { fr: 'Email', en: 'Email' },
    'contact.subject': { fr: 'Sujet', en: 'Subject' },
    'contact.message': { fr: 'Message', en: 'Message' },
    'contact.send': { fr: 'Envoyer', en: 'Send' },
    'contact.sending': { fr: 'Envoi...', en: 'Sending...' },
    'contact.sent': { fr: 'Message envoyé !', en: 'Message sent!' },
    'contact.error': { fr: 'Erreur d\'envoi', en: 'Sending error' },
    'contact.social': { fr: 'Réseaux Sociaux', en: 'Social Networks' },
    
    // Footer
    'footer.description': { fr: 'Data Scientist & Développeur passionné par l\'IA, le Machine Learning et la création de projets innovants.', en: 'Data Scientist & Developer passionate about AI, Machine Learning and creating innovative projects.' },
    'footer.navigation': { fr: 'Navigation', en: 'Navigation' },
    'footer.social': { fr: 'Social', en: 'Social' },
    'footer.rights': { fr: 'Tous droits réservés', en: 'All rights reserved' },
  };

  translate(key: string): string {
    const translation = this.translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[this.currentLang()];
  }

  setLanguage(lang: Language) {
    this.currentLang.set(lang);
    localStorage.setItem('preferred-language', lang);
  }

  constructor() {
    const saved = localStorage.getItem('preferred-language') as Language;
    if (saved === 'fr' || saved === 'en') {
      this.currentLang.set(saved);
    }
  }
}
