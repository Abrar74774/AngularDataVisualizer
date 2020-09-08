import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChartDataService } from '../chart-data.service';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  datafields;

  constructor(private chartData: ChartDataService) {}

  ngOnInit(): void {
    this.chartData.currentData.subscribe((data) => {
      this.datafields = data;
    });
  }

  addDataField() {
    this.chartData.addDataField();
  }

  removeDataField() {
    this.chartData.removeDataField();
  }

  setName(dataId: number, event) {
    this.chartData.changeName({ id: dataId, name: event.target.value });
  }

  setValue(dataId: number, event) {
    this.chartData.changeValue({
      id: dataId,
      value: parseFloat(event.target.value),
    });
  }
}
