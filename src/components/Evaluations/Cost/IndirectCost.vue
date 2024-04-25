<script setup>
 //  import { useCostEvaluationStore } from '@/stores/costEvaluation';
 import AddingBar from '@/components/AddingBar/AddingBar.vue';
 import AddPropertyModal from './AddPropertyModal.vue';
 import BasicInput from '@/components/Inputs/BasicInput.vue';

 const isModalActive = ref(false);
 const isResultModalActive = ref(false);
 let title = ref('');
 const totalIndirectCost = ref(0);
 //  const costEvaluationSotre = useCostEvaluationStore();
 const itemsData = costEvaluationSotre.buildingIndirectCost;
 let directTotalCost = computed(() => {
  return costEvaluationSotre.directTotalCost;
 });

 const indirectTotal = () => {
  console.log(directTotalCost);
  let sum = 0;
  for (const item of itemsData) {
   sum += (directTotalCost.value / 100) * item.precentage;
  }
  totalIndirectCost.value = sum;
  costEvaluationSotre.totalIndirectCost = totalIndirectCost.value + directTotalCost.value;
  isResultModalActive.value = true;
 };

 const pushItem = () => {
  itemsData.push({ title: title.value, precentage: '' });
  title.value = '';
 };
</script>
<template>
 <AddPropertyModal v-model="isModalActive" button="info" button-label="اضافة" :submit-function="pushItem" />
 <AddingBar :clicked-function="() => (isModalActive = true)" title="اضافة عنصر" class="mt-3" />
 <table>
  <thead>
   <tr>
    <th class="text-center">التكلفة</th>
    <th class="text-center">النسبة</th>
    <th class="text-center">الاجمالي</th>
   </tr>
  </thead>
  <tbody>
   <tr v-for="(item, index) in itemsData" :key="index">
    <td class="text-center">{{ item.title }}</td>
    <td>
     <BasicInput v-model="item.precentage" type="number" class="text-center" />
    </td>
    <td class="text-center">
     {{ (directTotalCost / 100) * item.precentage }}
    </td>
   </tr>
  </tbody>
 </table>
</template>
