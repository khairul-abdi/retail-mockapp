<template>
  <div class="card-deck mt-5">
    <div class="card" style="width: 18rem;" v-for="item in JSON.parse(JSON.stringify(this.product))" :key="item.id">
      <img v-bind:src="item.imageUrl" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{item.name}}</h5>
        <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
        <svg style="color: #fea13f" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      product: {},
      token: ''
    }
  },
   mounted () {
     localStorage.setItem('user-token', this.token)
     const header = `Authorization: Bearer ${this.token}`;
     const headers = { "Content-Type": "application/json" };
     axios.get(`https://private-eaf0d8-retailmockapp.apiary-mock.com/merchant/merchantID/outlet/outletID/category/categoryID/product?page=1&limit=10&active=true`, { headers })
      .then(response => {
        let data = JSON.parse(JSON.stringify(response.data))
        console.log('Ini data ', data.data)
        this.product = response.data.data.data
        console.log(JSON.parse(JSON.stringify(this.product)))
        console.log('Then 1 ====>> ',response.data.data.data)
        return response.data.data.data
      })
   }
}
</script>

<style>

</style>