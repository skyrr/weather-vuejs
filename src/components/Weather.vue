<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Weather1<br>
    </p>
    <p>{{ info }}1</p>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  props: {
    msg: String
  },
    data() {
        return {
            info: null
        };
    },
    mounted() {
        axios
            .get('http://localhost:51262/api/weather/deCity?city=as')
            .then(response => (this.info = response));
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
}
</style>
