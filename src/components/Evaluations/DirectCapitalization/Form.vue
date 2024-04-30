<script setup>
 import { ref } from 'vue';
 import BasicInput from '@/components/Inputs/BasicInput.vue';
 import { useDirecCapitlizationsStore } from '@/stores/directCapitlizations';
 const directCapitalizationsStore = useDirecCapitlizationsStore();
 const form = directCapitalizationsStore.directCapitlization;
 //  const goToAddBuilding = () => {
 //   form.value.operationCost = (form.value.operationIncomeRate / 100) * form.value.crossIncome;
 //   form.value.netIncome = form.value.crossIncome - form.value.operationCost;
 //   form.value.totalValue = (form.value.netIncome / form.value.capitalizationRate) * 100;
 //  };
</script>
<template>
 <form @submit.prevent="directCapitalizationsStore.addDirectCapitalization" class="mb-5 grid grid-cols-1 p-[100px] gap-5 p-5 bg-white shadow-md rounded-md">
  <div class="flex flex-col space-y-4">
   <BasicInput v-model="form.cross_income" type="number" required placeholder="اجمالي الدخل للعقار" />
   <BasicInput v-model="form.operation_income_rate" placeholder="نسبة مصاريف التشغيل و الصيانة" type="number" />
   <BasicInput v-model="form.capitalization_rate" placeholder="معدل الرسملة (%)" type="number" />
  </div>

  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5" type="submit">تقييم</button>
 </form>
</template>
