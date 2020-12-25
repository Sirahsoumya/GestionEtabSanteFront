import { Component, OnInit } from '@angular/core';
import {MedecinService} from '../../../services/medecin.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.component.html',
  styleUrls: ['./update-medecin.component.css']
})
export class UpdateMedecinComponent implements OnInit {
  medecin: any;
  constructor(private route: ActivatedRoute,private medecinService: MedecinService, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.medecinService.findMedecinById(id).subscribe(data => {this.medecin = data; });
  }
 OnSubmitUpdate(){
    this.medecinService.saveMedecin(this.medecin).subscribe(result => this.gotoNewListMedecin());
 }
  gotoNewListMedecin(){
    this.router.navigate(['medecins']);
  }
}
