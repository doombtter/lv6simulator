<template>
    <table class="tiletable" v-if="!gre && !pra">
        <tbody>
            <tr>
            <td :class="[(tilebreak['A' + index]) ? 'break' : 'tiletd']" v-for="(id, index) in tiles.A" v-bind:key="id + index" @click="fame('A', index)"><h4>{{timeview(id, 'A', index)}}</h4></td>
            </tr>
            <tr>
            <td :class="[(tilebreak['B' + index]) ? 'break' : 'tiletd']" v-for="(id, index) in tiles.B" v-bind:key="id + index" @click="fame('B', index)"><h4>{{timeview(id, 'B', index)}}</h4></td>
            </tr>
            <tr>
            <td :class="[(tilebreak['C' + index]) ? 'break' : 'tiletd']" v-for="(id, index) in tiles.C" v-bind:key="id + index" @click="fame('C', index)"><h4>{{timeview(id, 'C', index)}}</h4></td>
            </tr>
        </tbody>
    </table>
    <table class="tiletable" v-if="gre && !pra">
        <tbody>
            <tr>
            <td class="tiletd" v-for="id in greet.A" v-bind:key="id"><h4>{{id}}</h4></td>
            </tr>
            <tr>
            <td class="tiletd" v-for="id in greet.B" v-bind:key="id"><h4>{{id}}</h4></td>
            </tr>
            <tr>
            <td class="tiletd" v-for="id in greet.C" v-bind:key="id"><h4>{{id}}</h4></td>
            </tr>
        </tbody>
    </table>
    <table class="tiletable" v-if="pra">
        <tbody>
            <tr>
                <td v-for="id in ptiles.A" v-bind:key="id" v-bind:class="[(id[1] == 0) ? 'break' : (id[1] == 1) ? 'party1' : 'party2']"><h4>{{id[0]}}</h4></td>
            </tr>
            <tr>
                <td v-for="id in ptiles.B" v-bind:key="id" v-bind:class="[(id[1] == 0) ? 'break' : (id[1] == 1) ? 'party1' : 'party2']"><h4>{{id[0]}}</h4></td>
            </tr>
            <tr>
                <td v-for="id in ptiles.C" v-bind:key="id" v-bind:class="[(id[1] == 0) ? 'break' : (id[1] == 1) ? 'party1' : 'party2']"><h4>{{id[0]}}</h4></td>   
            </tr>
        </tbody>
    </table>
</template>

<script>
import { computed, ref, watch } from '@vue/runtime-core';
import { useStore } from 'vuex'

export default{
    setup(){
        const store = useStore();
        const gre = computed(() => store.state.greet);
        const pra = computed(() => store.state.pra);
        const nome = ref(computed(() => store.state.nome))
        const breakedtile = ref(computed(()=> store.state.breakedtile))
        let tiles = ref({
            A : {
                A : 3,
                B : 3,
                C : 3
            },
            B : {
                A : 3,
                B : 14,
                C : 3
            },
            C : {
                A : 3,
                B : 3, 
                C : 3
            },
        })
        let tilebreak = ref({
            AA : false,
            AB : false, 
            AC : false,
            BA : false,
            BB : false, 
            BC : false,
            CA : false,
            CB : false, 
            CC : false,
        })
        let intervalid = ref({
            AA : 0,
            AB : 0, 
            AC : 0,
            BA : 0,
            BB : 0, 
            BC : 0,
            CA : 0,
            CB : 0, 
            CC : 0,
        })
        const greet = {
            A : {
                A : "1(노메), 2, 3",
                B : "78",
                C : null
            },
            B : {
                A : "4, 5, 6",
                B : null,
                C : null
            },
            C : {
                A : null,
                B : null,
                C : null
            },
        }
        const ptiles = {
            A : {
                A : [4, 1],
                B : [4, 2],
                C : [1, 1]
            },
            B : {
                A : [3, 2],
                B : [null, 0],
                C : [1, 2]
            },
            C : {
                A : [3, 1],
                B : [2, 2], 
                C : [2, 1]
            },
        }

        const reset = () => {
            alltimeout();
        }

        const restore = (group, index) => {
            store.commit("btminus");
            tilebreak.value[group + '' + index] = false
            tiles.value[group][index] = ((group + '' + index) == 'BB') ? 13 : 3
        }

        const fame = (group, index) => {
            if(breakedtile.value >= 4) {
            }
            else if(tilebreak.value[group + '' + index]){
                if(!nome.value && tiles.value[group][index] != 100){
                    clearInterval(intervalid.value[group + '' + index])
                    restore(group, index)
                }
            }
            else if(!tilebreak.value[group + '' + index]){
                if(nome.value){
                    tiles.value['B']['B'] -= ((group + '' + index) == 'BB') ? 0 : 3
                    tiles.value[group][index] -= 3
                    breaking('B', 'B'); breaking(group, index)
                    switch (group + '' + index) {
                        case 'AA':
                            if(!tilebreak.value['AB']) tiles.value['A']['B'] -= 3
                            if(!tilebreak.value['BA']) tiles.value['B']['A'] -= 3
                            breaking('A', 'B'); breaking('B', 'A')
                            break;
                        case 'AB':
                            if(!tilebreak.value['AA']) tiles.value['A']['A'] -= 3
                            if(!tilebreak.value['BA']) tiles.value['B']['A'] -= 3
                            if(!tilebreak.value['AC']) tiles.value['A']['C'] -= 3
                            if(!tilebreak.value['BC']) tiles.value['B']['C'] -= 3
                            breaking('A', 'A'); breaking('B', 'A'); breaking('A', 'C'); breaking('B', 'C')
                            break;
                        case 'AC':
                            if(!tilebreak.value['AB']) tiles.value['A']['B'] -= 3
                            if(!tilebreak.value['BC']) tiles.value['B']['C'] -= 3
                            breaking('A', 'B'); breaking('B', 'C')
                            break;
                        case 'BA':
                            if(!tilebreak.value['AA']) tiles.value['A']['A'] -= 3
                            if(!tilebreak.value['AB']) tiles.value['A']['B'] -= 3
                            if(!tilebreak.value['CA']) tiles.value['C']['A'] -= 3
                            if(!tilebreak.value['CB']) tiles.value['C']['B'] -= 3
                            breaking('A', 'A'); breaking('A', 'B'); breaking('C', 'A'); breaking('C', 'B')
                            break;
                        case 'BB':
                            if(!tilebreak.value['AA']) tiles.value['A']['A'] -= 3
                            if(!tilebreak.value['AB']) tiles.value['A']['B'] -= 3
                            if(!tilebreak.value['AC']) tiles.value['A']['C'] -= 3
                            if(!tilebreak.value['BA']) tiles.value['B']['A'] -= 3
                            if(!tilebreak.value['BC']) tiles.value['B']['C'] -= 3
                            if(!tilebreak.value['CA']) tiles.value['C']['A'] -= 3
                            if(!tilebreak.value['CB']) tiles.value['C']['B'] -= 3
                            if(!tilebreak.value['CC']) tiles.value['C']['C'] -= 3
                            breaking('A', 'A'); breaking('A', 'B'); breaking('A', 'C'); breaking('B', 'A')
                            breaking('B', 'C'); breaking('C', 'A'); breaking('C', 'B'); breaking('C', 'C')
                            break;
                        case 'BC':
                            if(!tilebreak.value['AC']) tiles.value['A']['C'] -= 3
                            if(!tilebreak.value['AB']) tiles.value['A']['B'] -= 3
                            if(!tilebreak.value['CC']) tiles.value['C']['C'] -= 3
                            if(!tilebreak.value['CB']) tiles.value['C']['B'] -= 3
                            breaking('A', 'C'); breaking('A', 'B'); breaking('C', 'C'); breaking('C', 'B')
                            break;
                        case 'CA':
                            if(!tilebreak.value['BA']) tiles.value['B']['A'] -= 3
                            if(!tilebreak.value['CB']) tiles.value['C']['B'] -= 3
                            breaking('B', 'A'); breaking('C', 'B')
                            break;
                        case 'CB':
                            if(!tilebreak.value['CA']) tiles.value['C']['A'] -= 3
                            if(!tilebreak.value['BA']) tiles.value['B']['A'] -= 3
                            if(!tilebreak.value['CC']) tiles.value['C']['C'] -= 3
                            if(!tilebreak.value['BC']) tiles.value['B']['C'] -= 3
                            breaking('C', 'A'); breaking('B', 'A'); breaking('C', 'C'); breaking('B', 'C')
                            break;
                        case 'CC':
                            if(!tilebreak.value['BC']) tiles.value['B']['C'] -= 3
                            if(!tilebreak.value['CB']) tiles.value['C']['B'] -= 3
                            breaking('B', 'C'); breaking('C', 'B')
                            break;
                        default:
                            break;
                    }
                }
                else{
                    tiles.value[group][index]--
                    breaking(group, index)
                }
            }
        }

        const breaking = (group, index) => {
            if(tiles.value[group][index] <= 0)
            {
                tiles.value[group][index] = 100
                let interval = setInterval(() => {
                    intervalid.value[group + '' + index] = interval
                    if(tiles.value[group][index] === 0){
                        clearInterval(interval)
                        store.commit("btminus");
                        tilebreak.value[group + '' + index] = false
                        tiles.value[group][index] = (group + '' + index == 'BB') ? 13 : 3
                    }else{
                        tiles.value[group][index]--
                    }
                }, 1000) 
                tilebreak.value[group + '' + index] = true
                store.commit("btplus");
                if(breakedtile.value >= 4) {
                    alltimeout()
                }
            }
        }

        const alltimeout = () => {
            let max = setTimeout(function(){},1);
            for (let i = 1; i <= max ; i++) {
            window.clearInterval(i);
            window.clearTimeout(i);
            if(window.mozCancelAnimationFrame)window.mozCancelAnimationFrame(i);
        }
        }
        
        const timeview = (id, group, index) => {
            if(tilebreak.value[group + '' + index]) return id + "초"
            else return id
        }

        return {tiles, gre, greet, fame, tilebreak, timeview, breakedtile, reset, ptiles, pra}
    }
}
</script>

<style>
.tiletable {   
    transform: rotate(45deg);
}
.tiletd{
    background-color: white;  
    align-items: center;
    width: 7rem;
    height: 7rem;
    cursor: pointer;
    text-align: center;
}
.break{
    background-color: #1C1918;
    align-items: center;
    width: 7rem;
    height: 7rem;
    cursor: pointer;
    text-align: center;
}
.break h4{
    color: white;
}
td h4{
    transform: rotate(315deg);
    color: black;
}
.party1{
    background-color: #98FB98;
    align-items: center;
    width: 7rem;
    height: 7rem;
    cursor: pointer;
    text-align: center;
}
.party2{
    background-color: #a374db;
    align-items: center;
    width: 7rem;
    height: 7rem;
    cursor: pointer;
    text-align: center;
}
</style>