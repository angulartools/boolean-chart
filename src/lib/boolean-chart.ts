import { Component, Input } from '@angular/core';

@Component({
    selector: 'lib-boolean-chart',
    templateUrl: './boolean-chart.html',
})
export class BooleanChart {

  @Input() backgroundColor;
  @Input() value;

}
