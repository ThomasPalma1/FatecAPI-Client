<template>
    <div>
      <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
    </div>
  </template>
  
<script lang="ts">
import exportingInit from 'highcharts/modules/exporting'
import Highcharts from 'highcharts'

exportingInit(Highcharts)

export default {
  data() {
    return {
      chartOptions: {
        series: [
          {
            data: [1, 2, 3]
          }
        ]
      }
    };
  }
};
</script>
