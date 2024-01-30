import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Stakeholder } from 'src/app/interfaces/Stakeholder';
import { ServiceRequestorDetailsService } from 'src/app/services/service-requestor-details.service';

@Component({
  selector: 'app-delete-a-service-page',
  templateUrl: './delete-a-service-page.component.html',
  styleUrls: ['./delete-a-service-page.component.css','../../../prsb-styles.css', '../../../esea-styles.css']
})
export class DeleteAServicePageComponent implements OnInit {

  constructor(private serviceRequestorServ : ServiceRequestorDetailsService) { }

  stakeholder! : Stakeholder;
  stakeholderNo : String = this.serviceRequestorServ.getStakeholderNo();

  currentDate = formatDate(new Date() , 'yyyy-MM-dd','en');
  selectedService : any;

  serviceEndDate : string ="";
  deleteSuccessful : boolean = false;

  deleteService(){
    this.stakeholder.stakeholderServices?.forEach((service, index) => {
      if(service.serviceName == this.selectedService)
        this.stakeholder.stakeholderServices?.splice(index, 1);
    });

    //this.stakeholder.stakeholderService?.splice(this.selectedService.indexOf(this.selectedService),1);

    this.deleteSuccessful = true;
  }

  getStakeholder(){
    this.serviceRequestorServ.getStakeholder()
      .subscribe(sh => this.stakeholder = sh);
  }

  ngOnInit(): void {
    this.getStakeholder();
  }

}
