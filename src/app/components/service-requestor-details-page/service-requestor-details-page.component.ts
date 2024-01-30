import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/interfaces/Service';
import { Stakeholder } from 'src/app/interfaces/Stakeholder';
import { StakeholderService } from 'src/app/interfaces/StakeholderService';
import { ServiceRequestorDetailsService } from 'src/app/services/service-requestor-details.service';

@Component({
  selector: 'app-service-requestor-details-page',
  templateUrl: './service-requestor-details-page.component.html',
  styleUrls: ['./service-requestor-details-page.component.css','../../../prsb-styles.css', '../../../esea-styles.css']
})
export class ServiceRequestorDetailsPageComponent implements OnInit {

  stakeholder!: Stakeholder;
  shServices : any;


  constructor(private serviceRequestorServ : ServiceRequestorDetailsService) { }

  //Java backend test***********
  stakeholders? : Stakeholder[];
  declare shServices2 : StakeholderService


  /**
   * Retrieves stakeholder identified on Retrieve Service Requestor page
   * and assigns their services to shServices to be used in Service Requestor Details page dropdown.
   */
  getStakeholder()
  {
    //***
    this.stakeholder = this.serviceRequestorServ.getStakeholderBackEnd();

    //Use this for retrieving the observable of type stakeholder using mock-sh-data.ts dummy data
    // this.serviceRequestorServ.getStakeholder()
    //   .subscribe(sh => this.stakeholder = sh);


    this.shServices = this.stakeholder.stakeholderServices;
  }


  ngOnInit(): void {
    this.getStakeholder();


    //Java backend test - Retrieves all stakeholders from backend data****************
    this.serviceRequestorServ.findAllStakeholders().subscribe(data => {
      this.stakeholders = data;
    });
  }

}
