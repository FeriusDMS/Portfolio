import { Component } from '@angular/core';
import { Projects } from '../../components/projects/projects';

@Component({
  selector: 'app-projects-page',
  imports: [Projects],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.scss',
})
export class ProjectsPage {}
