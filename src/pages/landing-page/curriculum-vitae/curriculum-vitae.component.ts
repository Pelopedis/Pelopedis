import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.css'],
  standalone: true,
})
export class CurriculumVitaeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}
  
  detailOnClick(experience:any) {
    experience.detailIsDisplayed=!experience.detailIsDisplayed;
  }
}