import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';
import { D3ChartComponent } from '../d3chart/d3chart.component';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public dataSource = {
    datasets: [
                {
                    data: [],
                    backgroundColor: [
                        '#a83232',
                        '#a88132',
                        '#83a832',
                        '#46a832',
                        '#46a832',
                        '#3246a8',
                        '#d272e8',

                    ],
                }],
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: []
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  
    this.dataService.fetchData()
    .subscribe((res: any)=>{
      for (var i = 0; i < res.mybudget.length; i++) {
                    this.dataSource.datasets[0].data[i] = res.mybudget[i].budget;
                    this.dataSource.labels[i] = res.mybudget[i].title;
                    
      }
      
this.createChart();
    });
    
  }

  createChart() {
    var ctx = document.getElementById('myChart');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: this.dataSource
    });
  

}

}
