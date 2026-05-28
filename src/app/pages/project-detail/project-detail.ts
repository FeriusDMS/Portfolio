import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

interface Project {
  titleKey: string;
  descriptionKey: string;
  objectiveKey: string;
  challengesKey: string;
  resultsKey: string;
  dateKey: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  demoVideo?: string;
  type: 'personal' | 'academic';
  abandoned?: boolean;
  WIP?: boolean;
}

@Component({
  selector: 'app-project-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail implements OnInit {
  project: Project | null = null;
  projectId: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public translate: TranslationService
  ) {}

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('id') || '';
    this.loadProject();
  }

  loadProject() {
    const projects = this.getAllProjects();
    this.project = projects.find((p, index) => index.toString() === this.projectId) || null;
    
    if (!this.project) {
      this.router.navigate(['/projects']);
    }
  }

  getAllProjects(): Project[] {
    return [
      {
        titleKey: 'projects.computerVision.title',
        descriptionKey: 'projects.computerVision.desc',
        objectiveKey: 'projects.computerVision.objective',
        challengesKey: 'projects.computerVision.challenges',
        resultsKey: 'projects.computerVision.results',
        dateKey: 'projects.computerVision.date',
        technologies: ['Python', 'Computer Vision', 'Deep Learning', 'Jupyter'],
        image: 'assets/ComputerVision.jpg',
        github: 'https://github.com/FeriusDMS/ComputerVision',
        demoVideo: 'assets/output_anonymized.mp4',
        type: 'academic'
      },
      {
        titleKey: 'projects.hptarget.title',
        descriptionKey: 'projects.hptarget.desc',
        objectiveKey: 'projects.hptarget.objective',
        challengesKey: 'projects.hptarget.challenges',
        resultsKey: 'projects.hptarget.results',
        dateKey: 'projects.hptarget.date',
        technologies: ['C#', 'Game Modding', 'FFXIV', 'Dalamud'],
        image: 'assets/HPTarget.png',
        github: 'https://github.com/FeriusDMS/HPTarget',
        type: 'personal'
      },
      {
        titleKey: 'projects.chatbot.title',
        descriptionKey: 'projects.chatbot.desc',
        objectiveKey: 'projects.chatbot.objective',
        challengesKey: 'projects.chatbot.challenges',
        resultsKey: 'projects.chatbot.results',
        dateKey: 'projects.chatbot.date',
        technologies: ['Python', 'NLP', 'Machine Learning'],
        image: 'assets/IAChatBot.png',
        github: 'https://github.com/FeriusDMS/chatGtp',
        type: 'personal'
      },
      {
        titleKey: 'projects.area.title',
        descriptionKey: 'projects.area.desc',
        objectiveKey: 'projects.area.objective',
        challengesKey: 'projects.area.challenges',
        resultsKey: 'projects.area.results',
        dateKey: 'projects.area.date',
        technologies: ['JavaScript', 'React', 'Node.js', 'API'],
        image: 'assets/Area.png',
        github: 'https://github.com/FeriusDMS/Area',
        type: 'academic'
      },
      {
        titleKey: 'projects.myrpg.title',
        descriptionKey: 'projects.myrpg.desc',
        objectiveKey: 'projects.myrpg.objective',
        challengesKey: 'projects.myrpg.challenges',
        resultsKey: 'projects.myrpg.results',
        dateKey: 'projects.myrpg.date',
        technologies: ['C', 'CSFML', 'Game Dev'],
        image: 'assets/RPG.png',
        github: 'https://github.com/FeriusDMS/myRPG',
        demoVideo: 'assets/rpg.mp4',
        type: 'academic'
      },
      {
        titleKey: 'projects.rtype.title',
        descriptionKey: 'projects.rtype.desc',
        objectiveKey: 'projects.rtype.objective',
        challengesKey: 'projects.rtype.challenges',
        resultsKey: 'projects.rtype.results',
        dateKey: 'projects.rtype.date',
        technologies: ['C++', 'Network', 'Game Dev'],
        image: 'assets/RType.png',
        github: 'https://github.com/FeriusDMS/R-Type',
        demoVideo: 'assets/rtype.mp4',
        type: 'academic'
      },
      {
        titleKey: 'projects.legacy.title',
        descriptionKey: 'projects.legacy.desc',
        objectiveKey: 'projects.legacy.objective',
        challengesKey: 'projects.legacy.challenges',
        resultsKey: 'projects.legacy.results',
        dateKey: 'projects.legacy.date',
        technologies: ['OCaml', 'Python', 'Angular', 'Web Dev'],
        image: 'assets/Legacy.png',
        github: 'https://github.com/FeriusDMS/LegacyProject',
        type: 'academic'
      },
      {
        titleKey: 'projects.gomoku.title',
        descriptionKey: 'projects.gomoku.desc',
        objectiveKey: 'projects.gomoku.objective',
        challengesKey: 'projects.gomoku.challenges',
        resultsKey: 'projects.gomoku.results',
        dateKey: 'projects.gomoku.date',
        technologies: ['Python', 'AI', 'Game Theory', 'Algorithms'],
        image: 'assets/Gomoku.png',
        github: 'https://github.com/FeriusDMS/Gomoku',
        type: 'academic'
      },
      {
        titleKey: 'projects.zappy.title',
        descriptionKey: 'projects.zappy.desc',
        objectiveKey: 'projects.zappy.objective',
        challengesKey: 'projects.zappy.challenges',
        resultsKey: 'projects.zappy.results',
        dateKey: 'projects.zappy.date',
        technologies: ['C', 'Network', 'AI', 'Simulation'],
        image: 'assets/Zappy.png',
        github: 'https://github.com/FeriusDMS/Zappy',
        type: 'academic'
      },
      {
        titleKey: 'projects.blockchain.title',
        descriptionKey: 'projects.blockchain.desc',
        objectiveKey: 'projects.blockchain.objective',
        challengesKey: 'projects.blockchain.challenges',
        resultsKey: 'projects.blockchain.results',
        dateKey: 'projects.blockchain.date',
        technologies: ['TypeScript', 'Solidity', 'Blockchain', 'Ethereum', 'Next.js', 'Hardhat'],
        image: 'assets/Blockchain.png',
        github: 'https://github.com/FeriusDMS/Blockchain',
        type: 'academic',
        abandoned: true
      },
      {
        titleKey: 'projects.searchmonster.title',
        descriptionKey: 'projects.searchmonster.desc',
        objectiveKey: 'projects.searchmonster.objective',
        challengesKey: 'projects.searchmonster.challenges',
        resultsKey: 'projects.searchmonster.results',
        dateKey: 'projects.searchmonster.date',
        technologies: ['C#', 'Game Modding', 'FFXIV', 'Dalamud'],
        image: 'assets/searchMonster.jpg',
        github: 'https://github.com/FeriusDMS/MonstersMap',
        type: 'personal',
      }
    ];
  }
}

