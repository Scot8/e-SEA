import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/interfaces/Service';
import { Stakeholder } from 'src/app/interfaces/Stakeholder';
import { ServiceRequestorDetailsService } from 'src/app/services/service-requestor-details.service';

@Component({
  selector: 'app-manage-services-details-page',
  templateUrl: './manage-services-details-page.component.html',
  styleUrls: ['./manage-services-details-page.component.css','../../../prsb-styles.css', '../../../esea-styles.css']
})
export class ManageServicesDetailsPageComponent implements OnInit {

  constructor(private serviceRequestorServ : ServiceRequestorDetailsService) { }

  stakeholder! : Stakeholder;
  shServices : any;
  stakeholderNo : String = this.serviceRequestorServ.getStakeholderNo();

  /**
   * Retrieves stakeholder input on Retrieve Service Requestor page and assigns
   * their services to the dropdown menu of Manage Services Page.
   */
  getStakeholder()
  {
    //this.serviceRequestorServ.getStakeholder(Number(this.stakeholderNo))
    this.serviceRequestorServ.getStakeholder()
      .subscribe(sh => this.stakeholder = sh);
    this.shServices = this.stakeholder.stakeholderServices;
  }


  ngOnInit(): void {
    this.getStakeholder();
  }

}
