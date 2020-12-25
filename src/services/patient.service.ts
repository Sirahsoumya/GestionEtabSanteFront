import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Medecin} from '../modules/medecin';
import {Patient} from '../modules/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
   private url: string;
  constructor( private  http: HttpClient) {this.url = 'http://localhost:8080/patients/';}
  public getAll(): Observable<Patient[]>{
    return this.http.get<Patient[]>(this.url + 'all');
  }
  public savePatient(patient: Patient){
    return this.http.post<Patient>(this.url + 'save', patient);
  }

  public deletePatient(patient: Patient){
    return this.http.delete(this.url + 'delete/' + patient.id);
  }

  public findPatientById(id){
    return this.http.get(this.url + '/findById/' + id);
  }

  public updatePatient(patient: Patient){
    return this.http.patch(this.url + '/update/' + patient.id, patient);
  }


}
