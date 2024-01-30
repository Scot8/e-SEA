import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/interfaces/Service';
import { Stakeholder } from 'src/app/interfaces/Stakeholder';
import { SERVICES } from 'src/app/mock-services';
import { ManageServicesService } from 'src/app/services/manage-services.service';
import { ServiceRequestorDetailsService } from 'src/app/services/service-requestor-details.service';

@Component({
  selector: 'app-add-a-service-page',
  templateUrl: './add-a-service-page.component.html',
  styleUrls: ['./add-a-service-page.component.css' ,'../../../prsb-styles.css', '../../../esea-styles.css']
})
export class AddAServicePageComponent implements OnInit {

  constructor( private manageServiceServ : ManageServicesService,
               private serviceRequestorServ : ServiceRequestorDetailsService)
  { }

  services : Service[] = [];
  stakeholder! : Stakeholder;
  stakeholderNo : String = this.serviceRequestorServ.getStakeholderNo();


  currentDate = formatDate(new Date() , 'yyyy-MM-dd','en');
  selectedService : any;
  newServiceEffectiveDate : string ="";
  addSuccessful = false;
  // serviceAlreadyExists = false;

  addService()
  {

    //TODO: Add validation for repeat services
      if(this.newServiceEffectiveDate != "")
        this.selectedService.effectiveDate = this.newServiceEffectiveDate;
      else
        this.selectedService.effectiveDate=this.currentDate;

      this.stakeholder.stakeholderServices?.push(this.selectedService)

      //TODO: add timeout so this disappears after a few seconds
      this.addSuccessful = true

  }

  getStakeholder()
  {
    this.serviceRequestorServ.getStakeholder()
      .subscribe(sh => this.stakeholder = sh);
  }


  getServices(): void {
    this.manageServiceServ.getServices()
      .subscribe(services=>this.services = services);
  }

  ngOnInit(): void {
    this.getServices();
    this.getStakeholder();
  }

}
