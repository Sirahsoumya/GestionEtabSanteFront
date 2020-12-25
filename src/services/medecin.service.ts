import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {Observable} from 'rxjs';
import {Hopital} from '../modules/hopital';
import {Medecin} from '../modules/medecin';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  public url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/medecins/';
  }
  public getAll(): Observable<Medecin[]>{
    return this.http.get<Medecin[]>(this.url + 'all');
  }
  public saveMedecin(medecin: Medecin){
    console.log("test");
    return this.http.post<Medecin>(this.url + 'save', medecin);
  }

  public deleteMedecin(medecin: Medecin){
    return this.http.delete(this.url + 'delete/' + medecin.id);
  }

  public findMedecinById(id){
    return this.http.get(this.url + '/findById/' + id);
  }

  public updateMedecin(medecin: Medecin){
    return this.http.patch(this.url + '/update/' + medecin.id, medecin);
  }

}
