import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Patient} from '../../../modules/patient';
import {PatientService} from '../../../services/patient.service';
import {Hopital} from '../../../modules/hopital';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {
   patient: Patient = new Patient();
   patients: Patient[];
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getAll().subscribe(data => {this.patients = data; });
  }
  delete(patient: Patient){
    this.patientService.deletePatient(patient).subscribe((response) => {this.ngOnInit(); });
  }


}
