<script setup>
 import { useCostEvaluationsStore } from '@/stores/costEvaluations';
 import AddingBar from '@/components/AddingBar/AddingBar.vue';
 import AddIndirectCostPropertyModal from '@/components/Evaluations/Cost/AddIndirectCostPropertyModal.vue';
 import BasicInput from '@/components/Inputs/BasicInput.vue';
 import { ref } from 'vue';

 const isModalActive = ref(false);
 const isResultModalActive = ref(false);
 let name = ref('');
 const totalIndirectCost = ref(0);
 const costEvaluationSotre = useCostEvaluationsStore();
 const itemsData = costEvaluationSotre.costEvaluation.indirectCostOperations;
</script>
<template>
 <form @submit.prevent="submit" class="mb-5 grid grid-cols-1 p-[100px] gap-5 p-5 bg-white shadow-md rounded-md">
  <AddIndirectCostPropertyModal v-model="isModalActive" button="info" button-label="اضافة" />
  <AddingBar :clicked-function="() => (isModalActive = true)" title="اضافة عنصر" class="mt-3" />
  <table>
   <thead>
    <tr>
     <th class="text-center">التكلفة</th>
     <th class="text-center">النسبة</th>
     <!-- <th class="text-center">الاجمالي</th> -->
    </tr>
   </thead>
   <tbody>
    <tr v-for="(item, index) in itemsData" :key="index">
     <td class="text-center">{{ item.name }}</td>
     <td>
      <BasicInput v-model="item.precentage" type="number" class="text-center" />
     </td>
     <!-- <td class="text-center">
     {{ (directTotalCost / 100) * item.precentage }}
    </td> -->
    </tr>
   </tbody>
  </table>
 </form>
</template>
