import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  type: 'personal' | 'academic';
  abandoned?: boolean;
  WIP?: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterLink],
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
        image: 'assets/ComputerVision.jpg',
        github: 'https://github.com/FeriusDMS/ComputerVision',
        type: 'academic'
      },
      {
        title: this.translate.translate('projects.hptarget.title'),
        description: this.translate.translate('projects.hptarget.desc'),
        technologies: ['C#', 'Game Modding', 'FFXIV', 'Dalamud'],
        image: 'assets/HPTarget.png',
        github: 'https://github.com/FeriusDMS/HPTarget',
        type: 'personal'
      },
      {
        title: this.translate.translate('projects.chatbot.title'),
        description: this.translate.translate('projects.chatbot.desc'),
        technologies: ['Python', 'NLP', 'Machine Learning'],
        image: 'assets/IAChatBot.png',
        github: 'https://github.com/FeriusDMS/chatGtp',
        type: 'personal'
      },
      {
        title: this.translate.translate('projects.area.title'),
        description: this.translate.translate('projects.area.desc'),
        technologies: ['JavaScript', 'React', 'Node.js', 'API'],
        image: 'assets/Area.png',
        github: 'https://github.com/FeriusDMS/Area',
        type: 'academic'
      },
      {
        title: this.translate.translate('projects.myrpg.title'),
        description: this.translate.translate('projects.myrpg.desc'),
        technologies: ['C', 'CSFML', 'Game Dev'],
        image: 'assets/RPG.png',
        github: 'https://github.com/FeriusDMS/myRPG',
        type: 'academic'
      },
      {
        title: this.translate.translate('projects.rtype.title'),
        description: this.translate.translate('projects.rtype.desc'),
        technologies: ['C++', 'Network', 'Game Dev'],
        image: 'assets/RType.png',
        github: 'https://github.com/FeriusDMS/R-Type',
        type: 'academic'
      },
      {
        title: this.translate.translate('projects.legacy.title'),
        description: this.translate.translate('projects.legacy.desc'),
        technologies: ['OCaml', 'Python', 'Angular', 'Web Dev'],
        image: 'assets/Legacy.png',
        github: 'https://github.com/FeriusDMS/LegacyProject',
        type: 'academic'
      },
      {
        title: this.translate.translate('projects.gomoku.title'),
        description: this.translate.translate('projects.gomoku.desc'),
        technologies: ['Python', 'AI', 'Game Theory', 'Algorithms'],
        image: 'assets/Gomoku.png',
        github: 'https://github.com/FeriusDMS/Gomoku',
        type: 'academic'
      },
      {
        title: this.translate.translate('projects.zappy.title'),
        description: this.translate.translate('projects.zappy.desc'),
        technologies: ['C', 'Network', 'AI', 'Simulation'],
        image: 'assets/Zappy.png',
        github: 'https://github.com/FeriusDMS/Zappy',
        type: 'academic'
      },
      {
        title: this.translate.translate('projects.blockchain.title'),
        description: this.translate.translate('projects.blockchain.desc'),
        technologies: ['TypeScript', 'Solidity', 'Blockchain', 'Ethereum'],
        image: 'assets/Blockchain.png',
        github: 'https://github.com/FeriusDMS/Blockchain',
        type: 'academic',
        abandoned: true
      },
      {
        title: this.translate.translate('projects.searchmonster.title'),
        description: this.translate.translate('projects.searchmonster.desc'),
        technologies: ['C#', 'Game Modding', 'FFXIV', 'Dalamud'],
        image: 'assets/searchMonster.jpg',
        github: 'https://github.com/FeriusDMS/MonstersMap',
        type: 'personal',
      },
      {
        title: this.translate.translate('projects.trackmyjob.title'),
        description: this.translate.translate('projects.trackmyjob.desc'),
        technologies: ['Python', 'Gmail API', 'Discord', 'GitHub Actions'],
        image: 'assets/TrackMyJob.png',
        github: 'https://github.com/FeriusDMS/TrackMyJob',
        type: 'personal',
      },
    ];
  }
}

