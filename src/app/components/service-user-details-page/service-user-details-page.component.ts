import { Component, OnInit } from '@angular/core';
import { Stakeholder } from 'src/app/interfaces/Stakeholder';
import { ServiceUserDetailsService } from 'src/app/services/service-user-details.service';

@Component({
  selector: 'app-service-user-details-page',
  templateUrl: './service-user-details-page.component.html',
  styleUrls: ['./service-user-details-page.component.css','../../../prsb-styles.css', '../../../esea-styles.css']
})
export class ServiceUserDetailsPageComponent implements OnInit {

  stakeholder!: Stakeholder;
  stakeholderNo : String = this.serviceUserServ.getStakeholderNo();

  constructor(private serviceUserServ : ServiceUserDetailsService) { }

  getStakeholder()
  {
    this.serviceUserServ.getStakeholder(Number(this.stakeholderNo))
      .subscribe(sh => this.stakeholder = sh);
  }

  ngOnInit(): void {
    this.getStakeholder();
  }

}
