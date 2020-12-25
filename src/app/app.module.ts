import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ManageMedecinComponent } from '../compenent/Medecins/manage-medecin/manage-medecin.component';
import { ManageHopitalComponent } from '../compenent/Hôpitaux/manage-hopital/manage-hopital.component';
import { AcceuilComponent } from '../compenent/acceuil/acceuil.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ManagePatientComponent} from '../compenent/Patients/manage-patient/manage-patient.component';
import {ListPatientsComponent} from '../compenent/Patients/list-patients/list-patients.component';
import {ListHopitauxComponent} from '../compenent/Hôpitaux/list-hopitaux/list-hopitaux.component';
import {ListMedecinsComponent} from '../compenent/Medecins/list-medecins/list-medecins.component';
import {HopitalService} from '../services/hopital.service';
import {MedecinService} from '../services/medecin.service';
import {PatientService} from '../services/patient.service';
import { UpdatePatientComponent } from '../compenent/Patients/update-patient/update-patient.component';
import { UpdateMedecinComponent } from '../compenent/Medecins/update-medecin/update-medecin.component';
import { UpdateHopitalComponent } from '../compenent/Hôpitaux/update-hopital/update-hopital.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagePatientComponent,
    ManageMedecinComponent,
    ManageHopitalComponent,
    AcceuilComponent,
    ListPatientsComponent,
    ListMedecinsComponent,
    ListHopitauxComponent,
    UpdatePatientComponent,
    UpdateMedecinComponent,
    UpdateHopitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    HopitalService,
    MedecinService,
    PatientService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
