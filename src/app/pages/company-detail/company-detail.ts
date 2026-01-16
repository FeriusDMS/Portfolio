import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

interface Company {
  nameKey: string;
  roleKey: string;
  periodKey: string;
  locationKey: string;
  address: string;
  descriptionKey: string;
  missionKey: string;
  achievementsKey: string;
  technologiesKey: string;
  impactKey: string;
  image: string;
  website?: string;
  type: 'adesio' | 'arche';
}

@Component({
  selector: 'app-company-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './company-detail.html',
  styleUrl: './company-detail.scss',
})
export class CompanyDetail implements OnInit {
  company: Company | null = null;
  companyId: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public translate: TranslationService
  ) {}

  ngOnInit() {
    this.companyId = this.route.snapshot.paramMap.get('id') || '';
    this.loadCompany();
  }

  loadCompany() {
    const companies = this.getAllCompanies();
    this.company = companies.find((c) => c.type === this.companyId) || null;

    if (!this.company) {
      this.router.navigate(['/about']);
    }
  }

  getGoogleMapsUrl(location: string): string {
    const encodedLocation = encodeURIComponent(location);
    return `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
  }

  getAllCompanies(): Company[] {
    return [
      {
        nameKey: 'companies.adesio.name',
        roleKey: 'companies.adesio.role',
        periodKey: 'companies.adesio.period',
        locationKey: 'companies.adesio.location',
        address: '8 Rue du Point du Jour, 35400 Saint-Malo',
        descriptionKey: 'companies.adesio.description',
        missionKey: 'companies.adesio.mission',
        achievementsKey: 'companies.adesio.achievements',
        technologiesKey: 'companies.adesio.technologies',
        impactKey: 'companies.adesio.impact',
        image: 'assets/Adesio.png',
        website: 'https://www.adesio.com',
        type: 'adesio',
      },
      {
        nameKey: 'companies.arche.name',
        roleKey: 'companies.arche.role',
        periodKey: 'companies.arche.period',
        locationKey: 'companies.arche.location',
        address: '1 Rue Pierre et Marie Curie, 22190 Plérin',
        descriptionKey: 'companies.arche.description',
        missionKey: 'companies.arche.mission',
        achievementsKey: 'companies.arche.achievements',
        technologiesKey: 'companies.arche.technologies',
        impactKey: 'companies.arche.impact',
        image: 'assets/ArcheMc2.png',
        website: 'https://www.arche-mc2.com',
        type: 'arche',
      },
    ];
  }
}
