<template>
    <table>
        <tbody>
            <tr>
            <td class="party1"><h4>4</h4></td><td class="party2"><h4>4</h4></td><td class="party1"><h4>1</h4></td>
            </tr>
            <tr>
            <td class="party2"><h4>3</h4></td><td class="break"><h4></h4></td><td class="party2"><h4>1</h4></td>
            </tr>
            <tr>
            <td class="party1"><h4>3</h4></td><td class="party2"><h4>2</h4></td><td class="party1"><h4>2</h4></td>
            </tr>
        </tbody>
    </table>
</template>

<style>
table {
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