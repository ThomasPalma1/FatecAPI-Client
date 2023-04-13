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
  props: {
    data: {
      type: Array,
      required: true
    },
    chartTitle: {
      type: String,
      required: true
    },
    chartType: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: this.chartType,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: "#868181",
        },
        title: {
          text: this.chartTitle,
        },
        subtitle: {
          text: 'Fonte: <a href="https://dadosabertos.bcb.gov.br/dataset/tarifas-bancarias-por-segmento-e-por-servicos-em-ordem-decrescente-de-valores/resource/531c6faf-bd89-4710-a5d0-f8671ca17092" target="_blank">Banco Central do Brasil</a>',
        },
        xAxis: {
          type: "category",
          labels: {
            rotation: -45,
            style: {
              fontSize: "10px",
              fontFamily: "Verdana, sans-serif",
            },
          },
        },
        yAxis: {
          min: 0,
          title: {
            text: "Tarifa (reais)",
          },
        },
        legend: {
          enabled: false,
        },
        series: [
          {
            name: "Bancos",
            data: this.data,
            dataLabels: {
              enabled: true,
              rotation: -90,
              color: "#FFFFFF",
              align: "right",
              format: "{point.y:.1f}", // one decimal
              y: 10, // 10 pixels down from the top
              style: {
                fontSize: "13px",
                fontFamily: "Verdana, sans-serif",
                textOutline: "none",
              },
            },
          },
        ],
      },
    };
  },
};
</script>
