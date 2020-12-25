import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PatientService} from '../../../services/patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
   patient: any;
  constructor(private route: ActivatedRoute,private router: Router,private patienttService: PatientService ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.patienttService.findPatientById(id).subscribe(data => {this.patient = data; });
  }
  OmSubmitUpdatePatient(){
    this.patienttService.savePatient(this.patient).subscribe(result => this.gotoNewListPatient());
  }

  gotoNewListPatient(){
    this.router.navigate(['patients']);
  }

}
