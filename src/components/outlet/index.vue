<template>
  <div class="card-deck mt-5">
    <div class="card" style="width: 18rem;" v-for="item in JSON.parse(JSON.stringify(this.outlet))" :key="item.id">
      <img v-bind:src="item.imageUrl" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{item.name}}</h5>
        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
        <!-- <a href="/product" class="btn btn-primary" v-if="item.name === 'Food'">Product Collection</a> -->
        <router-link to="/product" class="btn btn-primary" v-if="item.name === 'Food'">Product Collection</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      outlet: {},
      token: ''
    }
  },
   mounted () {
     localStorage.setItem('user-token', this.token)
     const header = `Authorization: Bearer ${this.token}`;
     const headers = { "Content-Type": "application/json" };
     axios.get(`https://private-eaf0d8-retailmockapp.apiary-mock.com/merchant/2/outlet/1/category`, { headers })
      .then(response => {
        let data = JSON.parse(JSON.stringify(response.data))
        this.outlet = data.data
        // console.log(JSON.parse(JSON.stringify(this.outlet)))
      })
   }
}
</script>

<style>

</style>