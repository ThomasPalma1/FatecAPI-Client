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
        plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },
        chart: {
          type: this.chartType,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: "#868181",
        },
        title: {
          text: 'Média de tarifas dos top 5 bancos no período entre 2010 e 2020',
        },
        subtitle: {
          text: 'Fonte: <a href="https://dadosabertos.bcb.gov.br/dataset/tarifas-bancarias-por-segmento-e-por-servicos-em-ordem-decrescente-de-valores/resource/531c6faf-bd89-4710-a5d0-f8671ca17092" target="_blank">Banco Central do Brasil</a>',
        },
        xAxis: {
          title: {
            text: "Anos",
          },
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
            text: "Bancos",
          },
        },
        legend: {
          enabled: false,
        },
        series: [
          {
            name: "Banco 1",
            data: [43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157, 161454, 154610]
          },
          {
            name: "Banco 2",
            data: [128547, 81007, 104332, 67990, 123456, 98654, 134597, 51462, 118361, 140783, 69321]
          },
          {
            name: "Banco 3",
            data: [93745, 145833, 60125, 109876, 76234, 128907, 89456, 117654, 135790, 47890, 131345]
          },
          {
            name: "Banco 4",
            data: [109460, 121763, 55802, 133675, 102136, 67435, 71469, 138429, 84379, 126521, 59387]
          },
          {
            name: "Banco 5",
            data: [81964, 118291, 96897, 137835, 53972, 135409, 97506, 86430, 139102, 47847, 143520
          ]
          }
        ],
      },
    };
  },
};
</script>
