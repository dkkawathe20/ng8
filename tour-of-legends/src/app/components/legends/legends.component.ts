import { Component, OnInit } from '@angular/core';
import { Legend } from 'src/app/Models/legend';
import { LEGENDS } from 'src/app/data/mock-legends';
import { LegendService } from 'src/app/services/legend.service';

@Component({
  selector: 'app-legends',
  templateUrl: './legends.component.html',
  styleUrls: ['./legends.component.css']
})
export class LegendsComponent implements OnInit {


  legends: Legend[];
  selectedLegend: Legend;

  constructor(
    private legendService: LegendService,
  ) { }

  ngOnInit() {
    this.getLegends();
  }

  onSelect(legend: Legend): void {
    this.selectedLegend = legend;
  }

  getLegends(): void {
    this.legendService.getLegends().subscribe(data => {
      this.legends = data;
    });
  }

}
