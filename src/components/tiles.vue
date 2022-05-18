<template>
    <table class="tiletable" v-if="!gre">
        <tbody>
            <tr>
            <td class="tiletd" v-for="(id, index) in tiles.A" v-bind:key="id" @click="fame('A', index)"><h4>{{id}}</h4></td>
            </tr>
            <tr>
            <td class="tiletd" v-for="(id, index) in tiles.B" v-bind:key="id" @click="fame('B', index)"><h4>{{id}}</h4></td>
            </tr>
            <tr>
            <td :class="[(tilebreak[id + '' + index]) ? 'tiletd' : 'break']" v-for="(id, index) in tiles.C" v-bind:key="id" @click="fame('C', index)"><h4>{{id}}</h4></td>
            </tr>
        </tbody>
    </table>
    <table class="tiletable" v-if="gre">
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
</template>

<script>
import { computed, ref } from '@vue/runtime-core';
import { useStore } from 'vuex'

export default{
    setup(){
        const store = useStore();
        const gre = computed(() => store.state.greet);
        let tiles = ref({
            A : {
                A : 1,
                B : 2,
                C : 3
            },
            B : {
                A : 4,
                B : 5,
                C : 6
            },
            C : {
                A : 7,
                B : 8, 
                C : 9
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

        const fame = (group, index) => {
            tiles.value[group][index]--
            if(tiles.value[group][index] <= 0)
            {
                tiles.value[group][index] = 100
                tilebreak.value[group + '' + index] = true
                console.log(tilebreak)
            }
        }

        // watch(, () => {
        // });

        return {tiles, gre, greet, fame, tilebreak}
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
}
.break h4{
    color: white;
}
td h4{
    transform: rotate(315deg);
    color: black;
}
</style>