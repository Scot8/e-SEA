import { Component, OnInit } from '@angular/core';
import { Stakeholder } from 'src/app/interfaces/Stakeholder';
import { ServiceRequestorDetailsService } from 'src/app/services/service-requestor-details.service';

@Component({
  selector: 'app-manage-eaccess-details-page',
  templateUrl: './manage-eaccess-details-page.component.html',
  styleUrls: ['./manage-eaccess-details-page.component.css', '../../../prsb-styles.css', '../../../esea-styles.css']
})
export class ManageEaccessDetailsPageComponent implements OnInit {

  selectedDNRadio :String = "";

  certs: String[] = ["CN=EBS Test Client, OU=Health Solutions Delivery Branch, O=Health Services I&IT Cluster, L=Kingston, st=ON, C=CA",
  "CN=EBS Test Client2, OU=Health Solutions Delivery Branch, O=Health Services I&IT Cluster, L=Kingston, st=ON, C=CA",
  "CN=EBS Test Client3, OU=Health Solutions Delivery Branch, O=Health Services I&IT Cluster, L=Kingston, st=ON, C=CA"];

  selectedCert:String = "";
  newCert:String = "";
  newDNEntry:String ="";
  stakeholderNo : String = this.serviceRequestorServ.getStakeholderNo();

  constructor(private serviceRequestorServ : ServiceRequestorDetailsService ) { }

  // stakeholder : Stakeholder = this.serviceRequestorServ.getStakeholder();

  stakeholder! : Stakeholder;

  getStakeholder()
  {
    this.serviceRequestorServ.getStakeholder()
      .subscribe(sh => this.stakeholder = sh);
  }

  addCert()
  {
    this.certs.push(this.newCert);
    this.newCert = "";
  }

  changeCert()
  {
    if (this.selectedDNRadio == "update"){
      this.certs.splice(this.certs.indexOf(this.selectedCert),1, this.newDNEntry);
      this.selectedDNRadio = "";
    }
    else if (this.selectedDNRadio == "remove"){
      this.certs.splice(this.certs.indexOf(this.selectedCert),1);
      this.selectedDNRadio = "";
    }
    this.selectedCert="";
  }

  ngOnInit(): void {
    this.getStakeholder();
  }
}
