import { Component, OnInit } from '@angular/core';
import { Stakeholder } from 'src/app/interfaces/Stakeholder';
import { ServiceRequestorDetailsService } from 'src/app/services/service-requestor-details.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-retrieve-service-requestor-page',
  templateUrl: './retrieve-service-requestor-page.component.html',
  styleUrls: ['./retrieve-service-requestor-page.component.css','../../../prsb-styles.css', '../../../esea-styles.css']
})
export class RetrieveServiceRequestorPageComponent implements OnInit {

  stakeholderNo: String = '';
  declare stakeholder : Stakeholder;
  stakeholderNotFound : boolean = false;

  constructor(private serviceRequestorServ : ServiceRequestorDetailsService) { }


  /**
   * Sends user input stakeholder number to service requestor service and
   * uses findStakeholderByStakeholderNumber() method to retrieve either a stakeholder object or null if stakeholder doesn't exist
   */
  setStakeholderNo()
  {
    this.serviceRequestorServ.setStakeholderNo(this.stakeholderNo);

    //Added to work with Java backend
    this.serviceRequestorServ.findStakeholderByStakeholderNumber()
      .subscribe(sh => this.stakeholder = sh);
  }

  /**
   * THIS USES mock-sh-data.ts DUMMY DATA, NOT BACKEND DATA
   *
   * Calls the getStakeholder() method from the service-requestor service.
   * Navigates to services requestor details page if found, displays error message if not.
   */
  // getStakeholder(): void{
  //   this.serviceRequestorServ.getStakeholder()
  //     .subscribe(sh => this.stakeholder = sh);

  //   if(this.stakeholder != null)
  //     this.serviceRequestorServ.navigateToServiceRequestorDetails();
  //   else
  //     this.stakeholderNotFound=true;
  // }


  //Java backend test**********************************************************

  /**
   * Assigns the Stakeholder object retrieved in service requestor service to this instance of a stakeholder object.
   *
   * Validates if an object is returned, or null and proceeds accordingly.
   */
  getStakeholder():void{

    this.stakeholder = this.serviceRequestorServ.getStakeholderBackEnd();

      if(this.stakeholder != null)
        this.serviceRequestorServ.navigateToServiceRequestorDetails();
      else
        this.stakeholderNotFound=true;
  }
  //****************************************************************************

  ngOnInit(): void {
  }

}
