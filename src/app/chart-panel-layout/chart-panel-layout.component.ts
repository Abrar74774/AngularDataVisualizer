import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations';

@Component({
  selector: 'app-chart-panel-layout',
  templateUrl: './chart-panel-layout.component.html',
  styleUrls: ['./chart-panel-layout.component.scss'],
  animations: [slideInAnimation],
})
export class ChartPanelLayoutComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Bar Chart',
        link: './BarChart',
        index: 0,
      },
      {
        label: 'Line Chart',
        link: './LineChart',
        index: 1,
      },
      {
        label: 'Pie Chart',
        link: './PieChart',
        index: 2,
      },
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find((tab) => tab.link === '.' + this.router.url)
      );
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
