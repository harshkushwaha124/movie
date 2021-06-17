<template>
  <div id="nav" class="fixed-top">
    <b-navbar toggleable="lg" type="light" variant="faded">
      <b-navbar-brand href="#"
        ><img id="img" src="@/assets/logo (1).png"
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">New in</b-nav-item>
          <b-nav-item href="#">Folk songs</b-nav-item>
          <b-nav-item href="#">Folk songs</b-nav-item>
          <b-nav-item href="#"> Weastern wear</b-nav-item>
          <b-nav-item href="#"> Top wear </b-nav-item>
          <b-nav-item href="#">Foot wear</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>

<style scoped>
.inputcolour {
  color: solid black;
}
#nav {
  background-color: white;
}
.navbar-dark .navbar-nav .nav-link {
  color: rgb(8 8 8);
  
}
.navbar-dark .navbar-nav .nav-link:hover {
  color: black;
}
ul li{
padding: 20px;
}

#img {
  height: 50px;
}
</style>
