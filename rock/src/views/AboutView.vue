<template>
  <div class="about">
    <h1>This is a story about a rock</h1>
    <h2>Rock Family Size: {{size}}</h2>
  <img v-on:click="rockChild" alt="rock family" src="/rockFamily.png">
  </div>

</template>
<script>
export default {
  name: 'AboutView',
  data() {
    return({
      clicks: 0
    })
  },
  methods: {
rockChild(){
  this.clicks++;
}
  },
  computed: {
    size(){
return this.clicks;
    }
  },
}
</script>
<style>
.about img{
width: 100%;
}
 </style>