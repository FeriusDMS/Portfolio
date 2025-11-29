import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

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
  constructor(public translate: TranslationService) {}

  get projects(): Project[] {
    return [
      {
        title: this.translate.translate('projects.computerVision.title'),
        description: this.translate.translate('projects.computerVision.desc'),
        technologies: ['Python', 'Computer Vision', 'Deep Learning', 'Jupyter'],
        image: '',
        github: 'https://github.com/FeriusDMS/ComputerVision',
        type: 'academic'
      },
      {
        title: this.translate.translate('projects.hptarget.title'),
        description: this.translate.translate('projects.hptarget.desc'),
        technologies: ['C#', 'Game Modding', 'FFXIV', 'Dalamud'],
        image: '',
        github: 'https://github.com/FeriusDMS/HPTarget',
        type: 'personal'
      },
      {
        title: this.translate.translate('projects.chatbot.title'),
        description: this.translate.translate('projects.chatbot.desc'),
        technologies: ['Python', 'NLP', 'Machine Learning'],
        image: '',
        github: 'https://github.com/FeriusDMS/chatGtp',
        type: 'personal'
      },
      {
        title: this.translate.translate('projects.area.title'),
        description: this.translate.translate('projects.area.desc'),
        technologies: ['JavaScript', 'React', 'Node.js', 'API'],
        image: '',
        github: 'https://github.com/FeriusDMS/Area',
        type: 'academic'
      },
      {
        title: this.translate.translate('projects.myrpg.title'),
        description: this.translate.translate('projects.myrpg.desc'),
        technologies: ['C', 'CSFML', 'Game Dev'],
        image: '',
        github: 'https://github.com/FeriusDMS/myRPG',
        type: 'academic'
      },
      {
        title: this.translate.translate('projects.rtype.title'),
        description: this.translate.translate('projects.rtype.desc'),
        technologies: ['C++', 'Network', 'Game Dev'],
        image: '',
        github: 'https://github.com/FeriusDMS/R-Type',
        type: 'academic'
      },
      {
        title: this.translate.translate('projects.legacy.title'),
        description: this.translate.translate('projects.legacy.desc'),
        technologies: ['OCaml', 'Python', 'Angular', 'Web Dev'],
        image: '',
        github: 'https://github.com/FeriusDMS/LegacyProject',
        type: 'academic'
      },
      {
        title: this.translate.translate('projects.gomoku.title'),
        description: this.translate.translate('projects.gomoku.desc'),
        technologies: ['Python', 'AI', 'Game Theory', 'Algorithms'],
        image: '',
        github: 'https://github.com/FeriusDMS/Gomoku',
        type: 'academic'
      },
      {
        title: this.translate.translate('projects.zappy.title'),
        description: this.translate.translate('projects.zappy.desc'),
        technologies: ['C', 'Network', 'AI', 'Simulation'],
        image: '',
        github: 'https://github.com/FeriusDMS/Zappy',
        type: 'academic'
      },
    ];
  }
}
