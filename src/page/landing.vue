<template>
    <div class="section">
        <div class="tiles">
            <h4>6관 시뮬레이터</h4>
        </div>
        <div class="tiles">
            <tiles></tiles>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style>
body{
    background-color: #1C1918;
}
.section {
    width: 100%;
    max-width: 600px;
    padding-left: 20px;
    padding-right: 20px;
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