import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

const routes: Routes = [
  { path: '', redirectTo: 'BarChart', pathMatch: 'full' },
  {
    path: 'BarChart',
    component: BarChartComponent,
    data: { animation: 'BarPage' },
  },
  {
    path: 'LineChart',
    component: LineChartComponent,
    data: { animation: 'LinePage' },
  },
  {
    path: 'PieChart',
    component: PieChartComponent,
    data: { animation: 'PiePage' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
