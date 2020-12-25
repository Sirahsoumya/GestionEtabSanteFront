import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListHopitauxComponent} from '../compenent/Hôpitaux/list-hopitaux/list-hopitaux.component';
import {ManageHopitalComponent} from '../compenent/Hôpitaux/manage-hopital/manage-hopital.component';
import {ListMedecinsComponent} from '../compenent/Medecins/list-medecins/list-medecins.component';
import {ManageMedecinComponent} from '../compenent/Medecins/manage-medecin/manage-medecin.component';
import {ListPatientsComponent} from '../compenent/Patients/list-patients/list-patients.component';
import {ManagePatientComponent} from '../compenent/Patients/manage-patient/manage-patient.component';
import {AcceuilComponent} from '../compenent/acceuil/acceuil.component';
import {UpdateHopitalComponent} from '../compenent/Hôpitaux/update-hopital/update-hopital.component';
import {UpdateMedecinComponent} from '../compenent/Medecins/update-medecin/update-medecin.component';
import {UpdatePatientComponent} from '../compenent/Patients/update-patient/update-patient.component';

const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'medecins', component: ListMedecinsComponent },
  { path: 'hopitaux', component: ListHopitauxComponent },
  { path: 'patients', component: ListPatientsComponent },
  { path: 'manageMedecin', component: ManageMedecinComponent },
  { path: 'managePatient', component: ManagePatientComponent },
  { path: 'manageHopital', component: ManageHopitalComponent },
  { path: 'updateHopital/:id', component: UpdateHopitalComponent },
  { path: 'updateMedecin/:id', component: UpdateMedecinComponent },
  { path: 'updatePatient/:id', component: UpdatePatientComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
