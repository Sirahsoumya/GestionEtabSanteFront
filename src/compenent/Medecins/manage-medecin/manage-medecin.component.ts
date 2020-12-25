import { Component, OnInit } from '@angular/core';
import {MedecinService} from '../../../services/medecin.service';
import {Router} from '@angular/router';
import {Medecin} from '../../../modules/medecin';

@Component({
  selector: 'app-manage-medecin',
  templateUrl: './manage-medecin.component.html',
  styleUrls: ['./manage-medecin.component.css']
})
export class ManageMedecinComponent implements OnInit {
  medecin: Medecin = new Medecin();
  constructor(private medecinService: MedecinService, private router: Router) { }

  ngOnInit(): void {
  }
  OnSubmitMedecin(){
    this.medecinService.saveMedecin(this.medecin).subscribe(result => this.gotoListMedecin());
  }
  gotoListMedecin(){
    this.router.navigate(['medecins']);
  }

}
