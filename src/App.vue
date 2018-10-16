<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Weather<br>
    </p>
    <p>{{ info.data.name }}1</p>
    <p>{{ info.data.main.temp }}1</p>
    <autocomplete :items= items  />
  </div>
</template>

<script>
    import autocomplete from './components/autocomplete.vue';

    export default {
        name: 'Weather',
        components: {
            autocomplete
        },
        props: {
            msg: String
        },
        data() {
            return {
                info: null,
                items: ['Apple', 'Banana', 'Orange', 'Mango', 'Pear', 'Peach', 'Grape', 'Tangerine', 'Pineapple']
            };
        },
        mounted() {
            axios
                .get('http://localhost:51262/api/weather/weather?city=6548737')
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
