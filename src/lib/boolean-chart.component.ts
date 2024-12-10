import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'lib-boolean-chart',
    templateUrl: './boolean-chart.component.html',
    styleUrls: ['./boolean-chart.component.scss'],
    standalone: true,
    imports: [NgStyle]
})
export class BooleanChartComponent {

  @Input() backgroundColor;
  @Input() value;

}
