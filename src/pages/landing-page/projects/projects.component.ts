import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProjectsComponent implements OnInit {
  venobox: any;
projects: any;

  constructor() { }

  ngOnInit(): void {}

  // ngAfterViewInit(){
  //   console.log("after view init");
  //   this.onMouse("portfolio-link", "portfolio-img");
  //   this.onMouse("teamTraveler-link", "teamTraveler-img");
  //   this.onMouse("mautic-link", "mautic-img");
  //   this.onMouse("pokedex-link", "pokedex-img");
  //   this.onMouse("riddle-link", "riddle-img");
  //   this.venobox = $('.venobox');
  //   this.venobox.venobox();
  // }

  // detailOnClick(project: any) {
  //   this.projects.filter(item=>item.detailIsDisplayed && item.id!=project.id).map(elem=>elem.detailIsDisplayed=false);
  //   project.detailIsDisplayed=!project.detailIsDisplayed;
  // }

  // onMouse(idLink: String, idImage: String) {
  //   $('#' + idLink).on("mouseenter", function () {
  //     console.log('on mouseenter');
  //     $('#' + idImage).css("opacity", "0.3");
  //     $('#' + idLink).css("opacity", "1");
  //   }).on('mouseleave', function () {
  //     $('#' + idImage).css("opacity", "1");
  //     $('#' + idLink).css("opacity", "0");
  //   }
  //   );

  //   $('#' + idImage).on("mouseenter", function () {
  //     $('#' + idImage).css("opacity", "0.3");
  //     $('#' + idLink).css("opacity", "1");
  //   }).on('mouseleave', function () {
  //     $('#' + idImage).css("opacity", "1");
  //     $('#' + idLink).css("opacity", "0");
  //   }
  //   );
  // }
}
