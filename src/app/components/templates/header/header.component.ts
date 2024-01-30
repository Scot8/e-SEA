import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','../../../../prsb-styles.css', '../../../../esea-styles.css']
})
export class HeaderComponent implements OnInit {

  constructor(private location: Location) {}

  /**
  * Used by breadcrumb link to return to previous page.
  */
  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
  }

}
