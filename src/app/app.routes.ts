import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { AboutPage } from './pages/about-page/about-page';
import { ProjectsPage } from './pages/projects-page/projects-page';
import { SkillsPage } from './pages/skills-page/skills-page';
import { ContactPage } from './pages/contact-page/contact-page';
import { ProjectDetail } from './pages/project-detail/project-detail';
import { SchoolDetail } from './pages/school-detail/school-detail';
import { CompanyDetail } from './pages/company-detail/company-detail';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: AboutPage },
  { path: 'schools/:id', component: SchoolDetail },
  { path: 'companies/:id', component: CompanyDetail },
  { path: 'projects', component: ProjectsPage },
  { path: 'projects/:id', component: ProjectDetail },
  { path: 'skills', component: SkillsPage },
  { path: 'contact', component: ContactPage },
  { path: '**', redirectTo: '' }
];
