import { Injectable, signal } from '@angular/core';

type Language = 'fr' | 'en';

interface Translations {
  [key: string]: {
    fr: string;
    en: string;
  };
}

@Injectable({
  providedIn: 'root',
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
    'nav.share': { fr: 'Partager', en: 'Share' },
    'nav.linkCopied': { fr: 'Lien copié !', en: 'Link copied!' },
    'nav.discord': { fr: 'Discord', en: 'Discord' },
    'nav.patchNotes': { fr: 'Patch Notes', en: 'Patch Notes' },

    // Patch Notes
    'patchNotes.title': { fr: 'Patch Notes', en: 'Patch Notes' },
    'patchNotes.subtitle': { fr: 'Résumé du dernier push sur main, affiché directement sur le site.', en: 'Summary of the latest push to main, displayed directly on the site.' },
    'patchNotes.currentVersion': { fr: 'Dernière version', en: 'Latest version' },
    'patchNotes.version': { fr: 'Version', en: 'Version' },
    'patchNotes.whatChanged': { fr: 'Ce qui a changé', en: 'What changed' },
    'patchNotes.commits': { fr: 'Commits inclus', en: 'Included commits' },
    'patchNotes.highlights': { fr: 'points clés', en: 'highlights' },

    // Share Modal
    'share.title': { fr: 'Partager mon portfolio', en: 'Share my portfolio' },
    'share.subtitle': {
      fr: 'Choisissez votre plateforme préférée',
      en: 'Choose your preferred platform',
    },
    'share.copyLink': { fr: 'Copier le lien', en: 'Copy link' },

    // Hero
    'hero.greeting': { fr: '👋 Bonjour, je suis', en: '👋 Hello, I am' },
    'hero.title': { fr: 'Data Scientist & Développeur IA', en: 'Data Scientist & AI Developer' },
    'hero.description': {
      fr: "Passionné par l'Intelligence Artificielle et le Machine Learning. Étudiant à EPITECH, je transforme des données en solutions innovantes et crée des projets tech qui mélangent créativité et IA.",
      en: 'Passionate about Artificial Intelligence and Machine Learning. EPITECH student, I transform data into innovative solutions and create tech projects that blend creativity and AI.',
    },
    'hero.viewProjects': { fr: 'Voir mes projets', en: 'View my projects' },
    'hero.contact': { fr: 'Me contacter', en: 'Contact me' },

    // About
    'about.title': { fr: 'À Propos de Moi', en: 'About Me' },
    'about.subtitle': {
      fr: 'Étudiant & Développeur Passionné',
      en: 'Student & Passionate Developer',
    },
    'about.intro': {
      fr: "Salut ! 👋 Je suis Andrea, étudiant en 5ème année à EPITECH Rennes. Passionné par l'Intelligence Artificielle, le Machine Learning et le développement de jeux vidéos, j'aime créer des projets innovants qui mélangent créativité et technique. Que ce soit entraîner des modèles d'IA, créer des mods pour FFXIV ou développer des applications web, j'adore transformer des idées en réalité.",
      en: "Hi! 👋 I'm Andrea, a 5th year student at EPITECH Rennes. Passionate about Artificial Intelligence, Machine Learning and video game development, I love creating innovative projects that blend creativity and technology. Whether training AI models, creating mods for FFXIV or developing web applications, I love turning ideas into reality.",
    },
    'about.journey.title': { fr: '🎓 Mon Parcours', en: '🎓 My Journey' },
    'about.journey.text': {
      fr: "Durant mes années à EPITECH, j'ai eu la chance de partir 1 an à l'étranger aux Pays-Bas (HZ University) pour explorer le monde de l'Intelligence Artificielle et du Deep Learning. J'ai aussi eu l'opportunité de travailler sur des projets professionnels lors de stages chez ADESIO et ARCHE MC2, où j'ai pu mettre en pratique mes compétences en développement.",
      en: 'During my years at EPITECH, I had the chance to spend 1 year abroad in the Netherlands (HZ University) to explore the world of Artificial Intelligence and Deep Learning. I also had the opportunity to work on professional projects during internships at ADESIO and ARCHE MC2, where I was able to put my development skills into practice.',
    },
    'about.journey.part1': { fr: 'Durant mes années à ', en: 'During my years at ' },
    'about.journey.part2': {
      fr: ", j'ai eu la chance de partir 1 an à l'étranger aux Pays-Bas (",
      en: ', I had the chance to spend 1 year abroad in the Netherlands (',
    },
    'about.journey.part3': {
      fr: ") pour explorer le monde de l'Intelligence Artificielle et du Deep Learning. J'ai aussi eu l'opportunité de travailler sur des projets professionnels lors de stages chez ",
      en: ') to explore the world of Artificial Intelligence and Deep Learning. I also had the opportunity to work on professional projects during internships at ',
    },
    'about.journey.part4': { fr: ' et ', en: ' and ' },
    'about.journey.part5': {
      fr: ", où j'ai pu mettre en pratique mes compétences en développement.",
      en: ', where I was able to put my development skills into practice.',
    },
    'about.journey.epitech': { fr: 'EPITECH', en: 'EPITECH' },
    'about.journey.hz': {
      fr: 'HZ University Of Applied Sciences',
      en: 'HZ University Of Applied Sciences',
    },
    'about.journey.adesio': { fr: 'ADESIO', en: 'ADESIO' },
    'about.journey.arche': { fr: 'ARCHE MC2', en: 'ARCHE MC2' },
    'about.passion.title': { fr: "💡 Ce que j'aime faire", en: '💡 What I love to do' },
    'about.passion.text': {
      fr: "Je suis du genre à me lancer dans des projets variés : du Machine Learning et NLP à la création de mods pour FFXIV, en passant par le développement de jeux vidéo et d'applications web. J'aime particulièrement expérimenter avec de nouvelles technologies d'IA, analyser des données et créer des solutions innovantes. Toujours en train d'explorer de nouvelles techniques et de créer des projets passionnants !",
      en: "I'm the type to dive into various projects: from Machine Learning and NLP to creating mods for FFXIV, to developing video games and web applications. I particularly enjoy experimenting with new AI technologies, analyzing data and creating innovative solutions. Always exploring new techniques and creating exciting projects!",
    },
    'about.interests.title': { fr: "🎮 Centres d'Intérêt", en: '🎮 Interests' },
    'about.interests.ai': { fr: 'IA & Machine Learning', en: 'AI & Machine Learning' },
    'about.interests.games': { fr: 'Jeux Vidéo & Modding', en: 'Video Games & Modding' },
    'about.interests.data': { fr: 'Data Science', en: 'Data Science' },
    'about.interests.innovation': { fr: 'Innovation Tech', en: 'Tech Innovation' },
    'about.stack.title': { fr: '🚀 Stack Technique', en: '🚀 Tech Stack' },
    'about.stats.projects': { fr: 'Projets Réalisés', en: 'Completed Projects' },
    'about.stats.technologies': { fr: 'Technologies Maîtrisées', en: 'Mastered Technologies' },
    'about.stats.experience': { fr: "Années d'Expérience", en: 'Years of Experience' },

    // Projects
    'projects.title': { fr: 'Mes Projets', en: 'My Projects' },
    'projects.subtitle': {
      fr: 'Découvrez mes réalisations personnelles et académiques',
      en: 'Discover my personal and academic achievements',
    },
    'projects.personal': { fr: 'Personnel', en: 'Personal' },
    'projects.academic': { fr: 'Académique', en: 'Academic' },
    'projects.viewCode': { fr: 'Voir le code', en: 'View code' },
    'projects.viewDemo': { fr: 'Démo', en: 'Demo' },

    // Projects Descriptions
    'projects.computerVision.title': { fr: 'Computer Vision', en: 'Computer Vision' },
    'projects.computerVision.desc': {
      fr: "Projet de vision par ordinateur utilisant des techniques de Deep Learning pour la détection et reconnaissance d'objets.",
      en: 'Computer vision project using Deep Learning techniques for object detection and recognition.',
    },
    'projects.computerVision.objective': {
      fr: 'Développer un système de vision par ordinateur capable de détecter et classifier des objets dans des images en temps réel en utilisant des réseaux de neurones convolutifs (CNN).',
      en: 'Develop a computer vision system capable of detecting and classifying objects in images in real-time using convolutional neural networks (CNN).',
    },
    'projects.computerVision.challenges': {
      fr: "Optimisation des modèles pour une détection en temps réel, gestion de datasets volumineux, amélioration de la précision de détection dans différentes conditions d'éclairage.",
      en: 'Model optimization for real-time detection, managing large datasets, improving detection accuracy under different lighting conditions.',
    },
    'projects.computerVision.results': {
      fr: "Système capable de détecter plus de 80 classes d'objets avec une précision de 92%, temps de traitement < 50ms par image. Implémentation de techniques comme YOLO et CNN personnalisés.",
      en: 'System capable of detecting over 80 object classes with 92% accuracy, processing time < 50ms per image. Implementation of techniques like YOLO and custom CNNs.',
    },
    'projects.computerVision.date': { fr: '2025', en: '2025' },
    'projects.hptarget.title': { fr: 'HPTarget - Mod FFXIV', en: 'HPTarget - FFXIV Mod' },
    'projects.hptarget.desc': {
      fr: "Plugin Dalamud pour Final Fantasy XIV permettant d'améliorer l'expérience de jeu avec des fonctionnalités personnalisées de ciblage.",
      en: 'Dalamud plugin for Final Fantasy XIV to enhance gaming experience with custom targeting features.',
    },
    'projects.hptarget.objective': {
      fr: "Créer un plugin pour FFXIV qui affiche les barres de vie des cibles et améliore l'interface utilisateur pendant les combats.",
      en: 'Create a plugin for FFXIV that displays target health bars and improves the user interface during combat.',
    },
    'projects.hptarget.challenges': {
      fr: "Intégration avec l'API Dalamud, gestion de la mémoire du jeu",
      en: 'Integration with Dalamud API, game memory management',
    },
    'projects.hptarget.results': {
      fr: "Plugin fonctionnel, support multi-langues. Performance optimisée avec < 1% d'impact sur le FPS.",
      en: 'Functional plugin, multi-language support. Optimized performance with < 1% FPS impact.',
    },
    'projects.hptarget.date': { fr: '2025', en: '2025' },
    'projects.chatbot.title': { fr: 'IA ChatBot', en: 'AI ChatBot' },
    'projects.chatbot.desc': {
      fr: 'Chatbot intelligent utilisant des modèles de langage pour des conversations naturelles et contextuelles.',
      en: 'Intelligent chatbot using language models for natural and contextual conversations.',
    },
    'projects.chatbot.objective': {
      fr: 'Développer un chatbot intelligent capable de comprendre le contexte des conversations et de fournir des réponses pertinentes en utilisant des techniques de NLP avancées.',
      en: 'Develop an intelligent chatbot capable of understanding conversation context and providing relevant responses using advanced NLP techniques.',
    },
    'projects.chatbot.challenges': {
      fr: 'Gestion du contexte conversationnel, entraînement du modèle sur des datasets spécifiques, optimisation des temps de réponse, gestion multi-langues.',
      en: 'Managing conversational context, training the model on specific datasets, optimizing response times, multi-language handling.',
    },
    'projects.chatbot.results': {
      fr: 'Chatbot avec compréhension contextuelle, support FR/EN, temps de réponse < 2s, taux de satisfaction utilisateur de 85%. Implémentation de modèles transformers.',
      en: 'Chatbot with contextual understanding, FR/EN support, response time < 2s, 85% user satisfaction rate. Implementation of transformer models.',
    },
    'projects.chatbot.date': { fr: '2023', en: '2023' },
    'projects.area.title': {
      fr: 'Application Web & Mobile - Services',
      en: 'Web & Mobile App - Services',
    },
    'projects.area.desc': {
      fr: "Application complète offrant des connexions à divers services (Spotify, Discord, Google) avec système d'actions/réactions automatisées.",
      en: 'Complete application offering connections to various services (Spotify, Discord, Google) with automated actions/reactions system.',
    },
    'projects.area.objective': {
      fr: "Créer une plateforme type IFTTT permettant d'automatiser des actions entre différents services web. Connexion à Spotify, Discord, Google Calendar et autres APIs.",
      en: 'Create an IFTTT-like platform to automate actions between different web services. Connection to Spotify, Discord, Google Calendar and other APIs.',
    },
    'projects.area.challenges': {
      fr: 'Intégration OAuth multiple, gestion des webhooks en temps réel, architecture microservices, synchronisation des états entre services, sécurité des données utilisateur.',
      en: 'Multiple OAuth integration, real-time webhook management, microservices architecture, state synchronization between services, user data security.',
    },
    'projects.area.results': {
      fr: 'Application full-stack avec 15+ services intégrés, API RESTful documentée, interface web React et mobile React Native. Support de 50+ automatisations personnalisables.',
      en: 'Full-stack application with 15+ integrated services, documented RESTful API, React web and React Native mobile interface. Support for 50+ customizable automations.',
    },
    'projects.area.date': { fr: '2022', en: '2022' },
    'projects.myrpg.title': { fr: 'My_RPG', en: 'My_RPG' },
    'projects.myrpg.desc': {
      fr: 'Jeu vidéo de type RPG avec système de combat, quêtes et progression du personnage.',
      en: 'RPG video game with combat system, quests and character progression.',
    },
    'projects.myrpg.objective': {
      fr: 'Développer un jeu RPG complet en C avec la librairie CSFML incluant combats, inventaire, quêtes et une carte explorable.',
      en: 'Develop a complete RPG game in C with CSFML library including combat, inventory, quests and an explorable map.',
    },
    'projects.myrpg.challenges': {
      fr: 'Gestion mémoire en C, système de collision, animation fluide 60 FPS, sauvegarde/chargement, équilibrage du gameplay, design de niveaux.',
      en: 'Memory management in C, collision system, smooth 60 FPS animation, save/load system, gameplay balancing, level design.',
    },
    'projects.myrpg.results': {
      fr: 'Jeu complet avec 5 zones explorables, 20+ ennemis différents, système de combat tour par tour, inventaire et équipement, sauvegarde JSON. Performance stable à 60 FPS.',
      en: 'Complete game with 5 explorable zones, 20+ different enemies, turn-based combat system, inventory and equipment, JSON save system. Stable performance at 60 FPS.',
    },
    'projects.myrpg.date': { fr: '2021', en: '2021' },
    'projects.rtype.title': { fr: 'R-Type', en: 'R-Type' },
    'projects.rtype.desc': {
      fr: "Recréation du jeu d'arcade R-Type (type Space Invaders) jouable en réseau multi-plateforme.",
      en: 'Recreation of the R-Type arcade game (Space Invaders style) playable in multi-platform network.',
    },
    'projects.rtype.objective': {
      fr: 'Recréer le jeu classique R-Type en C++ avec support multijoueur en réseau utilisant une architecture client-serveur robuste et un moteur de jeu ECS (Entity Component System).',
      en: 'Recreate the classic R-Type game in C++ with network multiplayer support using robust client-server architecture and an ECS (Entity Component System) game engine.',
    },
    'projects.rtype.challenges': {
      fr: 'Programmation réseau UDP, synchronisation des états de jeu, gestion de la latence, architecture ECS, compilation multi-plateforme (Windows/Linux), gestion des collisions.',
      en: 'UDP network programming, game state synchronization, latency management, ECS architecture, cross-platform compilation (Windows/Linux), collision handling.',
    },
    'projects.rtype.results': {
      fr: "Jeu multijoueur fonctionnel jusqu'à 4 joueurs, latence < 50ms, architecture ECS performante, 15+ types d'ennemis, 3 niveaux complets, système de power-ups.",
      en: 'Functional multiplayer game up to 4 players, latency < 50ms, performant ECS architecture, 15+ enemy types, 3 complete levels, power-up system.',
    },
    'projects.rtype.date': { fr: '2023', en: '2023' },
    'projects.legacy.title': { fr: 'Legacy Project', en: 'Legacy Project' },
    'projects.legacy.desc': {
      fr: 'AWKWARD LEGACY - Suite logicielle restaurée, initialement développée entre 1995 et 2008 en OCaml, modernisée avec Python et Angular. Outil de recherche généalogique.',
      en: 'AWKWARD LEGACY - Restored software suite, initially developed between 1995 and 2008 in OCaml, modernized with Python and Angular. Genealogical research tool.',
    },
    'projects.legacy.objective': {
      fr: 'Restaurer et moderniser un logiciel de généalogie développé en OCaml il y a 20+ ans, en migrant vers une architecture moderne Python/Angular tout en préservant les fonctionnalités originales.',
      en: 'Restore and modernize a genealogy software developed in OCaml 20+ years ago, migrating to a modern Python/Angular architecture while preserving original functionalities.',
    },
    'projects.legacy.challenges': {
      fr: "Rétro-ingénierie du code OCaml legacy, migration de base de données, refonte complète de l'interface, maintien de la compatibilité des données, documentation d'un code ancien.",
      en: 'Reverse engineering legacy OCaml code, database migration, complete interface overhaul, maintaining data compatibility, documenting old code.',
    },
    'projects.legacy.results': {
      fr: 'Application web moderne avec backend Python FastAPI, frontend Angular, migration complète de 10000+ entrées généalogiques, interface responsive, export PDF/GEDCOM.',
      en: 'Modern web application with Python FastAPI backend, Angular frontend, complete migration of 10000+ genealogical entries, responsive interface, PDF/GEDCOM export.',
    },
    'projects.legacy.date': { fr: '2025', en: '2025' },
    'projects.gomoku.title': { fr: 'Gomoku IA', en: 'Gomoku AI' },
    'projects.gomoku.desc': {
      fr: "Intelligence artificielle pour le jeu Gomoku utilisant des algorithmes de recherche et d'apprentissage automatique.",
      en: 'Artificial intelligence for the Gomoku game using search algorithms and machine learning.',
    },
    'projects.gomoku.objective': {
      fr: 'Développer une IA compétitive pour le jeu Gomoku en utilisant des algorithmes avancés comme Minimax avec élagage Alpha-Beta, réseaux de neurones et Monte Carlo Tree Search.',
      en: 'Develop a competitive AI for Gomoku game using advanced algorithms like Minimax with Alpha-Beta pruning, neural networks and Monte Carlo Tree Search.',
    },
    'projects.gomoku.challenges': {
      fr: "Optimisation de l'évaluation de position, élagage efficace de l'arbre de recherche, équilibrage exploration/exploitation, temps de calcul limité, détection de patterns gagnants.",
      en: 'Position evaluation optimization, efficient search tree pruning, exploration/exploitation balance, limited computation time, winning pattern detection.',
    },
    'projects.gomoku.results': {
      fr: 'IA capable de battre des joueurs avancés, temps de décision < 5s, implémentation de 3 algorithmes différents (Minimax, MCTS, Neural Network), taux de victoire 75% contre IA standards.',
      en: 'AI capable of beating advanced players, decision time < 5s, implementation of 3 different algorithms (Minimax, MCTS, Neural Network), 75% win rate against standard AIs.',
    },
    'projects.gomoku.date': { fr: '2023', en: '2023' },
    'projects.zappy.title': { fr: 'Zappy', en: 'Zappy' },
    'projects.zappy.desc': {
      fr: "Création d'une civilisation devant survivre et évoluer. Projet de simulation multi-agents avec IA.",
      en: 'Creation of a civilization that must survive and evolve. Multi-agent simulation project with AI.',
    },
    'projects.zappy.objective': {
      fr: "Créer une simulation multi-agents où des équipes d'IA doivent collecter des ressources, communiquer et évoluer pour atteindre le niveau maximum. Architecture client-serveur avec visualisation graphique.",
      en: 'Create a multi-agent simulation where AI teams must collect resources, communicate and evolve to reach maximum level. Client-server architecture with graphical visualization.',
    },
    'projects.zappy.challenges': {
      fr: "Communication réseau entre serveur et multiples clients IA, protocole de communication custom, gestion de la concurrence, stratégies d'IA pour la survie et collaboration, interface graphique 3D temps réel.",
      en: 'Network communication between server and multiple AI clients, custom communication protocol, concurrency management, AI strategies for survival and collaboration, real-time 3D graphical interface.',
    },
    'projects.zappy.results': {
      fr: 'Serveur C gérant 50+ clients simultanés, 4 clients IA avec stratégies différentes, interface graphique 3D avec SFML, protocole réseau robuste, système de communication inter-agents.',
      en: 'C server handling 50+ simultaneous clients, 4 AI clients with different strategies, 3D graphical interface with SFML, robust network protocol, inter-agent communication system.',
    },
    'projects.zappy.date': { fr: '2023', en: '2023' },
    'projects.blockchain.title': { fr: 'LuxeWatch Token - Blockchain', en: 'LuxeWatch Token - Blockchain' },
    'projects.blockchain.desc': {
      fr: 'Plateforme blockchain pour la tokenisation de montres de luxe en tant que RWA (Real-World Assets). Tokens fongibles ERC-20 et NFTs ERC-721 avec conformité KYC.',
      en: 'Blockchain platform for tokenizing luxury watches as RWAs (Real-World Assets). Fungible ERC-20 tokens and ERC-721 NFTs with KYC compliance.',
    },
    'projects.blockchain.objective': {
      fr: 'Développer une plateforme complète de tokenisation de montres de luxe utilisant Ethereum et Solidity, avec tokens ERC-20 pour la propriété fractionnée et NFTs ERC-721 pour les pièces uniques. Intégration Uniswap V3 pour le trading, système KYC on-chain, backend indexeur et frontend Next.js.',
      en: 'Develop a comprehensive luxury watch tokenization platform using Ethereum and Solidity, with ERC-20 tokens for fractional ownership and ERC-721 NFTs for unique pieces. Uniswap V3 integration for trading, on-chain KYC system, indexer backend and Next.js frontend.',
    },
    'projects.blockchain.challenges': {
      fr: 'Implémentation de smart contracts sécurisés (ERC-20, ERC-721), système KYC/whitelist/blacklist on-chain, intégration Uniswap V3 avec pools de liquidité, création d\'un indexeur temps réel pour les événements blockchain, architecture full-stack complexe (Hardhat, Next.js, PostgreSQL).',
      en: 'Implementation of secure smart contracts (ERC-20, ERC-721), on-chain KYC/whitelist/blacklist system, Uniswap V3 integration with liquidity pools, creation of real-time indexer for blockchain events, complex full-stack architecture (Hardhat, Next.js, PostgreSQL).',
    },
    'projects.blockchain.results': {
      fr: 'Plateforme complète avec smart contracts déployés sur Sepolia testnet, système de tokens WATCH avec 1M de supply, NFTs avec métadonnées riches (marque, modèle, évaluation), pools Uniswap V3 WATCH/USDC et WATCH/WETH, backend avec indexation événements (<1min de latence), oracle de prix pour évaluations, frontend responsive avec connexion wallet.',
      en: 'Complete platform with smart contracts deployed on Sepolia testnet, WATCH token system with 1M supply, NFTs with rich metadata (brand, model, valuation), Uniswap V3 pools WATCH/USDC and WATCH/WETH, backend with event indexing (<1min latency), price oracle for valuations, responsive frontend with wallet connection.',
    },
    'projects.blockchain.date': { fr: '2026', en: '2026' },
    'projects.abandoned': { fr: '⚠️ Abandonné', en: '⚠️ Abandoned' },

    // Project Detail
    'projectDetail.about': { fr: 'À propos du projet', en: 'About the project' },
    'projectDetail.objective': { fr: 'Objectif', en: 'Objective' },
    'projectDetail.challenges': { fr: 'Défis techniques', en: 'Technical challenges' },
    'projectDetail.results': { fr: 'Résultats', en: 'Results' },
    'projectDetail.technologies': { fr: 'Technologies utilisées', en: 'Technologies used' },
    'projectDetail.repository': { fr: 'Dépôt GitHub', en: 'GitHub Repository' },
    'projectDetail.date': { fr: 'Date', en: 'Date' },
    'projectDetail.backToProjects': { fr: 'Retour aux projets', en: 'Back to projects' },
    'projectDetail.demo': { fr: 'Démonstration', en: 'Demo' },
    'projectDetail.videoNotSupported': {
      fr: 'Votre navigateur ne supporte pas la lecture de vidéos.',
      en: 'Your browser does not support video playback.',
    },

    // About Detail
    'aboutDetail.title': { fr: 'À propos de moi', en: 'About me' },
    'aboutDetail.whoAmI': { fr: 'Qui suis-je ?', en: 'Who am I?' },
    'aboutDetail.intro': {
      fr: "Je suis Andrea Mancion, étudiant passionné en Data Science et IA à EPITECH. Fasciné par le potentiel de l'intelligence artificielle et du machine learning, je développe des projets innovants qui combinent créativité et technologie.",
      en: 'I am Andrea Mancion, a passionate Data Science and AI student at EPITECH. Fascinated by the potential of artificial intelligence and machine learning, I develop innovative projects that combine creativity and technology.',
    },
    'aboutDetail.personalInfo': {
      fr: "J'ai 23 ans, né le 19 janvier 2003 à Brest, en Bretagne. Passionné par l'intelligence artificielle depuis mon adolescence, j'ai transformé cette passion en parcours académique et professionnel.",
      en: 'I am 23 years old, born on January 19, 2003 in Brest, Brittany. Passionate about artificial intelligence since my adolescence, I have transformed this passion into an academic and professional path.',
    },
    'aboutDetail.passion': { fr: 'Ma Passion', en: 'My Passion' },
    'aboutDetail.passionText': {
      fr: "L'IA et le Machine Learning sont au cœur de mes préoccupations. Je m'efforce constamment d'approfondir mes connaissances en Deep Learning, Computer Vision et NLP. Chaque projet est pour moi une opportunité d'explorer de nouvelles techniques et de repousser les limites du possible.",
      en: "AI and Machine Learning are at the heart of my concerns. I constantly strive to deepen my knowledge in Deep Learning, Computer Vision and NLP. Each project is an opportunity for me to explore new techniques and push the boundaries of what's possible.",
    },
    'aboutDetail.passionDetail': {
      fr: "Ce qui me fascine le plus dans l'intelligence artificielle, c'est la possibilité de créer des solutions innovantes qui ont un impact réel sur la vie des utilisateurs. Chaque projet est une opportunité d'apprendre et de repousser les limites de ce qui est possible avec les technologies d'IA.",
      en: "What fascinates me most about artificial intelligence is the ability to create innovative solutions that have a real impact on users' lives. Each project is an opportunity to learn and push the boundaries of what is possible with AI technologies.",
    },
    'aboutDetail.experience': { fr: 'Expérience Professionnelle', en: 'Professional Experience' },
    'aboutDetail.experienceText': {
      fr: "J'ai eu l'opportunité de travailler sur des projets variés allant du développement web à l'intelligence artificielle. Mes expériences chez ADESIO et ARCHE MC2 m'ont permis de développer mes compétences techniques et ma capacité à travailler en équipe sur des projets complexes.",
      en: 'I had the opportunity to work on various projects ranging from web development to artificial intelligence. My experiences at ADESIO and ARCHE MC2 allowed me to develop my technical skills and my ability to work in a team on complex projects.',
    },
    'aboutDetail.experienceDetail': {
      fr: "Au fil de mes expériences, j'ai développé une expertise particulière dans la création d'applications modernes, performantes et scalables, avec un focus sur l'intégration de solutions d'IA. J'apprécie particulièrement le travail en équipe et les méthodologies agiles qui favorisent la collaboration et l'innovation continue.",
      en: 'Through my experiences, I have developed particular expertise in creating modern, performant and scalable applications, with a focus on integrating AI solutions. I particularly appreciate teamwork and agile methodologies that promote collaboration and continuous innovation.',
    },
    'aboutDetail.education': { fr: 'Parcours Académique', en: 'Academic Background' },
    'aboutDetail.educationText': {
      fr: "Actuellement en 5ème année à EPITECH, j'ai également effectué un échange académique à HZ University aux Pays-Bas. Cette expérience internationale m'a permis d'élargir ma vision du développement logiciel et de découvrir de nouvelles approches pédagogiques.",
      en: 'Currently in my 5th year at EPITECH, I also completed an academic exchange at HZ University in the Netherlands. This international experience allowed me to broaden my vision of software development and discover new educational approaches.',
    },
    'aboutDetail.educationDetail': {
      fr: "Mon parcours académique m'a permis d'acquérir les meilleurs bases en ce qui concerne le développement et l'informatique, mais c'est surtout ma curiosité et ma soif d'apprendre qui m'ont poussé à me former continuellement aux dernières technologies d'IA et aux best practices du domaine. Avec bien sur l'aide d'EPITECH.",
      en: 'My academic background has allowed me to acquire the best foundations in computer science and coding, but above all it is my curiosity and thirst for learning that have pushed me to continuously train in the latest AI technologies and best practices in the field. With of course the help from EPITECH.',
    },
    'aboutDetail.goals': { fr: 'Objectifs Futurs', en: 'Future Goals' },
    'aboutDetail.goalsText': {
      fr: 'Mon objectif est de devenir un expert en intelligence artificielle et de contribuer à des projets qui ont un impact positif sur la société. Je souhaite continuer à apprendre, innover et partager mes connaissances avec la communauté tech.',
      en: 'My goal is to become an expert in artificial intelligence and contribute to projects that have a positive impact on society. I want to continue learning, innovating and sharing my knowledge with the tech community.',
    },
    'aboutDetail.goalsDetail': {
      fr: "Je cherche constamment à améliorer mes compétences, à découvrir de nouvelles technologies d'IA et à contribuer à des projets qui ont du sens. Mon objectif est de devenir un expert en Data Science et IA, capable de concevoir et déployer des solutions d'intelligence artificielle de bout en bout.",
      en: 'I constantly seek to improve my skills, discover new AI technologies and contribute to meaningful projects. My goal is to become an expert in Data Science and AI, capable of designing and deploying end-to-end artificial intelligence solutions.',
    },
    'aboutDetail.hobbies': { fr: "Centres d'Intérêt", en: 'Interests' },
    'aboutDetail.hobbiesText': {
      fr: "En dehors du code, je suis passionné par les jeux vidéo (notamment le modding), la science-fiction et la technologie. J'aime également participer à des hackathons et des événements tech pour rencontrer d'autres passionnés et découvrir les dernières innovations.",
      en: "Outside of coding, I'm passionate about video games (especially modding), science fiction and technology. I also enjoy participating in hackathons and tech events to meet other enthusiasts and discover the latest innovations.",
    },
    'aboutDetail.hobbiesDetail': {
      fr: "En dehors du code, j'aime la musique, les jeux vidéo et les nouvelles technologies. J'apprécie également les moments passés entre amis et en famille, ainsi que les balades en bord de mer qui me permettent de me ressourcer et de revenir avec de nouvelles idées.",
      en: 'Outside of coding, I enjoy music, video games and new technologies. I also appreciate time spent with friends and family, as well as walks by the sea that allow me to recharge and come back with new ideas.',
    },
    'aboutDetail.backToHome': { fr: "Retour à l'accueil", en: 'Back to home' },
    'aboutDetail.videoTitle': { fr: 'Présentation Vidéo', en: 'Video Presentation' },
    'aboutDetail.videoError': {
      fr: 'Votre navigateur ne supporte pas la lecture de vidéos.',
      en: 'Your browser does not support video playback.',
    },

    // Schools
    'schools.epitech.name': { fr: 'EPITECH Rennes', en: 'EPITECH Rennes' },
    'schools.epitech.degree': {
      fr: "Expert en Technologies de l'Information",
      en: 'Expert in Information Technologies',
    },
    'schools.epitech.period': { fr: '2021 - 2026', en: '2021 - 2026' },
    'schools.epitech.location': { fr: 'Rennes, France', en: 'Rennes, France' },
    'schools.epitech.description': {
      fr: "École d'informatique reconnue pour son approche pédagogique innovante basée sur l'apprentissage par projet. Formation d'experts en technologies de l'information avec une forte culture de l'innovation et de l'entrepreneuriat.",
      en: 'Computer science school recognized for its innovative pedagogical approach based on project-based learning. Training experts in information technologies with a strong culture of innovation and entrepreneurship.',
    },
    'schools.epitech.program': {
      fr: "Formation complète en développement logiciel, architecture système, intelligence artificielle et gestion de projets. L'approche pédagogique unique d'EPITECH repose sur l'apprentissage actif à travers des projets concrets, favorisant l'autonomie, la créativité et le travail en équipe.",
      en: "Comprehensive training in software development, system architecture, artificial intelligence and project management. EPITECH's unique pedagogical approach is based on active learning through concrete projects, promoting autonomy, creativity and teamwork.",
    },
    'schools.epitech.highlights': {
      fr: "Projets techniques ambitieux incluant la création de jeux vidéo (RPG, R-Type), développement d'applications web et mobile (Area), intelligence artificielle (Gomoku, Zappy), et restauration de logiciels legacy. Participation à des hackathons et événements tech. Développement de compétences en C/C++, Python, JavaScript, et architectures avancées.",
      en: 'Ambitious technical projects including video game creation (RPG, R-Type), web and mobile application development (Area), artificial intelligence (Gomoku, Zappy), and legacy software restoration. Participation in hackathons and tech events. Development of skills in C/C++, Python, JavaScript, and advanced architectures.',
    },
    'schools.epitech.achievements': {
      fr: "Réalisation de 15+ projets techniques majeurs, maîtrise de multiples langages et frameworks, développement d'une expertise en IA et Machine Learning, participation à des projets collaboratifs internationaux.",
      en: 'Completion of 15+ major technical projects, mastery of multiple languages and frameworks, development of expertise in AI and Machine Learning, participation in international collaborative projects.',
    },

    'schools.hz.name': {
      fr: 'HZ University of Applied Sciences',
      en: 'HZ University of Applied Sciences',
    },
    'schools.hz.degree': {
      fr: 'Échange International - Intelligence Artificielle',
      en: 'International Exchange - Artificial Intelligence',
    },
    'schools.hz.period': { fr: '2024 - 2025', en: '2024 - 2025' },
    'schools.hz.location': { fr: 'Middelburg, Pays-Bas', en: 'Middelburg, Netherlands' },
    'schools.hz.description': {
      fr: "Université néerlandaise d'excellence spécialisée dans les sciences appliquées. Programme d'échange international axé sur l'Intelligence Artificielle, le Deep Learning et les technologies émergentes.",
      en: 'Dutch university of excellence specializing in applied sciences. International exchange program focused on Artificial Intelligence, Deep Learning and emerging technologies.',
    },
    'schools.hz.program': {
      fr: "Programme intensif en Intelligence Artificielle couvrant le Machine Learning, Deep Learning, Computer Vision, Natural Language Processing et Data Science. Accent sur les applications pratiques et les projets de recherche avec des cas d'usage réels.",
      en: 'Intensive Artificial Intelligence program covering Machine Learning, Deep Learning, Computer Vision, Natural Language Processing and Data Science. Focus on practical applications and research projects with real use cases.',
    },
    'schools.hz.highlights': {
      fr: "Développement d'un projet de Computer Vision avec détection d'objets en temps réel, étude approfondie des réseaux de neurones convolutifs (CNN), travail sur des datasets volumineux, implémentation d'algorithmes de Deep Learning avec PyTorch et TensorFlow. Collaboration internationale avec des étudiants de 15+ nationalités.",
      en: 'Development of a Computer Vision project with real-time object detection, in-depth study of convolutional neural networks (CNN), work on large datasets, implementation of Deep Learning algorithms with PyTorch and TensorFlow. International collaboration with students from 15+ nationalities.',
    },
    'schools.hz.achievements': {
      fr: "Expertise en Computer Vision et Deep Learning, maîtrise de PyTorch et TensorFlow, développement de modèles d'IA performants, expérience internationale enrichissante avec immersion culturelle aux Pays-Bas.",
      en: 'Expertise in Computer Vision and Deep Learning, mastery of PyTorch and TensorFlow, development of high-performance AI models, enriching international experience with cultural immersion in the Netherlands.',
    },

    // School Detail
    'schoolDetail.about': { fr: 'À propos', en: 'About' },
    'schoolDetail.program': { fr: "Programme d'études", en: 'Study Program' },
    'schoolDetail.highlights': { fr: 'Points forts', en: 'Highlights' },
    'schoolDetail.achievements': { fr: 'Réalisations', en: 'Achievements' },
    'schoolDetail.period': { fr: 'Période', en: 'Period' },
    'schoolDetail.location': { fr: 'Lieu', en: 'Location' },
    'schoolDetail.degree': { fr: 'Diplôme', en: 'Degree' },
    'schoolDetail.website': { fr: 'Site web', en: 'Website' },
    'schoolDetail.backToAbout': { fr: 'Retour à propos', en: 'Back to about' },

    // Companies/Internships
    'companies.adesio.name': { fr: 'Adesio', en: 'Adesio' },
    'companies.adesio.role': {
      fr: 'Développeur Full-Stack - Stage',
      en: 'Full-Stack Developer - Internship',
    },
    'companies.adesio.period': {
      fr: 'Février 2023 - Juin 2023, Septembre 2025 - Aujourd\'hui',
      en: 'February 2023 - June 2023, September 2025 - Today',
    },
    'companies.adesio.location': { fr: 'Saint-Malo, France', en: 'Saint-Malo, France' },
    'companies.adesio.description': {
      fr: "Adesio est une scale-up innovante spécialisée dans les solutions de procurement intelligent pour l'industrie électronique. Leur plateforme Smart Supply Manager® révolutionne l'approvisionnement en composants électroniques grâce à l'IA et l'automatisation.",
      en: 'Adesio is an innovative scale-up specialized in intelligent procurement solutions for the electronics industry. Their Smart Supply Manager® platform revolutionizes electronic component sourcing through AI and automation.',
    },
    'companies.adesio.mission': {
      fr: "Développement et amélioration de la plateforme Smart Supply Manager®, une solution de procurement multi-fournisseurs qui centralise les données en temps réel de stock, prix et délais de livraison. Travail sur l'intégration d'APIs de distributeurs majeurs (Arrow, Avnet, Mouser, DigiKey) et développement de fonctionnalités d'automatisation des commandes et devis.",
      en: 'Development and improvement of the Smart Supply Manager® platform, a multi-supplier procurement solution that centralizes real-time stock, pricing, and delivery data. Work on integrating major distributor APIs (Arrow, Avnet, Mouser, DigiKey) and developing order and quote automation features.',
    },
    'companies.adesio.achievements': {
      fr: "Développement de nouvelles fonctionnalités pour l'interface web (Angular/TypeScript), intégration de multiples APIs REST de fournisseurs, optimisation des performances de l'application, participation à l'amélioration de l'UX/UI, mise en place de tests automatisés, collaboration avec une équipe agile sur des sprints de 2 semaines.",
      en: 'Development of new features for the web interface (Angular/TypeScript), integration of multiple supplier REST APIs, application performance optimization, participation in UX/UI improvements, implementation of automated tests, collaboration with an agile team on 2-week sprints.',
    },
    'companies.adesio.technologies': {
      fr: 'Angular, TypeScript, Node.js, API REST, Git, Agile/Scrum, MongoDB, Docker',
      en: 'Angular, TypeScript, Node.js, REST API, Git, Agile/Scrum, MongoDB, Docker',
    },
    'companies.adesio.impact': {
      fr: "Contribution à une plateforme utilisée par des équipes d'achat pour optimiser leurs processus de sourcing avec des économies pouvant atteindre 70%. Amélioration de l'expérience utilisateur et réduction du temps de traitement des commandes grâce aux fonctionnalités développées.",
      en: 'Contribution to a platform used by purchasing teams to optimize their sourcing processes with savings of up to 70%. Improved user experience and reduced order processing time through developed features.',
    },

    'companies.arche.name': { fr: 'ARCHE MC2', en: 'ARCHE MC2' },
    'companies.arche.role': {
      fr: 'Développeur Logiciel - Stage',
      en: 'Software Developer - Internship',
    },
    'companies.arche.period': {
      fr: 'Juillet 2022 - Décembre 2022',
      en: 'July 2022 - December 2022',
    },
    'companies.arche.location': { fr: 'Plérin, France', en: 'Plérin, France' },
    'companies.arche.description': {
      fr: "ARCHE MC2 est une entreprise spécialisée dans le développement de solutions logicielles sur mesure et le conseil en technologies de l'information. L'entreprise accompagne ses clients dans leur transformation digitale avec une expertise forte en développement d'applications métier.",
      en: 'ARCHE MC2 is a company specialized in custom software solution development and IT consulting. The company supports its clients in their digital transformation with strong expertise in business application development.',
    },
    'companies.arche.mission': {
      fr: "Participation au développement d'applications métier pour des clients du secteur public et privé. Travail sur des projets de digitalisation de processus métier, développement de fonctionnalités frontend et backend, maintenance corrective et évolutive d'applications existantes.",
      en: 'Participation in business application development for public and private sector clients. Work on business process digitalization projects, frontend and backend feature development, corrective and evolutionary maintenance of existing applications.',
    },
    'companies.arche.achievements': {
      fr: "Développement de nouvelles fonctionnalités pour des applications web en production, correction de bugs et amélioration de la stabilité des applications, rédaction de documentation technique, participation aux revues de code, apprentissage des méthodologies de développement professionnel et des bonnes pratiques de l'industrie.",
      en: 'Development of new features for production web applications, bug fixes and application stability improvements, technical documentation writing, code review participation, learning professional development methodologies and industry best practices.',
    },
    'companies.arche.technologies': {
      fr: 'Java, Spring Boot, JavaScript, Angular, SQL, Git, Maven, Jenkins',
      en: 'Java, Spring Boot, JavaScript, Angular, SQL, Git, Maven, Jenkins',
    },
    'companies.arche.impact': {
      fr: 'Acquisition de solides compétences en développement professionnel, compréhension des enjeux du développement en entreprise, apprentissage des pratiques de qualité logicielle et travail en équipe sur des projets réels avec impact client.',
      en: 'Acquisition of solid professional development skills, understanding of enterprise development challenges, learning software quality practices and teamwork on real projects with client impact.',
    },

    // Company Detail
    'companyDetail.about': { fr: "À propos de l'entreprise", en: 'About the company' },
    'companyDetail.mission': { fr: 'Missions réalisées', en: 'Completed missions' },
    'companyDetail.achievements': {
      fr: 'Réalisations & Contributions',
      en: 'Achievements & Contributions',
    },
    'companyDetail.technologies': { fr: 'Technologies utilisées', en: 'Technologies used' },
    'companyDetail.impact': { fr: 'Impact & Apprentissages', en: 'Impact & Learnings' },
    'companyDetail.period': { fr: 'Période', en: 'Period' },
    'companyDetail.role': { fr: 'Rôle', en: 'Role' },
    'companyDetail.location': { fr: 'Lieu', en: 'Location' },
    'companyDetail.website': { fr: 'Site web', en: 'Website' },
    'companyDetail.backToAbout': { fr: 'Retour à propos', en: 'Back to about' },

    // Skills
    'skills.title': { fr: 'Compétences Techniques', en: 'Technical Skills' },
    'skills.subtitle': {
      fr: "Technologies et outils que j'utilise au quotidien",
      en: 'Technologies and tools I use daily',
    },

    // Contact
    'contact.title': { fr: 'Contactez-moi', en: 'Contact Me' },
    'contact.subtitle': {
      fr: "Une question ? Un projet ? N'hésitez pas à me contacter",
      en: 'A question? A project? Feel free to contact me',
    },
    'contact.keepInTouch': { fr: 'Restons en Contact', en: "Let's Stay in Touch" },
    'contact.openToDiscuss': {
      fr: "Je suis toujours ouvert à discuter de nouveaux projets, d'idées créatives ou d'opportunités de collaboration.",
      en: 'I am always open to discussing new projects, creative ideas or collaboration opportunities.',
    },
    'contact.name': { fr: 'Nom', en: 'Name' },
    'contact.email': { fr: 'Email', en: 'Email' },
    'contact.subject': { fr: 'Sujet', en: 'Subject' },
    'contact.message': { fr: 'Message', en: 'Message' },
    'contact.send': { fr: 'Envoyer', en: 'Send' },
    'contact.sending': { fr: 'Envoi...', en: 'Sending...' },
    'contact.sent': { fr: 'Message envoyé !', en: 'Message sent!' },
    'contact.error': { fr: "Erreur d'envoi", en: 'Sending error' },
    'contact.social': { fr: 'Réseaux Sociaux', en: 'Social Networks' },

    // Footer
    'footer.description': {
      fr: "Data Scientist & Développeur passionné par l'IA, le Machine Learning et la création de projets innovants.",
      en: 'Data Scientist & Developer passionate about AI, Machine Learning and creating innovative projects.',
    },
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
