import { Component, OnInit } from '@angular/core';
import {VoitureService} from '../service/voiture.service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {

  constructor(private service: VoitureService) { }

  ngOnInit(): void {
  }

}
