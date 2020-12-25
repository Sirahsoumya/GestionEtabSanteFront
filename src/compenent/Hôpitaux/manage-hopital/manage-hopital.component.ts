import { Component, OnInit } from '@angular/core';
import {HopitalService} from '../../../services/hopital.service';
import {Hopital} from '../../../modules/hopital';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manage-hopital',
  templateUrl: './manage-hopital.component.html',
  styleUrls: ['./manage-hopital.component.css']
})
export class ManageHopitalComponent implements OnInit {
  hopital = new Hopital();
  constructor(private hopitalService: HopitalService,private router: Router) {
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onSubmitHopital(){
    this.hopitalService.saveHopital(this.hopital).subscribe(result => this.gotoListHopitaux());
  }
  gotoListHopitaux(){
    this.router.navigate(['hopitaux']);
  }

}
