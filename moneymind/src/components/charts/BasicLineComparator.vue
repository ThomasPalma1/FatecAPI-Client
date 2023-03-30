<template>
  <div>
    <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
  </div>
</template>

<script lang="ts">
import exportingInit from "highcharts/modules/exporting";
import Highcharts from "highcharts";

exportingInit(Highcharts);

export default {
  data() {
    return {
      chartOptions: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
          borderColor: "#868181",
          borderWidth: 1,
          borderRadius: 5,
        },
        title: {
          text: "Browser market shares in May, 2020",
          align: "left",
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        accessibility: {
          point: {
            valueSuffix: "%",
          },
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b>: {point.percentage:.1f} %",
            },
          },
        },
        series: [
          {
            name: "Brands",
            colorByPoint: true,
            data: [
              {
                name: "Chrome",
                y: 70.67,
                sliced: true,
                selected: true,
              },
              {
                name: "Edge",
                y: 14.77,
              },
              {
                name: "Firefox",
                y: 4.86,
              },
              {
                name: "Safari",
                y: 2.63,
              },
              {
                name: "Internet Explorer",
                y: 1.53,
              },
              {
                name: "Opera",
                y: 1.4,
              },
              {
                name: "Sogou Explorer",
                y: 0.84,
              },
              {
                name: "QQ",
                y: 0.51,
              },
              {
                name: "Other",
                y: 2.6,
              },
            ],
          },
        ],
      },
    };
  },
};
</script>
