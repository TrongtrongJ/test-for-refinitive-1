<script setup lang="ts">
import { numberInput, calculationInput, isNumberValidCalculation } from './state'
import { calculationSelections } from './utils'
</script>

<template>
  <div class="main-container">
    <div class="left">
      <input type="number" v-model="numberInput">
    </div>
    <div class="middle">
      <select v-model="calculationInput"> 
        <option v-for="opt of calculationSelections" :value="opt" :key="opt">{{opt}}</option>
      </select>
    </div>
    <div class="right">
      <h1>{{isNumberValidCalculation}}</h1>
    </div>
  </div>
</template>

<style>
.main-container {
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  border: 1px solid black;
  height: 95vh;
}
.left {
  width: 200px;
  box-sizing: border-box;
  border: 1px solid green;
  flex-shrink: 0;
}
.right {
  width: 300px;
  box-sizing: border-box;
  border: 1px solid blue;
  flex-shrink: 0;

}
.middle {
  min-width: 100px;
  flex-grow: 1;
}
</style>
