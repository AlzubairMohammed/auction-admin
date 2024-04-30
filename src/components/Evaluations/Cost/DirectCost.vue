<script setup>
 import { ref } from 'vue';
 import AddProperyModal from './AddDirectCostPropertyModal.vue';
 import AddingBar from '@/components/AddingBar/AddingBar.vue';
 import BasicInput from '@/components/Inputs/BasicInput.vue';

 import { useCostEvaluationsStore } from '@/stores/costEvaluations';
 const isModalActive = ref(false);
 const isResultModalActive = ref(false);
 let title = ref('');

 const costEvaluationsSotre = useCostEvaluationsStore();
 const items = costEvaluationsSotre?.directCostOperations;

 //   directTotal () => {
 //   let sum = 0;
 //   for (const item of items) {
 //    sum += item?.price * item?.area;
 //   }
 //   costEvaluationsSotre?.directCostOperations?.directTotalCost = sum;
 //   isResultModalActive.value = true;
 //  };
 const pushItem = () => {
  items.push({ title: title.value, area: '', price: '' });
  title.value = '';
 };
</script>
<template>
 <form @submit.prevent="submit" class="mb-5 grid grid-cols-1 p-[100px] gap-5 p-5 bg-white shadow-md rounded-md">
  <AddProperyModal v-model="isModalActive" button="info" button-label="اضافة" />
  <AddingBar :clicked-function="() => (isModalActive = true)" title="اضافة عنصر" class="mt-3" />
  <table>
   <thead>
    <tr>
     <th class="text-center">البيان</th>
     <th class="text-center">المساحة</th>
     <th class="text-center">سعر المتر</th>
     <th class="text-center">الاجمالي</th>
    </tr>
   </thead>
   <tbody>
    <tr v-for="(item, index) in items" :key="index">
     <td class="text-center">{{ item.name }}</td>
     <td>
      <BasicInput v-model="item.area" type="number" class="text-center" />
     </td>
     <td>
      <BasicInput v-model="item.price" type="number" class="text-center" />
     </td>
     <td class="text-center">{{ item.meter_price * item.area }}</td>
    </tr>
   </tbody>
  </table>
 </form>
</template>
