<template>
    <div class="section">
        <h4>회랑 손실 계산기</h4>
        <h5>회랑 뒤지기까지 D-{{ die }}</h5>
        <table>
            <thead>
                <tr>
                  <th>캐릭터</th>
                  <th>노말</th>
                  <th>하드</th>
                  <th>헬</th>
                  <th>엉겊</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in rows" :key="index">
                  <td>캐릭 {{ index + 1 }}</td>
                  <td><input v-model="row.value1"/></td>
                  <td><input v-model="row.value2"/></td>
                  <td><input v-model="row.value3"/></td>
                  <td><input v-model="row.value4"/></td>
                </tr>
            </tbody>
        </table>
        <h4>총 : {{ total }} 장</h4>
        <h4>노말 : {{ ntotal }} 장</h4>
        <h4>하드 : {{ htotal }} 장</h4>
        <h4>헬 : {{ helltotal }} 장</h4>
        <h4>엉겊 : {{ utotal }} 장</h4>
        <button class="custom-btn" @click="addRow">캐릭 추가</button>
        <h5>당신은 {{ dol }} 개의 명돌, {{ mdol }} 개의 위명돌, {{ gdol }} 개의 경명돌, {{ cdol }} 개의 찬명돌을 손해보았으며, 보석은 {{ jewel }} 레벨 보석을 뽑고도 남는 수치입니다.</h5>
        <h5>총 손해본 금액을 거래소로 환산하면 대략 {{ gold }} 골 입니다.</h5>
        <h5>심지어 카경은 {{ card }} 만큼이나 손해봄;;</h5>
        <h4>보상 정리 (장당 가치는 카경 제외)</h4>
        <table>
            <thead>
                <tr>
                  <th></th>
                  <th>보석</th>
                  <th>명돌</th>
                  <th>위명돌</th>
                  <th>경명돌</th>
                  <th>찬명돌</th>
                  <th>카경</th>
                  <th>가치</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>노말</td>
                  <td>63</td>
                  <td>17</td>
                  <td>18</td>
                  <td></td>
                  <td></td> 
                  <td></td>
                  <td>1449</td>
                </tr>
                <tr>
                  <td>하드</td>
                  <td>63</td>
                  <td></td>
                  <td></td>
                  <td>15</td>
                  <td></td> 
                  <td>8500</td>
                  <td>1428</td>  
                </tr>
                <tr>
                  <td>헬</td>
                  <td>78</td>
                  <td></td>
                  <td></td>
                  <td>26</td>
                  <td></td> 
                  <td>8500</td> 
                  <td>1976</td> 
                </tr>
                <tr>
                  <td>엉겊</td>
                  <td>90</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>15</td> 
                  <td>8500</td> 
                  <td>2835</td> 
                </tr>
                <tr>
                  <td>기준가격</td>
                  <td>16골</td>
                  <td>9골</td>
                  <td>16골</td>
                  <td>28골</td>
                  <td>93골</td> 
                  <td></td> 
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { computed, ref, watch } from '@vue/runtime-core';
import { useStore } from 'vuex'
    export default{
        setup() {
            const store = useStore();
            const die = ref(computed(()=> store.state.diedate))
            return {die};
        },
        data() {
            return {
              rows: [
                { value1: 0, value2: 0, value3: 0, value4: 0 },
              ]
            };
        },
        methods: {
            addRow() {
            this.rows.push({ value1: 0, value2: 0, value3: 0, value4: 0 });
            }
        },
        computed: {
          total() {
            let sum = 0;
            this.rows.forEach(row => {
              sum += parseInt(row.value1) + parseInt(row.value2) + parseInt(row.value3) + parseInt(row.value4);
            });
            return sum;
          },
          ntotal() {
            let sum = 0;
            this.rows.forEach(row => {
              sum += parseInt(row.value1);
            });
            return sum;
          },
          htotal() {
            let sum = 0;
            this.rows.forEach(row => {
              sum += parseInt(row.value2);
            });
            return sum;
          },
          helltotal() {
            let sum = 0;
            this.rows.forEach(row => {
              sum += parseInt(row.value3);
            });
            return sum;
          },
          utotal() {
            let sum = 0;
            this.rows.forEach(row => {
              sum += parseInt(row.value4);
            });
            return sum;
          },
          jewel() {
            let sum = (this.ntotal * 63) + (this.htotal * 63) + (this.helltotal * 78) + (this.utotal * 90);
            return (sum >= 19683) ? 10 : (sum >= 6561) ? 9 : (sum >= 2187) ? 8 : (sum >= 729) ? 7 : (sum >= 243) ? 6 : (sum >= 81) ? 5 : (sum >= 27) ? 4 : 0;
          },
          dol() {
            let sum = 0;
            this.rows.forEach(row => {
              sum += parseInt(row.value1);
            });
            return sum * 17;
          },
          mdol() {
            let sum = 0;
            this.rows.forEach(row => {
              sum += parseInt(row.value1);
            });
            return sum * 18;
          },
          gdol() {
            let sum = 0;
            this.rows.forEach(row => {
              sum += parseInt(row.value2);
            });
            let hsum = 0;
            this.rows.forEach(row => {
              hsum += parseInt(row.value3);
            });
            return (sum * 15) + (hsum * 26);
          },
          cdol() {
            let sum = 0;
            this.rows.forEach(row => {
              sum += parseInt(row.value4);
            });
            return sum * 15;
          },
          card() {
            let sum = 0;
            this.rows.forEach(row => {
              sum += parseInt(row.value2) + parseInt(row.value3) + parseInt(row.value4);
            });
            return sum * 8500;
          },
          gold() {
            let sum = 0;
            this.rows.forEach(row => {
              sum += parseInt(row.value1);
            });
            let sum2 = 0;
            this.rows.forEach(row => {
              sum2 += parseInt(row.value2);
            });
            let sum3 = 0;
            this.rows.forEach(row => {
              sum3 += parseInt(row.value3);
            });
            let sum4 = 0;
            this.rows.forEach(row => {
              sum4 += parseInt(row.value4);
            });
            return (sum * 1449) + (sum2 * 1428) + (sum3 * 1976) + (sum4 * 2835);
          },
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
table {
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
}
th,
td {
  padding: 6px 15px;
}
th {
  background: #42444e;
  color: #fff;
  text-align: left;
}
tr:first-child th:first-child {
  border-top-left-radius: 6px;
}
tr:first-child th:last-child {
  border-top-right-radius: 6px;
}
td {
  border-right: 1px solid #c6c9cc;
  border-bottom: 1px solid #c6c9cc;
}
td:first-child {
  border-left: 1px solid #c6c9cc;
}
tr td {
  background: #eaeaed;
}
input {
  width:40px;
  height:20px;
  font-size:5px;
}
button {
  margin: 20px;
}
.custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: #42444e;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
}
</style>