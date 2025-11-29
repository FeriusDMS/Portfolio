import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills: Skill[] = [
    // Data Science & IA
    { name: 'Python', level: 95, category: 'Data Science & IA' },
    { name: 'Machine Learning', level: 88, category: 'Data Science & IA' },
    { name: 'Deep Learning', level: 85, category: 'Data Science & IA' },
    { name: 'NLP', level: 82, category: 'Data Science & IA' },
    { name: 'Computer Vision', level: 80, category: 'Data Science & IA' },
    { name: 'TensorFlow/PyTorch', level: 83, category: 'Data Science & IA' },
    
    // Développement
    { name: 'C/C++', level: 88, category: 'Développement' },
    { name: 'C#', level: 85, category: 'Développement' },
    { name: 'JavaScript/TypeScript', level: 82, category: 'Développement' },
    { name: 'React/Angular', level: 80, category: 'Développement' },
    { name: 'Node.js', level: 78, category: 'Développement' },
    
    // Game Dev & Modding
    { name: 'Game Development', level: 85, category: 'Game Dev' },
    { name: 'FFXIV Modding', level: 20, category: 'Game Dev' },
    { name: 'CSFML', level: 80, category: 'Game Dev' },
    
    // Outils
    { name: 'Git/GitHub', level: 92, category: 'Outils' },
    { name: 'Docker', level: 75, category: 'Outils' },
    { name: 'VS Code', level: 95, category: 'Outils' },
    { name: 'Jupyter Notebook', level: 88, category: 'Outils' },
  ];

  get categorizedSkills() {
    const categories = ['Data Science & IA', 'Développement', 'Game Dev', 'Outils'];
    return categories.map(category => ({
      name: category,
      skills: this.skills.filter(skill => skill.category === category)
    })).filter(cat => cat.skills.length > 0);
  }
}
