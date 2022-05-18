<template>
    <input type="checkbox" id="switch2" @change="func">
    <label for="switch2" class="switch_label2">
        <span class="onf_btn"></span>
    </label>
      <label class="label">{{label}}</label>
</template>

<script setup>
  import { useStore } from 'vuex'
  const props = defineProps({
    label: String
  })
  const store = useStore();
  //store함수 호출
  const func = () => store.commit("changeNome");
</script>

<style>
.label {
  white-space: nowrap;
  color: white;
}
#switch2 {
  position: absolute;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.switch_label2 {
  position: relative;
  cursor: pointer;
  display: inline-block;
  width: 58px;
  height: 28px;
  background: #fff;
  border: 2px solid #daa;
  border-radius: 20px;
  transition: 0.2s;
}
.switch_label2:hover {
  background: #efefef;
}
.onf_btn {
  position: absolute;
  top: 4px;
  left: 3px;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: #daa;
  transition: 0.2s;
}
#switch2:checked+.switch_label2 {
  background: #c44;
  border: 2px solid #c44;
}

#switch2:checked+.switch_label2:hover {
  background: #e55;
}
#switch2:checked+.switch_label2 .onf_btn {
  left: 34px;
  background: #fff;
  box-shadow: 1px 2px 3px #00000020;
}
</style>