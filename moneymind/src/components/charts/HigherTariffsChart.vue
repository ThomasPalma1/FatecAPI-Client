<template>
  <div>
    <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
  </div>
</template>

<script lang="ts">
import exportingInit from "highcharts/modules/exporting";
import Highcharts from "highcharts";
import { ref, onMounted } from 'vue';
import axios from 'axios';


const tarifas = ref()
const erro = ref('');

const fetchTarifas = async () => {
  try {
    let response = await axios.get('/tarifasValores/bancosMaioresTarifas?grupo=01&servico=0101');
    tarifas.value = response.data
  }
  catch(ex) {
    erro.value = (ex as Error).message;
  }
}

exportingInit(Highcharts);

export default {
  setup() {
    onMounted(() => {
      fetchTarifas();
    });
  },
  data() {
    const options = tarifas
    console.log(options)
    return {
      chartOptions: {
        chart: {
          type: "column",
        },
        title: {
          text: "Banco com maiores tarifas",
        },
        subtitle: {
          text: 'Fonte: <a href="https://dadosabertos.bcb.gov.br/dataset/tarifas-bancarias-por-segmento-e-por-servicos-em-ordem-decrescente-de-valores/resource/531c6faf-bd89-4710-a5d0-f8671ca17092" target="_blank">Banco Central do Brasil</a>',
        },
        xAxis: {
          type: "category",
          labels: {
            rotation: -45,
            style: {
              fontSize: "13px",
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
            name: "Population",
            data: [
              [options.value[0].razao_social, parseFloat(options.value[0].valor_maximo)],
              ["Sao Paulo", 22.23],
              ["Mexico City", 21.91],
              ["Dhaka", 21.74],
              ["Cairo", 21.32],
              ["Beijing", 20.89],
              ["Mumbai", 20.67],
              ["Osaka", 19.11],
              ["Karachi", 16.45],
              ["Chongqing", 16.38],
              ["Istanbul", 15.41],
              ["Buenos Aires", 15.25],
              ["Kolkata", 14.974],
              ["Kinshasa", 14.97],
              ["Lagos", 14.86],
              ["Manila", 14.16],
              ["Tianjin", 13.79],
              ["Guangzhou", 13.64],
            ],
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
              },
            },
          },
        ],
      },
    };
  },
};
</script>
