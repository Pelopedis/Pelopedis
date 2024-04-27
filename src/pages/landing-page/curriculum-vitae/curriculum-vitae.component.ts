import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.scss'],
  standalone: true,
})
export class CurriculumVitaeComponent implements OnInit {
  experiences: any = [
    {
        title: "Full Stack Software Engineer",
        company: 'D. G. Techlink',
        period: "2021 - Present (3 years)",
        technologies: 'C#, .NET, Angular 14, Angular Material, PrimeNG, SQL, Azure DevOps, Git',
        missions: [
            "Building .NET Core MVC Web APIs following Clean Architecture and Microservices,",
            "Developing Professional looking UI using Angular/NGPrime,",
            "Creating Tables and Store Procedures using SQL,",
            "Managing Azure storage explorer for blob storage,",
            "Azure DevOps / Git",
        ],
        detailIsDisplayed: true,
    },
    {
        title: "Software Developer Intern",
        company: 'D. G. Techlink',
        period: "2021 (3 months)",
        technologies: 'C#, .NET, Angular, SQL',
        missions: [
            "Learned How to develop: Professional looking websites with JavaScript",
            "Learned How to develop: Web API using .Net / c#",
            "Learned How to work in a Team using Agile",
        ],
        detailIsDisplayed: false,
    }
  ];
  constructor() { }

  ngOnInit(): void {}
  
  detailOnClick(experience:any) {
    experience.detailIsDisplayed=!experience.detailIsDisplayed;
  }
}