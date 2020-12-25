import { Component, OnInit } from '@angular/core';
import {MedecinService} from '../../../services/medecin.service';
import {Medecin} from '../../../modules/medecin';
import {Hopital} from '../../../modules/hopital';

@Component({
  selector: 'app-list-medecins',
  templateUrl: './list-medecins.component.html',
  styleUrls: ['./list-medecins.component.css']
})
export class ListMedecinsComponent implements OnInit {
   medecins: Medecin[];
   medecin: Medecin;
  constructor(private medecinService: MedecinService) {
    this.medecin = new Medecin();
  }

  ngOnInit(): void {
    this.medecinService.getAll().subscribe(data => {this.medecins = data; });
  }
  delete(medecin: Medecin): void{
    this.medecinService.deleteMedecin(medecin).subscribe((response) => {this.ngOnInit(); });
  }


}
