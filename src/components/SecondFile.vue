<template>
  <div>
    <h1>this is second file</h1>
    <button v-on:click="openit">hy</button>
  </div>
</template>
<script>
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class Second extends Vue {
  openit () {
   alert('This is Second File')
  }
}

</script>
