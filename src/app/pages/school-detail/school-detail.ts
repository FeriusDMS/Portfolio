import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

interface School {
  nameKey: string;
  degreeKey: string;
  periodKey: string;
  locationKey: string;
  address: string;
  descriptionKey: string;
  programKey: string;
  highlightsKey: string;
  achievementsKey: string;
  image: string;
  website?: string;
  type: 'epitech' | 'hz';
}

@Component({
  selector: 'app-school-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './school-detail.html',
  styleUrl: './school-detail.scss',
})
export class SchoolDetail implements OnInit {
  school: School | null = null;
  schoolId: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public translate: TranslationService
  ) {}

  ngOnInit() {
    this.schoolId = this.route.snapshot.paramMap.get('id') || '';
    this.loadSchool();
  }

  loadSchool() {
    const schools = this.getAllSchools();
    this.school = schools.find((s) => s.type === this.schoolId) || null;

    if (!this.school) {
      this.router.navigate(['/about']);
    }
  }

  getGoogleMapsUrl(location: string): string {
    const encodedLocation = encodeURIComponent(location);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      // Sur mobile, utilise l'URL qui ouvre l'application Google Maps
      return `https://maps.google.com/?q=${encodedLocation}`;
    } else {
      // Sur desktop, utilise l'URL standard
      return `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
    }
  }

  getAllSchools(): School[] {
    return [
      {
        nameKey: 'schools.epitech.name',
        degreeKey: 'schools.epitech.degree',
        periodKey: 'schools.epitech.period',
        locationKey: 'schools.epitech.location',
        address: '12 Rue Jean-Louis Bertrand, 35000 Rennes',
        descriptionKey: 'schools.epitech.description',
        programKey: 'schools.epitech.program',
        highlightsKey: 'schools.epitech.highlights',
        achievementsKey: 'schools.epitech.achievements',
        image: 'assets/Epitech.jpg',
        website: 'https://www.epitech.eu',
        type: 'epitech',
      },
      {
        nameKey: 'schools.hz.name',
        degreeKey: 'schools.hz.degree',
        periodKey: 'schools.hz.period',
        locationKey: 'schools.hz.location',
        address: 'Het Groene Woud 1, 4331 NB Middelburg, Pays-Bas',
        descriptionKey: 'schools.hz.description',
        programKey: 'schools.hz.program',
        highlightsKey: 'schools.hz.highlights',
        achievementsKey: 'schools.hz.achievements',
        image: 'assets/HZ.jpg',
        website: 'https://hz.nl',
        type: 'hz',
      },
    ];
  }
}
