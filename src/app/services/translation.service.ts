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
    'projects.hptarget.title': { fr: 'HPTarget - Mod FFXIV', en: 'HPTarget - FFXIV Mod' },
    'projects.hptarget.desc': { fr: 'Plugin Dalamud pour Final Fantasy XIV permettant d\'améliorer l\'expérience de jeu avec des fonctionnalités personnalisées de ciblage.', en: 'Dalamud plugin for Final Fantasy XIV to enhance gaming experience with custom targeting features.' },
    'projects.chatbot.title': { fr: 'IA ChatBot', en: 'AI ChatBot' },
    'projects.chatbot.desc': { fr: 'Chatbot intelligent utilisant des modèles de langage pour des conversations naturelles et contextuelles.', en: 'Intelligent chatbot using language models for natural and contextual conversations.' },
    'projects.area.title': { fr: 'Application Web & Mobile - Services', en: 'Web & Mobile App - Services' },
    'projects.area.desc': { fr: 'Application complète offrant des connexions à divers services (Spotify, Discord, Google) avec système d\'actions/réactions automatisées.', en: 'Complete application offering connections to various services (Spotify, Discord, Google) with automated actions/reactions system.' },
    'projects.myrpg.title': { fr: 'My_RPG', en: 'My_RPG' },
    'projects.myrpg.desc': { fr: 'Jeu vidéo de type RPG avec système de combat, quêtes et progression du personnage.', en: 'RPG video game with combat system, quests and character progression.' },
    'projects.rtype.title': { fr: 'R-Type', en: 'R-Type' },
    'projects.rtype.desc': { fr: 'Recréation du jeu d\'arcade R-Type (type Space Invaders) jouable en réseau multi-plateforme.', en: 'Recreation of the R-Type arcade game (Space Invaders style) playable in multi-platform network.' },
    'projects.legacy.title': { fr: 'Legacy Project', en: 'Legacy Project' },
    'projects.legacy.desc': { fr: 'AWKWARD LEGACY - Suite logicielle restaurée, initialement développée entre 1995 et 2008 en OCaml, modernisée avec Python et Angular. Outil de recherche généalogique.', en: 'AWKWARD LEGACY - Restored software suite, initially developed between 1995 and 2008 in OCaml, modernized with Python and Angular. Genealogical research tool.' },
    'projects.gomoku.title': { fr: 'Gomoku IA', en: 'Gomoku AI' },
    'projects.gomoku.desc': { fr: 'Intelligence artificielle pour le jeu Gomoku utilisant des algorithmes de recherche et d\'apprentissage automatique.', en: 'Artificial intelligence for the Gomoku game using search algorithms and machine learning.' },
    'projects.zappy.title': { fr: 'Zappy', en: 'Zappy' },
    'projects.zappy.desc': { fr: 'Création d\'une civilisation devant survivre et évoluer. Projet de simulation multi-agents avec IA.', en: 'Creation of a civilization that must survive and evolve. Multi-agent simulation project with AI.' },
    
    // Project Detail
    'projectDetail.about': { fr: 'À propos du projet', en: 'About the project' },
    'projectDetail.technologies': { fr: 'Technologies utilisées', en: 'Technologies used' },
    'projectDetail.repository': { fr: 'Dépôt GitHub', en: 'GitHub Repository' },
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
