<template>
    <table>
        <tbody>
            <tr>
            <td class="break"><h4></h4></td><td class="break"><h4></h4></td><td><h4>3</h4></td>
            </tr>
            <tr>
            <td class="break"><h4></h4></td><td><h4>11</h4></td><td><h4>3</h4></td>
            </tr>
            <tr>
            <td><h4>3</h4></td><td><h4>3</h4></td><td><h4>3</h4></td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
</script>

<style>
table {
    transform: rotate(45deg);
}
td{
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