<script setup>
 import { ref } from 'vue';
 import AddDirectCostPropertyModal from '@/components/Evaluations/Cost/AddDirectCostPropertyModal.vue';
 import AddingBar from '@/components/AddingBar/AddingBar.vue';
 import BasicInput from '@/components/Inputs/BasicInput.vue';

 import { useCostEvaluationsStore } from '@/stores/costEvaluations';

 const isModalActive = ref(false);
 const costEvaluationsSotre = useCostEvaluationsStore();
 const items = costEvaluationsSotre.costEvaluation.directCostOperations;
</script>
<template>
 <form @submit.prevent="submit" class="mb-5 grid grid-cols-1 p-[100px] gap-5 p-5 bg-white shadow-md rounded-md">
  <AddDirectCostPropertyModal v-model="isModalActive" button="info" button-label="اضافة" />
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
      <BasicInput v-model="item.meter_price" type="number" class="text-center" />
     </td>
     <td class="text-center">{{ item.meter_price * item.area }}</td>
    </tr>
   </tbody>
  </table>
 </form>
</template>
