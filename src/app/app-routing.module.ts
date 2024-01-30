import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAServicePageComponent } from './components/add-a-service-page/add-a-service-page.component';
import { DeleteAServicePageComponent } from './components/delete-a-service-page/delete-a-service-page.component';
import { EndAllServicesPageComponent } from './components/end-all-services-page/end-all-services-page.component';
import { ManageEaccessDetailsPageComponent } from './components/manage-eaccess-details-page/manage-eaccess-details-page.component';
import { ManageServicesDetailsPageComponent } from './components/manage-services-details-page/manage-services-details-page.component';
import { ManageSuspensionDetailsPageComponent } from './components/manage-suspension-details-page/manage-suspension-details-page.component';
import { RetrieveServiceRequestorPageComponent } from './components/retrieve-service-requestor-page/retrieve-service-requestor-page.component';
import { RetrieveServiceUserPageComponent } from './components/retrieve-service-user-page/retrieve-service-user-page.component';
import { RetrieveVendorDetailsPageComponent } from './components/retrieve-vendor-details-page/retrieve-vendor-details-page.component';
import { ServiceRequestorDetailsPageComponent } from './components/service-requestor-details-page/service-requestor-details-page.component';
import { ServiceUserDetailsPageComponent } from './components/service-user-details-page/service-user-details-page.component';
import { ValidateCertificateAuthorityPageComponent } from './components/validate-certificate-authority-page/validate-certificate-authority-page.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { DisplayAllVendorsDetailsPageComponent } from './components/display-all-vendors-details-page/display-all-vendors-details-page.component';
import { ManageVendorsPageComponent } from './components/manage-vendors-page/manage-vendors-page.component';

/**
 * Defining the routes that will take user to the appropriate app screens.
 * Nav links are in the header. Router output is in the app.component.html
 */
const routes:Routes = [
  {path: 'welcome-page', component: WelcomePageComponent},
  {path: '', redirectTo: '/welcome-page', pathMatch: 'full'},
  {path: 'validate-certificate-authority-page', component: ValidateCertificateAuthorityPageComponent},
  {path: 'retrieve-vendor-details-page', component: RetrieveVendorDetailsPageComponent},
  {path: 'service-requestor-details-page', component: ServiceRequestorDetailsPageComponent},
  {path: 'manage-eaccess-details-page', component: ManageEaccessDetailsPageComponent},
  {path: 'manage-services-details-page', component: ManageServicesDetailsPageComponent},
  {path: 'add-a-service-page', component:AddAServicePageComponent},
  {path: 'delete-a-service-page', component:DeleteAServicePageComponent},
  {path: 'end-all-services-page', component:EndAllServicesPageComponent},
  {path: 'service-user-details-page', component:ServiceUserDetailsPageComponent},
  {path: 'manage-suspension-details-page', component:ManageSuspensionDetailsPageComponent},
  {path: 'retrieve-service-user-page', component:RetrieveServiceUserPageComponent},
  {path: 'retrieve-service-requestor-page', component:RetrieveServiceRequestorPageComponent},
  {path: 'display-all-vendors-details-page', component: DisplayAllVendorsDetailsPageComponent},
  {path: 'manage-vendors-page', component: ManageVendorsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
