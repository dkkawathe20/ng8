import { Component, OnInit } from '@angular/core';
import { LegendService } from '../../services/legend.service';
import { Legend } from '../../Models/legend';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  legends: Legend[] = [];
  constructor(
    private legendService: LegendService
  ) { }

  ngOnInit() {
    this.getLegends();
  }

  getLegends(): void {
    this.legendService.getLegends().subscribe(data => this.legends = data.slice(1,5));
  }

}
