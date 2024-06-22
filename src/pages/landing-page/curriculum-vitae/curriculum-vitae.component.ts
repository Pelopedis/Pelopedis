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
        title: "Mid Full Stack Software Engineer",
        company: 'D. G. Techlink (3 years)',
        period: "Dec 2023- Present",
        technologies: 'C#, .NET, Angular, Angular Material, PrimeNG, SQL, Azure DevOps, Git',
        missions: [
            "Building .NET Core MVC Web APIs following Clean Architecture and Microservices,",
            "Developing Professional looking UI using Angular/NGPrime,",
            "Creating Tables and Store Procedures using SQL,",
            "Azure DevOps / Git",
        ],
        detailIsDisplayed: true,
    },
    {
      title: "Junior Full Stack Software Engineer",
      period: "Sep 2021 - Dec 2023",
      technologies: 'C#, .NET, Angular, Angular Material, PrimeNG, SQL, Azure DevOps, Git',
      missions: [
          "Developing Professional looking UI using Angular/NGPrime,",
          "Creating Tables and Store Procedures using SQL,",
          "Managing Azure storage explorer for blob storage,",
          "Azure DevOps / Git",
      ],
      detailIsDisplayed: false,
  },
    {
        title: "Software Developer Intern",
        period: "Jun - Sep 2021",
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