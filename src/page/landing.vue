<template>
    <div class="section">
        <h4>6관 시뮬레이터</h4>
        <div class="tiles">
            <praise v-if="pra"></praise>
            <tiles v-if="!pra"></tiles>
        </div>
        <checkbox></checkbox>
        <h4>노메계산기</h4>
        <input class="inputtext" placeholder="여기에 쓰면" v-model ="result"> <input class="inputtext" placeholder="여기에 나옴" readonly v-bind:src = "result">
    </div>
</template>
<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex'
export default{
    setup(){
        const store = useStore();
        const pra = computed(() => store.state.pra);
        let result
        return {pra, result}
    }
}
</script>
<style>
body{
    background-color: #1C1918;
}
.inputtext {
  width: 40%;
  height: 32px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
}
.section {
    width: 100%;
    max-width: 600px;
    padding-left: 25px;
    padding-right: 25px;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
.tiles {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
    padding-bottom: 5rem;
}
h4 {
    color: white;
}
</style>