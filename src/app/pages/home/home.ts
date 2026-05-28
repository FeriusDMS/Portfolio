import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Projects } from '../../components/projects/projects';
import { Skills } from '../../components/skills/skills';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Projects, Skills, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomePage {}
