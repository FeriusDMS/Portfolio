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
    // Frontend
    { name: 'Angular', level: 90, category: 'Frontend' },
    { name: 'React', level: 85, category: 'Frontend' },
    { name: 'TypeScript', level: 88, category: 'Frontend' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'SCSS/SASS', level: 90, category: 'Frontend' },
    
    // Backend
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Express', level: 80, category: 'Backend' },
    { name: 'MongoDB', level: 75, category: 'Backend' },
    { name: 'PostgreSQL', level: 78, category: 'Backend' },
    
    // Tools & Others
    { name: 'Git/GitHub', level: 90, category: 'Outils' },
    { name: 'Docker', level: 70, category: 'Outils' },
    { name: 'VS Code', level: 95, category: 'Outils' },
    { name: 'Figma', level: 75, category: 'Design' },
  ];

  get categorizedSkills() {
    const categories = ['Frontend', 'Backend', 'Outils', 'Design'];
    return categories.map(category => ({
      name: category,
      skills: this.skills.filter(skill => skill.category === category)
    })).filter(cat => cat.skills.length > 0);
  }
}
