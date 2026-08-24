import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'lib-boolean-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './boolean-chart.html',
})
export class BooleanChart {

  backgroundColor = input<string>('#cccccc');

  value = input<boolean>(false);

}