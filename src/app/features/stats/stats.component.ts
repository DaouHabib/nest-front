import { Component, OnInit } from '@angular/core';
import { SondageService } from '../../shared/services/sondage.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions: any;
  constructor(private sondageService :SondageService) { }

  ngOnInit(): void {
    this.initchart();
  }
  initchart() {
       let connect = localStorage.getItem('connectedId');
       this.sondageService.getlastVotes(connect).subscribe(res => {
          console.log(res);
        let e1,e2,e3 :any;
          e1=res[0];
          e2=res[1];
          e3=res[2];

          this.chartOptions = {
             chart: {
                type: 'column'
             },
             title: {
                text: 'Statistique des votes'
             },
             subtitle: {
                text: ''
             },
             xAxis: {
                categories: [e1.question,e2.question,e3.question],
                crosshair: true
             },
             yAxis: {
                min: 0,
                title: {
                   text: 'Votes'
                }
             },
             tooltip: {
                headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
                   '<td style = "padding:0"><b>{point.y:.1f}</b></td></tr>', footerFormat: '</table>', shared: true, useHTML: true
             },
             plotOptions: {
                column: {
                   pointPadding: 0.2,
                   borderWidth: 0
                }
             },
             series: [{
                name: 'Votes oui',
                data: [e1.oui,e2.oui,e3.oui]
             },
             {
                name: 'Votes Non',
                data: [e1.non,e2.non,e3.non]
             },

             ]
          };
    
    })
 }
}
