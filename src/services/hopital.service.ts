import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hopital} from '../modules/hopital';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HopitalService {
  public url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/hopitaux';
  }
  public getAll(): Observable<Hopital[]>{
    return this.http.get<Hopital[]>(this.url + '/all');
  }
  public saveHopital(hopital: Hopital){
    return this.http.post<Hopital>(this.url + '/save', hopital);
  }
  public deleteHopital(hopital: Hopital){
    return this.http.delete(this.url + '/delete/' + hopital.id);
  }
  public findById(id){
    return this.http.get(this.url + '/findById/' + id);
  }
  public updateHopital(hopital: Hopital){
    return this.http.patch(this.url + '/update/' + hopital.id, hopital );
  }

}
