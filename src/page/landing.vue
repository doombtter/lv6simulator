<template>
    <div class="section">
        <h4>6관 시뮬레이터</h4>
        <h5>212줄 1문양 / 187줄 맞이하라 / 137줄 노메 / 112줄 찬미 / 87줄 노메 / 37줄 노메 / 32줄 2문양 / 30줄 추락하라</h5>
        <h5> 파괴된 타일 : {{breakedtile}} <strong v-if="breakedtile >= 4"> GG</strong></h5><resetbtn label="초기화" @click="renderComponent()"></resetbtn>
        <div class="tiles">
            <tiles ref="tile" :key="count"></tiles>
        </div>
        <div class="wrapper">
        <table>
            <tbody>
                <tr>
                    <td><checkbox label="찬미모드"></checkbox></td>
                    <td><greet label="맞이하라"></greet></td>
                    <td><meteorbtn label="노메On/Off"></meteorbtn></td>
                </tr>
            </tbody>
        </table>
        </div>
        <h4>타일재생성계산기</h4>
        <h5>MM:SS 입력하여 시간 계산, 누르면 복사, 초기화됨! (예 : 0945)</h5>
        <input class="inputtext" type="text" maxlength="4"
        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
        placeholder="여기에 시간 쓰기" v-model="text"> 
        <input class="inputtext" @click="onCopy" placeholder="누르면 복사" :value="sum" readonly/>
        <h4>하기 전에 읽어보기!</h4>
        <h5>타일이 4개 이상 부숴지면 실패</h5>
        <h5>파메는 단일, 노메는 범위기에요</h5>
        <h5>부숴진 타일을 누르면 재생성되요. 단, 실수 방지를 위해 남은시간이 99초부터 누를 수 있어요</h5>
        <h5>실패하면 타일이 재생성되지 않고, 타일이 줄어들지도 않아요</h5>
    </div>
</template>
<script>
import { computed, ref, watch } from '@vue/runtime-core';
import { useStore } from 'vuex'
import axios from 'axios'
import { copyText } from 'vue3-clipboard'

export default{
    setup(){
        const store = useStore();
        const pra = computed(() => store.state.pra);
        const breakedtile = ref(computed(()=> store.state.breakedtile))
        let text = ref()
        let sum = ref("")
        const tile = ref(null);
        const count = ref(0)

        watch(text, () => {
            if((text.value + "").length >= 4) {
                sum.value = timer((text.value +"").slice(0, 4))
            }else{
               sum.value = ""
            }
        });

        const timer = (v) => {
            let min = Number(v.slice(0,2))-2
            let sec = Number(v.slice(2,4)) + 20
            if(sec >= 60) {sec -=60; min++}

            return ((min < 10) ? ("0" + min) : min) +""+ ((sec < 10) ? ("0" + sec) : sec)
        }
 
        const onCopy = () => {
            copyText(sum.value, undefined, () => {text.value = ""})
        }

        const run = () => {
            tile.value.reset();
        }

        const renderComponent = () => {
            store.commit("btreset");
            tile.value.reset();
            count.value++
        }
        return {pra, text, sum, onCopy, breakedtile, tile, run, count, renderComponent}
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
h4, h5 {
    color: white;
}
.wrapper {
  width: 15%;
  height: 15%;
  text-align: center;
  margin: 50px;
}
</style>