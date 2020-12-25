import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HopitalService} from '../../../services/hopital.service';
import {Hopital} from '../../../modules/hopital';

@Component({
  selector: 'app-list-hopitaux',
  templateUrl: './list-hopitaux.component.html',
  styleUrls: ['./list-hopitaux.component.css']
})
export class ListHopitauxComponent implements OnInit {
   hopiteaux: Hopital[];
   hopital: Hopital;
  constructor(private hopitalService: HopitalService) {
    this.hopital = new Hopital();
  }

  ngOnInit(): void {
     this.hopitalService.getAll().subscribe(data => {this.hopiteaux = data; });
  }
  delete(hopital: Hopital): void{
    console.log("delete hopital");
    this.hopitalService.deleteHopital(hopital).subscribe((response) => {this.ngOnInit(); });
  }

}
