<template>
  <div class="card-deck mt-5">

    <div class="card" style="width: 18rem;">
      <img src="" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      outlet: null,
      token: ''
    }
  },
   mounted () {
     localStorage.setItem('user-token', this.token)
     const header = `Authorization: Bearer ${this.token}`;
     axios.get(`https://private-eaf0d8-retailmockapp.apiary-mock.com/merchant/2/outlet/1/category`, {
       headers: { header }
     })
      .then(response => {
        this.outlet = JSON.parse(JSON.stringify(response.data))
        // console.log('INI DATA OUTLET STRINGify ===>>>', data)
        // this.outlet = JSON.parse(data)
        console.log(this.outlet)
      })
   }
}
</script>

<style>

</style>