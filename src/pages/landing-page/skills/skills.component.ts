import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SkillsComponent implements OnInit {
  skills: any = {
    technologies: [
      { name: "C#", percent: 90, remark: "excellent" },
      { name: "SQL", percent: 90, remark: "excellent" },
      { name: "JavaScript / BootStrap", percent: 90, remark: "excellent" },
      { name: "Angular / Typescript", percent: 90, remark: "excellent" },
      { name: "Flutter / Dart", percent: 80, remark: "very-good" },
      { name: "Python", percent: 60, remark: "good" },
    ],
    tools: [
      { name: "Git", percent: 90, remark: "excellent" },
      { name: "Office", percent: 90, remark: "excellent" },
      { name: "MySql, SSMS", percent: 90, remark: "excellent" },
      { name: "Linux, Windows", percent: 70, remark: "very-good" },
      { name: "Docker, Kubernetes", percent: 50, remark: "average" },
    ],
    methodologies: [
      { name: "Scrum", percent: 70, remark: "very-good" },
      { name: "Uml", percent: 90, remark: "excellent" },
      { name: "Disign Thinking", percent: 70, remark: "good" },
      { name: "TDD", percent: 90, remark: "excellent" },
      { name: "DevOps", percent: 50, remark: "average" },
    ],
  };
  

  constructor() { }
  ngOnInit(): void {}
}