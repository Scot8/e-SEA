import { Injectable } from '@angular/core';
import { Stakeholder } from '../interfaces/Stakeholder';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { STAKEHOLDERS } from '../mock-sh-data';
import { Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceRequestorDetailsService {

  stakeholderNumber : String = '';
  declare stakeholder : Stakeholder;

  constructor(private router : Router, private http : HttpClient) {
  }

  //Sets this.stakeholderNumber to number entered in Retrieve Service Requestor Details page
  setStakeholderNo(newStakeholderNo : String)
  {
    this.stakeholderNumber = newStakeholderNo;
  }

  //Returns stakeholderNumber
  getStakeholderNo()
  {
    return this.stakeholderNumber;
  }

  /**
   * Searches the list of Stakeholders in mock-sh-data.ts for the Stakeholder number set using the
   * retrieve service requestor page.
   *
   * Returns an Observable of type Stakeholder when found. null if not found.
   * @returns
   */
  getStakeholder() : Observable<Stakeholder>{
    const stakeholder = STAKEHOLDERS.find(sh => sh.stakeholderNumber === Number(this.getStakeholderNo()))!;
    return of(stakeholder);
  }

  /**
   * Method used to navigate to service-requestor-details-page.
   * Requires Router object created in constructor.
   */
   navigateToServiceRequestorDetails(){
    this.router.navigate(['service-requestor-details-page']);
  }


  //Java backend Connection*****************************************

  //***** API endpoints
  private eseaBackendUrl : string = "http://localhost:8080/esea-api";
  private allStakeholdersUrl : string = this.eseaBackendUrl + "/stakeholders";
  private stakeholderUrl : string = this.eseaBackendUrl + "/stakeholder/";


  /**
   * Returns all stakeholders from backend data. Likely won't be needed for final product, was used for testing.
   * @returns
   */
  public findAllStakeholders(): Observable<Stakeholder[]>{
    return this.http.get<Stakeholder[]>(this.allStakeholdersUrl);
  }


  //////////TODO: FIND WAY TO ADD stakeholderEnrolledServices TO THIS INSTANCE OF STAKEHOLDER, OR CREATE NEW
  /////////       INSTANCE OF StakeholderServices THAT WILL BE RESPONSIBLE FOR HOLDING THIS DATA.
  //////////TODO: ONCE DATA IS BEING ALLOCATED PROPERLY, MAKE CHANCES TO OTHER COMPONENT TS FILES TO MAKE APPROPRIATE CALLS


  /**
   * Sends the stakeholderNumber entered from Retrieve Service Requestor Details page to API URL,
   * subscribes response to Observable of type stakeholder which can be obtained.
   * @returns
   */
  public findStakeholderByStakeholderNumber() : Observable<Stakeholder>
  {
    this.http.get<Stakeholder>(this.stakeholderUrl +  Number(this.getStakeholderNo()))
      .subscribe(sh=>this.stakeholder = sh);

    return of(this.stakeholder);
  }


  /**
   * Returns the current instance of stakeholder for use
   * @returns stakeholder
   */
  getStakeholderBackEnd() : Stakeholder{
    return this.stakeholder;
  }

  //****************************************************

}
