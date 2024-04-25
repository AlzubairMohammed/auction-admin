<script lang="ts" setup>
 import { ref } from 'vue';
 import AddProperyModal from './AddPropertyModal.vue';
 import AddingBar from '@/components/AddingBar/AddingBar.vue';
 import BasicInput from '@/components/Inputs/BasicInput.vue';
 const isModalActive = ref(false);
 const isResultModalActive = ref(false);
 let title = ref('');

 //  const costEvaluationSotre = useCostEvaluationStore();
 //  const items = costEvaluationSotre?.buildingCost;
 const items = {};

 const directTotal = () => {
  let sum = 0;
  for (const item of items) {
   sum += item?.price * item.area;
  }
  costEvaluationSotre.directTotalCost = sum;
  isResultModalActive.value = true;
 };
 const pushItem = () => {
  items.push({ title: title.value, area: '', price: '' });
  title.value = '';
 };
</script>
<template>
 <AddProperyModal v-model="isModalActive" button="info" button-label="اضافة" :submit-function="pushItem" />
 <AddingBar :clicked-function="() => (isModalActive = true)" title="اضافة عنصر" class="mt-3" />
 <form @submit.prevent="directTotal" class="mt-3">
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
     <td class="text-center">{{ item.title }}</td>
     <td>
      <BasicInput v-model="item.area" type="number" class="text-center" />
     </td>
     <td>
      <BasicInput v-model="item.price" type="number" class="text-center" />
     </td>
     <td class="text-center">{{ item.price * item.area }}</td>
    </tr>
   </tbody>
  </table>
  <button type="submit" class="btn btn-primary w-1/6 mb-0">التالي</button>
 </form>
</template>
