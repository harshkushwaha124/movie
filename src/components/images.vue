<template>
<div>
  <div id="head"> Delivery timelines may be affected due to lockdowns in parts of the country</div>
  <section class="images d-flex flex-wrap">

    <article class="image" v-for="user in users" :key="user.id">
      <div
        class="thumbnail"
      > <a href=""><img :src="user.image" /></a></div>
      <h6><a href="" id="text">{{ user.name }}</a></h6>
      <p>Rs. {{ user.selling_price }}</p>
    </article>
  </section>

  <section class="images d-flex flex-wrap">

    <article class="image" v-for="user in newusers" :key="user.id">
      <div
        class="thumbnail"
      > <a href=""><img :src="user.image" /></a></div>
      <h6><a href="" id="text">{{ user.name }}</a></h6>
      <p>Rs. {{ user.selling_price }}</p>
    </article>
  </section>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "images",
  data() {
    return {
      users: [],
      newusers: [],
    };
  },

  methods:{
 getInitialUsers() {
      axios
      .get(`https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=folk-song-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=`)
      .then((response) => {
        console.log(response.data)
        this.users = response.data.result.products;

        
      });


      
    },

getNextUser() {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow) {
           axios
      .get(`https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=folk-song-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=`)
      .then((response) => {
        console.log(response.data)
            this.users.push(response.data.result.products);
        
      });
        }
      }
    }
    
  },
   beforeMount() {
         this.getInitialUsers();

  },

  mounted() {
        this.getNextUser();

  },
};
</script>

<style>
.images {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-left: 200px;
  margin-top: 6px;
}
.image {
  box-sizing: border-box;
  width: 340px;
  padding: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #aaa;
  margin: 10px;

}
.thumbnail {
  background-position: center;
  background-size: auto;
  width: 100%;
height: 500px;
  

}
#text{
  text-decoration: none;
  color: black;
}
#head{
  margin-top: 100px;
  background-color:rgb(243, 239, 239);
  font-size: 20px;
  padding: 8px;
}
</style>
