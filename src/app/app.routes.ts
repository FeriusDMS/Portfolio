import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { AboutPage } from './pages/about-page/about-page';
import { ProjectsPage } from './pages/projects-page/projects-page';
import { SkillsPage } from './pages/skills-page/skills-page';
import { ContactPage } from './pages/contact-page/contact-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: AboutPage },
  { path: 'projects', component: ProjectsPage },
  { path: 'skills', component: SkillsPage },
  { path: 'contact', component: ContactPage },
  { path: '**', redirectTo: '' }
];
