<template>
  <div id="app">
    <Information :info="info"/>
    <br />
    <Grid :columns="columns" :items="items" @itemSelected="itemSelected" stripe/>
    <br />
    <Grid :columns="columns2" :items="items2" @itemSelected="itemSelected" />
  </div>
</template>

<script>
import Grid from './components/Grid.vue';
import Information from './components/Information.vue';

export default {
  name: 'App',
  data() {
    return {
      columns: [{ field: 'Adi' }, { field: 'Soyadi' }, { field: 'Yas' }],
      items: [
        {
          Adi: 'Mert',
          Soyadi: 'Demir',
          Yas: '25',
        },
        {
          Adi: 'Saire',
          Soyadi: 'Demir',
          Yas: '24',
        },
        {
          Adi: 'Ahmet',
          Soyadi: 'Demir',
          Yas: '62',
        },
        {
          Adi: 'Fatih',
          Soyadi: 'Atıcı',
          Yas: '18',
        },
      ],
      columns2: [{ field: 'Marka' }, { field: 'Vites' }, { field: 'KM' },{ field: 'Yil' }],
      items2: [
        {
          Marka: 'BMW',
          Vites: 'Otomatik',
          KM: '150.000',
          Yil: '2016',
        },
        {
          Marka: 'Audi',
          Vites: 'Manuel',
          KM: '350.000',
          Yil: '2011',
        },
      ],
      info: null
    };
  },
  components: {
    Grid,
    Information
  },
  methods:{
    itemSelected(item){
      this.info = item;
    }
  }
}
</script>

<style  lnag="scss">
#app{
  margin: 6px;
}
@import './assets/scss/normalize.scss';
</style>
