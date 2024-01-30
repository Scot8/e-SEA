import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, map, of, take } from 'rxjs';
import { Stakeholder } from '../interfaces/Stakeholder';
import { STAKEHOLDERS } from '../mock-sh-data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserDetailsService {

  constructor(private router : Router, private httpClient: HttpClient) { }

  stakeholderNumber : String = '';
  stakeholder : Stakeholder | undefined;

  setStakeholderNo(newStakeholderNo : String)
  {
    this.stakeholderNumber = newStakeholderNo;
  }

  getStakeholderNo()
  {
    return this.stakeholderNumber;
  }

  // getStakeholder()
  // {
  //   this.stakeholder = this.findStakeholderByNum(Number(this.stakeholderNumber));

  //   return this.stakeholder;
  // }

  getStakeholder(shNum: Number) : Observable<Stakeholder>{
    //console.log(shNum);
    //let stakeholderNumber = shNum;

    
    let springApi = `http://localhost:8080/esea-api/stakeholder/${shNum}`;
    //this.httpClient = { get: (springApi)=> of(springApi).pipe(delay(1000), take(1)) }

    // this.httpClient.get(springApi)
    //   .subscribe((result: any) => {
    //     this.stakeholder = result;
    //     console.log(this.stakeholder);
        
    //   });

      return this.httpClient.get(springApi).pipe(
        //delay(2000),
        map((result: any) => {
          console.log(result);
          return result as Stakeholder;
        }
      ));


    //const stakeholder = STAKEHOLDERS.find(sh => sh.stakeholderNumber === shNum)!;
    //return of(stakeholder);
  }


  // getStakeholder(shNum: Number): Observable<Stakeholder> {
  //   const springApi = `http://localhost:8080/esea-api/stakeholder/{shNum}`;


  //   const stakeholder = STAKEHOLDERS.find(sh => sh.stakeholderNumber === shNum)!;
  //   return of(stakeholder);
  // }

  // findStakeholderByNum(stakeholderNo : Number) {
  //   this.stakeholder = STAKEHOLDERS.find(sn => sn.stakeholderNo === stakeholderNo)!;
  //   return this.stakeholder;
  // }

  navigateToServiceUserDetails(){
    this.router.navigate(['service-user-details-page']);
  }

  //Eric mods - Jan 14 - TESTING PURPOSES
  // getStakeholders(): Observable<Stakeholder[]> {
  //   const stakeholders = of(STAKEHOLDERS);
  //   return stakeholders;
  // }

}
