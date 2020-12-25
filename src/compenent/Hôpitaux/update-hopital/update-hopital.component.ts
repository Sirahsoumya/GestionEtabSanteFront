import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HopitalService} from '../../../services/hopital.service';
import {Hopital} from '../../../modules/hopital';

@Component({
  selector: 'app-update-hopital',
  templateUrl: './update-hopital.component.html',
  styleUrls: ['./update-hopital.component.css']
})
export class UpdateHopitalComponent implements OnInit {
  hopital: any;
  constructor(private route: ActivatedRoute, private hopitalService: HopitalService,private router: Router) {
             }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.hopitalService.findById(id).subscribe(data => {this.hopital = data; });

  }
  OnSubmitUpdate(){
    this.hopitalService.updateHopital(this.hopital).subscribe(result => this.gotoNewListHopital());
  }
  gotoNewListHopital(){
    this.router.navigate(['hopitaux']);
  }

}
