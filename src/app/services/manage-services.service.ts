import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Service } from '../interfaces/Service';
import { SERVICES } from '../mock-services';

@Injectable({
  providedIn: 'root'
})
export class ManageServicesService {

  constructor() { }


  getServices(): Observable<Service[]> {
    const services = of(SERVICES);
    return services;
  }
}
