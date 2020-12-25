import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PatientService} from '../../../services/patient.service';
import {Patient} from '../../../modules/patient';

@Component({
  selector: 'app-manage-patient',
  templateUrl: './manage-patient.component.html',
  styleUrls: ['./manage-patient.component.css']
})
export class ManagePatientComponent implements OnInit {
  patient: Patient = new Patient();
  constructor(private router: Router,private patienttService: PatientService ) { }

  ngOnInit(): void {
  }
  OmSubmitPatient(){
    this.patienttService.savePatient(this.patient).subscribe(result => this.gotoListPatient());
  }
  gotoListPatient(){
    this.router.navigate(['patients']);
  }
}
