import { Component, OnInit, Input } from '@angular/core';
import { Legend } from 'src/app/Models/legend';
import { ActivatedRoute } from '@angular/router';
import { LegendService } from 'src/app/services/legend.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-legend-details',
  templateUrl: './legend-details.component.html',
  styleUrls: ['./legend-details.component.css']
})
export class LegendDetailsComponent implements OnInit {

  @Input() legend: Legend;
  constructor(
    private route: ActivatedRoute,
    private legendService: LegendService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getLegend();
  }

  getLegend(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.legendService.getLegend(id).subscribe(data => this.legend = data);
  }
  goBack(): void {
    this.location.back();
  }
}
