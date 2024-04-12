import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
 })
export class HomeComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    var options = {
      strings: ['','Full-Stack'],
      typeSpeed: 120,
      backSpeed: 100,
      loop: true,
    };
    
    var typed = new Typed('.typed', options);
    typed.reset(true)
  }
}
