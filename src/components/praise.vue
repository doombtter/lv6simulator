<template>
    <table class="tiletable">
        <tbody>
            <tr>
                <td v-for="id in tiles.A" v-bind:key="id" v-bind:class="[(id[1] == 0) ? 'break' : (id[1] == 1) ? 'party1' : 'party2']"><h4>{{id[0]}}</h4></td>
            </tr>
            <tr>
                <td v-for="id in tiles.B" v-bind:key="id" v-bind:class="[(id[1] == 0) ? 'break' : (id[1] == 1) ? 'party1' : 'party2']"><h4>{{id[0]}}</h4></td>
            </tr>
            <tr>
                <td v-for="id in tiles.C" v-bind:key="id" v-bind:class="[(id[1] == 0) ? 'break' : (id[1] == 1) ? 'party1' : 'party2']"><h4>{{id[0]}}</h4></td>   
            </tr>
        </tbody>
    </table>
</template>

<script>
export default{
    setup(){
        // v-for, 다중 삼항 연산자
        let tiles = {
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

        return {tiles}
    }
}
</script>


<style>
.tiletable {
    transform: rotate(45deg);
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