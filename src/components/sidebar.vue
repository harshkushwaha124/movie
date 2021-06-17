<template>
  <div class="sidenav">
    <h3>Filter</h3>

    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Colours
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div class=""><a id="a1" href=""> blue</a></div>
          <div class=""><a id="a1" href=""> yellow</a></div>
          <div class=""><a id="a1" href=""> whie</a></div>
          <div class=""><a id="a1" href=""> black</a></div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Price
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div class=""><a id="a1" href=""> 2000 to 3000</a></div>
          <div class=""><a id="a1" href=""> 500 to 1000</a></div>
          <div class=""><a id="a1" href=""> 40000</a></div>
          <div class=""><a id="a1" href=""> 233</a></div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            Discount
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div class=""><a id="a1" href=""> 50</a></div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingFour">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            Size
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingFour"
          data-bs-parent="#accordionFlushExample"
        >
          <div class=""><a id="a1" href=""> 18</a></div>
          <div class=""><a id="a1" href=""> 16</a></div>
          <div class=""><a id="a1" href=""> 18</a></div>
          <div class=""><a id="a1" href=""> 14</a></div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingFive">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFive"
            aria-expanded="false"
            aria-controls="flush-collapseFive"
          >
            Neck Type
          </button>
        </h2>
        <div
          id="flush-collapseFive"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingFive"
          data-bs-parent="#accordionFlushExample"
        >
          <div class=""><a id="a1" href=""> Round</a></div>
          <div class=""><a id="a1" href=""> Boat Neck</a></div>
          <div class=""><a id="a1" href=""> V-neck</a></div>
          <div class=""><a id="a1" href=""> Shirt Collar</a></div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingSix">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseSix"
            aria-expanded="false"
            aria-controls="flush-collapseSix"
          >
            Sleeve
          </button>
        </h2>
        <div
          id="flush-collapseSix"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingSix"
          data-bs-parent="#accordionFlushExample"
        >
          <div class=""><a id="a1" href=""> Round</a></div>
          <div class=""><a id="a1" href=""> Boat Neck</a></div>
          <div class=""><a id="a1" href=""> V-neck</a></div>
          <div class=""><a id="a1" href=""> Shirt Collar</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return{}
  },
};
</script>

<style>
.sidenav {
  height: 55%;
  width: 160px;
  position: absolute;
  z-index: 1;
  top: 160px;
  margin-left: 50px;
  background-color: white;
  overflow-x: hidden;
  padding-top: 20px;
  border: 0.5px solid lightgray;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: black;
  display: block;
}

.sidenav a:hover {
  color: black;
}
#a1 {
  font-size: 15px;
}
h3 {
  color: black;
}
</style>
