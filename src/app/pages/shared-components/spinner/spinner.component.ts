import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  constructor(
    public loader: LoaderService
  ) { }

  ngOnInit(): void {
  }

  //global spinner source:
  //https://danielk.tech/home/angular-how-to-add-a-loading-spinner

}
