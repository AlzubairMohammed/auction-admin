<script setup>
 import { computed, ref } from 'vue';
 import { useCostEvaluationsStore } from '@/stores/costEvaluations';
 import BasicInput from '@/components/Inputs/BasicInput.vue';
 import SingleSelectInput from '@/components/Inputs/SingleSelectInput.vue';
 import ResultModal from '@/components/Evaluations/Cost/ResultModal.vue';

 const costEvaluationSotre = useCostEvaluationsStore();
 const depreciationRate = costEvaluationSotre.costEvaluation.depreciationRate;
 const isResultModalActive = ref(false);
 let result = ref(0);
 const submit = async () => {
  result.value = await costEvaluationSotre.addCostEvaluation();
  result.value.realestate_id = costEvaluationSotre.costEvaluation.realestate_id;
  isResultModalActive.value = true;
  console.log('result', result.value);
 };
</script>
<template>
 <ResultModal v-model="isResultModalActive" :result="result" />
 <form @submit.prevent="submit" class="mb-5 grid grid-cols-1 p-[100px] gap-5 p-5 bg-white shadow-md rounded-md">
  <h1 class="text-2xl font-bold mb-5 text-center">
   <span class="underline">الاهلاك</span>
  </h1>
  <table>
   <tbody>
    <tr>
     <td class="text-center">نوع الاهلاك</td>
     <td>
      <SingleSelectInput
       @on-select="depreciationRate.type = $event.id"
       placeholder=""
       :options="[
        { name: 'العمر المتدد', id: 'expanded' },
        { name: 'الثابت', id: 'const' },
       ]"
      />
     </td>
    </tr>
    <tr v-if="depreciationRate.type === 'expanded'">
     <td class="text-center">العمر الممتد</td>
     <td>
      <BasicInput v-model="depreciationRate.realestate_expanded_life_span" type="number" class="text-center" />
     </td>
    </tr>
    <tr>
     <td class="text-center">عمر المبني</td>
     <td>
      <BasicInput v-model="depreciationRate.realestate_life_span" type="number" class="text-center" />
     </td>
    </tr>
    <tr>
     <td class="text-center">العمر الافتراضي</td>
     <td>
      <BasicInput v-model="depreciationRate.realestate_expected_life_span" type="number" class="text-center" />
     </td>
    </tr>
   </tbody>
  </table>
  <button class="bg-blue-500 hover:bg-blue-700 w-1/6 mt-6 text-white font-bold py-2 px-4 rounded mt-5" type="submit">تقييم</button>
 </form>
</template>
