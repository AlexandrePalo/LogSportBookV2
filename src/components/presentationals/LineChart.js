import React, { Component } from 'react'
import Chart from 'chart.js'

class LineChart extends Component {
  componentDidMount () {
    var ctx = this.refs.chart
    var scatterChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.props.labels,
        datasets: [{
          label: "Volume d'entraînement",
          data: this.props.data,
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          spanGaps: false,
        }]
      },
      options: {
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              displayFormats: {
              	'millisecond': 'MMM DD',
                'second': 'MMM DD',
                'minute': 'MMM DD',
                'hour': 'MMM DD',
                'day': 'MMM DD',
                'week': 'MMM DD',
                'month': 'MMM DD',
                'quarter': 'MMM DD',
                'year': 'MMM DD',
              }
            }
          }],
          yAxes: [{
            type: 'linear',
            ticks: {
              suggestedMin: Math.min(...this.props.data) - 5,
            }
          }]
        },
      }
    })
  }

  render () {
    return (
      <canvas ref="chart" width="400" height="100"></canvas>
    )
  }
}

export default LineChart
