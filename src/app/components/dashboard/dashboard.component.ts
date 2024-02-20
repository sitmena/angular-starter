import {Component, OnInit} from '@angular/core';
import {ChartModule} from "primeng/chart";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ChartModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  data: any;
  options: any;

  barData: any;
  barOptions: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
      ]
    };
    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };



    const barDocumentStyle = getComputedStyle(document.documentElement);
    const barTextColor = barDocumentStyle.getPropertyValue('--text-color');
    const textColorSecondary = barDocumentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = barDocumentStyle.getPropertyValue('--surface-border');

    this.barData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: barDocumentStyle.getPropertyValue('--blue-500'),
          borderColor: barDocumentStyle.getPropertyValue('--blue-500'),
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: barDocumentStyle.getPropertyValue('--pink-500'),
          borderColor: barDocumentStyle.getPropertyValue('--pink-500'),
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    this.barOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: barTextColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500
            }
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }

      }
    };
  }
}
