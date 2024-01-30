import { Component, OnInit } from '@angular/core';
import { Stakeholder } from 'src/app/interfaces/Stakeholder';
import { ServiceUserDetailsService } from 'src/app/services/service-user-details.service';

@Component({
  selector: 'app-retrieve-service-user-page',
  templateUrl: './retrieve-service-user-page.component.html',
  styleUrls: ['./retrieve-service-user-page.component.css', '../../../prsb-styles.css', '../../../esea-styles.css']
})
export class RetrieveServiceUserPageComponent implements OnInit {

  stakeholderNo: String = '';
  stakeholder: Stakeholder | undefined;
  stakeholderNotFound: boolean = false;

  constructor(private serviceUserServ: ServiceUserDetailsService) { }

  setStakeholderNo() {
    this.serviceUserServ.setStakeholderNo(this.stakeholderNo);
  }

  /**
   * Searches stakeholders for SN matching user input.
   * Navigates to services requestor details page if found, displays error message if not.
   */
  getStakeholder(): void {

    this.serviceUserServ.getStakeholder(Number(this.stakeholderNo))
      .subscribe(sh => {
        this.stakeholder = sh

        if (this.stakeholder != null)
          this.serviceUserServ.navigateToServiceUserDetails();
        else {
          this.stakeholderNotFound = true;
        }
      });

  }

  ngOnInit(): void {
  }

}
