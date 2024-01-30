import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceRequestorDetailsPageComponent } from './components/service-requestor-details-page/service-requestor-details-page.component';
import { ManageEaccessDetailsPageComponent } from './components/manage-eaccess-details-page/manage-eaccess-details-page.component';
import { ManageServicesDetailsPageComponent } from './components/manage-services-details-page/manage-services-details-page.component';
import { AddAServicePageComponent } from './components/add-a-service-page/add-a-service-page.component';
import { DeleteAServicePageComponent } from './components/delete-a-service-page/delete-a-service-page.component';
import { EndAllServicesPageComponent } from './components/end-all-services-page/end-all-services-page.component';
import { ServiceUserDetailsPageComponent } from './components/service-user-details-page/service-user-details-page.component';
import { ManageSuspensionDetailsPageComponent } from './components/manage-suspension-details-page/manage-suspension-details-page.component';
import { RetrieveServiceUserPageComponent } from './components/retrieve-service-user-page/retrieve-service-user-page.component';
import { RetrieveServiceRequestorPageComponent } from './components/retrieve-service-requestor-page/retrieve-service-requestor-page.component';
import { RetrieveVendorDetailsPageComponent } from './components/retrieve-vendor-details-page/retrieve-vendor-details-page.component';
import { ValidateCertificateAuthorityPageComponent } from './components/validate-certificate-authority-page/validate-certificate-authority-page.component';
import { FormsModule } from '@angular/forms';
import { ServiceRequestorDetailsService } from './services/service-requestor-details.service';
import { ServiceUserDetailsService } from './services/service-user-details.service';
import { DisplayAllVendorsDetailsPageComponent } from './components/display-all-vendors-details-page/display-all-vendors-details-page.component';
import { ManageVendorsPageComponent } from './components/manage-vendors-page/manage-vendors-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    HeaderComponent,
    FooterComponent,
    ServiceRequestorDetailsPageComponent,
    ManageEaccessDetailsPageComponent,
    ManageServicesDetailsPageComponent,
    AddAServicePageComponent,
    DeleteAServicePageComponent,
    EndAllServicesPageComponent,
    ServiceUserDetailsPageComponent,
    ManageSuspensionDetailsPageComponent,
    RetrieveServiceUserPageComponent,
    RetrieveServiceRequestorPageComponent,
    RetrieveVendorDetailsPageComponent,
    ValidateCertificateAuthorityPageComponent,
    DisplayAllVendorsDetailsPageComponent,
    ManageVendorsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServiceRequestorDetailsService,
    ServiceUserDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
