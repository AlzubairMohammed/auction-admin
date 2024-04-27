<script setup>
 import CardBox from '../CardBox.vue';
 import FormField from '../FormField.vue';
 import BaseButtons from '../BaseButtons.vue';
 import BaseButton from '../BaseButton.vue';
 import FormControl from '../FormControl.vue';
 import { ref } from 'vue';
 import { mdiMail, mdiRenameOutline } from '@mdi/js';
 import CardBoxModal from '@/components/CardBoxModal.vue';

 const isModalActive = ref(false);

 const form = ref({
  crossIncome: '',
  operationCost: '',
  capitalizationRate: '',
  operationIncomeRate: '',
  netIncome: '',
  totalValue: '',
 });
 const goToAddBuilding = () => {
  form.value.operationCost = (form.value.operationIncomeRate / 100) * form.value.crossIncome;
  form.value.netIncome = form.value.crossIncome - form.value.operationCost;
  form.value.totalValue = (form.value.netIncome / form.value.capitalizationRate) * 100;
  isModalActive.value = true;
 };
</script>
<template>
 <CardBoxModal v-model="isModalActive" title="النتيجة">
  <p>صافي الدخل<b></b> {{ ' ' }}{{ form.netIncome }} ريال</p>
  <p>
   قيمة مصاريف التشغيل و الصيانة <b>{{ form.operationCost }} ريال</b>
  </p>
  <p>
   اجمالي قيمة العقار<b>{{ form.totalValue }} ريال</b>
  </p>
 </CardBoxModal>
 <CardBox form @submit.prevent="submit">
  <FormField>
   <FormControl v-model="form.crossIncome" type="number" :lable="'اجمالي الدخل للعقار'" :icon="mdiMail" />
   <FormControl v-model="form.operationIncomeRate" :lable="'نسبة مصاريف التشغيل و الصيانة'" type="number" :icon="mdiMail" />
   <FormControl v-model="form.capitalizationRate" lable="معدل الرسملة (%)" type="number" :icon="mdiRenameOutline" />
  </FormField>
  <template #footer>
   <BaseButtons>
    <BaseButton type="submit" color="info" label="عرض النتيجة" @click="goToAddBuilding" />
   </BaseButtons>
  </template>
 </CardBox>
</template>
