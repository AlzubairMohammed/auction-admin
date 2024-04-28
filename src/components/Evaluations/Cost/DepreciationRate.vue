<script setup>
 import { computed, ref } from 'vue';
 import { useCostEvaluationsStore } from '@/stores/costEvaluations';
 import AddingBar from '@/components/AddingBar/AddingBar.vue';
 import BasicInput from '@/components/Inputs/BasicInput.vue';
 import SingleSelectInput from '@/components/Inputs/SingleSelectInput.vue';

 const costEvaluationSotre = useCostEvaluationsStore();

 const isModalActive = ref(false);
 let title = ref('');
 let realestateAge = ref(0);
 let depreciationRate = ref(0);
 let virsualRealestateAge = ref(0);
 const isResultModalActive = ref(false);
 let depreciationCost = ref(0);
 let realestateValueAfterDepreciation = ref(0);
 let totalIndirectCost = computed(() => {
  return costEvaluationSotre.totalIndirectCost;
 });

 const items = ref([{ title: 'الدور الارضي', area: '', price: '' }]);
 const getDepreciationRate = () => {
  realestateValueAfterDepreciation.value = 0;
  depreciationRate.value = (realestateAge.value / virsualRealestateAge.value) * 100;
  // realestateValueAfterDepreciation.value =
  //   totalIndirectCost.value - (totalIndirectCost.value * 29) / 100
  console.log(totalIndirectCost.value);
  depreciationCost.value = totalIndirectCost.value * (depreciationRate.value / 100);
  realestateValueAfterDepreciation.value = totalIndirectCost.value - depreciationCost.value;
  isResultModalActive.value = true;
 };
 const pushItem = () => {
  items.value.push({ title: title.value, area: '', price: '' });
  title.value = '';
 };
</script>
<template>
 <table>
  <tbody>
   <tr>
    <td class="text-center">نوع الاهلاك</td>
    <td>
     <SingleSelectInput v-model="realestateAge" type="select" :options="[{ name: 'العمر المتدد' }, { name: 'الثابت' }]" />
    </td>
   </tr>
   <tr>
    <td class="text-center">عمر المبني</td>
    <td>
     <BasicInput v-model="realestateAge" type="number" class="text-center" />
    </td>
   </tr>
   <tr>
    <td class="text-center">العمر الافتراضي</td>
    <td>
     <BasicInput v-model="virsualRealestateAge" type="number" class="text-center" />
    </td>
   </tr>
  </tbody>
 </table>
</template>
