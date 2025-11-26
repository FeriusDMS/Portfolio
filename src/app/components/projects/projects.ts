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
      title: 'Portfolio Website',
      description: 'Site portfolio personnel développé avec Angular et SCSS. Design moderne et responsive avec animations fluides.',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      image: '',
      github: '#',
      demo: '#',
      type: 'personal'
    },
    {
      title: 'Application de Gestion',
      description: 'Application web de gestion avec authentification, CRUD complet et interface intuitive.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: '',
      github: '#',
      type: 'academic'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Plateforme e-commerce complète avec panier, paiement et gestion des produits.',
      technologies: ['Vue.js', 'Express', 'PostgreSQL'],
      image: '',
      github: '#',
      demo: '#',
      type: 'personal'
    },
    {
      title: 'API REST',
      description: 'API RESTful sécurisée avec documentation complète et tests automatisés.',
      technologies: ['Node.js', 'Express', 'JWT'],
      image: '',
      github: '#',
      type: 'academic'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interactif avec graphiques et statistiques en temps réel.',
      technologies: ['Angular', 'D3.js', 'Firebase'],
      image: '',
      github: '#',
      demo: '#',
      type: 'personal'
    },
    {
      title: 'Mobile App',
      description: 'Application mobile cross-platform avec fonctionnalités offline et synchronisation.',
      technologies: ['React Native', 'TypeScript', 'Redux'],
      image: '',
      github: '#',
      type: 'academic'
    }
  ];
}
