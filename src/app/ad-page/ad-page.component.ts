import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ad-page',
  templateUrl: './ad-page.component.html',
  styleUrls: ['./ad-page.component.css']
})
export class AdPageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.router.url);
  }

}
