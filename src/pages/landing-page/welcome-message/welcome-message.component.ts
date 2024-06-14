import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.scss'],
  standalone: true
})
export class WelcomeMessageComponent implements OnInit {
  title = 'Welcome to Dev Mappouras Website';
  
  constructor() { }

  ngOnInit() {
    var options = {
      strings: ['','Full-Stack Developer'],
      typeSpeed: 110,
      backSpeed: 80,
      loop: true,
    };
    
    var typed = new Typed('.typed', options);
    typed.reset(true)
  }

}