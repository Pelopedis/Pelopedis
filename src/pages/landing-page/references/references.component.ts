import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ReferencesComponent implements OnInit {
references: any;
  constructor() { }
  ngOnInit(): void {}
}