import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChartDataService {
  exmpl = 'yes';
  constructor() {}

  private dataSource = new BehaviorSubject([
    {
      id: 1,
      name: 'Sunday',
      value: 40,
    },
    {
      id: 2,
      name: 'Monday',
      value: 50,
    },
    {
      id: 3,
      name: 'Tuesday',
      value: 80,
    },
  ]);

  currentData = this.dataSource.asObservable();

  ngOnInit(): void {}

  addDataField() {
    let datafields = this.dataSource.value;
    if (datafields.length < 5) {
      datafields.push({
        id: datafields.length + 1,
        name: '',
        value: null,
      });
      this.dataSource.next(datafields);
    } else {
      alert('More datafields option coming soon');
    }
  }

  removeDataField() {
    let datafields = this.dataSource.value;
    if (datafields.length) {
      datafields.pop();
      this.dataSource.next(datafields);
    } else {
      alert('No datafields to remove');
    }
  }

  changeName(data) {
    let datafields = this.dataSource.value;
    datafields.filter((dataField) => dataField.id === data.id)[0].name =
      data.name;
    this.dataSource.next(datafields);
    console.log('value changed to', data);
  }

  changeValue(data) {
    let datafields = this.dataSource.value;
    datafields.filter((dataField) => dataField.id === data.id)[0].value =
      data.value;
    this.dataSource.next(datafields);
    console.log('value changed to', data);
  }
}
