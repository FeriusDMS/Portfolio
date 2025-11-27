import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  type: 'personal' | 'academic';
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'HPTarget - Mod FFXIV',
      description: 'Mod pour Final Fantasy XIV permettant d\'améliorer l\'expérience de jeu avec des fonctionnalités personnalisées.',
      technologies: ['C#', 'Game Modding', 'FFXIV'],
      image: '',
      github: 'https://github.com/FeriusDMS/HPTarget',
      type: 'personal'
    },
    {
      title: 'IA ChatBot (Python)',
      description: 'Création d\'une intelligence artificielle conversationnelle capable de dialoguer de manière naturelle avec les utilisateurs.',
      technologies: ['Python', 'NLP', 'Machine Learning'],
      image: '',
      github: 'https://github.com/FeriusDMS/Bot-Wulfing',
      type: 'academic'
    },
    {
      title: 'Application Web & Mobile - Services',
      description: 'Application complète offrant des connexions à divers services (Spotify, Discord, Google). Interface web et mobile.',
      technologies: ['JavaScript', 'React', 'Node.js', 'API'],
      image: '',
      github: 'https://github.com/FeriusDMS/Area',
      type: 'academic'
    },
    {
      title: 'My_RPG',
      description: 'Création d\'un jeu vidéo de type RPG avec système de combat, quêtes et progression du personnage.',
      technologies: ['C/C++', 'CSFML', 'Game Dev'],
      image: '',
      github: 'https://github.com/FeriusDMS/myRPG',
      type: 'academic'
    },
    {
      title: 'Type - Space Invaders',
      description: 'Recréation du jeu Space Invaders jouable sur plusieurs plateformes en réseau.',
      technologies: ['C++', 'Network', 'Game Dev'],
      image: '',
      github: 'https://github.com/FeriusDMS/R-Type',
      type: 'academic'
    },
    {
      title: 'Legacy project',
      description: 'AWKWARD LEGACY is a restored software suite originally developed between 1995 and 2008 in OCaml, now modernized with a Python backend and Angular 17 frontend. This genealogical research tool is capable of revealing the origins of individuals and uncovering rightful heirs of powerful lineages.',
      technologies: ['Angular', 'Network', 'Web Dev'],
      image: '',
      github: 'https://github.com/FeriusDMS/LegacyProject',
      type: 'academic'
    },
  ];
}
