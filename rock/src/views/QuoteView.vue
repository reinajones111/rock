<template>
  <div class="about">
    <h1>Quotes From The Great Father Rock</h1>
  <img alt="The rock" src="/dwayne.png">
      <h2>"{{quote}}"</h2>
  </div>

</template>

<script>
export default {
  name: 'QuoteView',
  created() {
        let index = Math.floor(Math.random() * this.$root.$data.quotes.length);
        this.$root.$data.currentQuote = this.$root.$data.quotes[index].quote;
  },
  computed: {
      quote() {
          return this.$root.$data.currentQuote;
      }
}
}




</script>

<style>
.about img{
width: 100%;
}
 </style>