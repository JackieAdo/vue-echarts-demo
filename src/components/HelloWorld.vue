<template>
<div class="hello">
  <a href="#">测试</a>
  <div id="myChart"></div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {}
  },
  mounted() {
    var myChart = this.echarts.init(document.getElementById('myChart'), 'frog')
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#myChart {
  height: 400px;
  border-radius: 3px;
  border: 1px solid #8f3023;
  padding: 20px;
  margin: 20px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  font-size: 13px;
}
</style>
