<script setup>
 import SingleSelectInput from '@/components/Inputs/SingleSelectInput.vue';
 import BasicInput from '@/components/Inputs/BasicInput.vue';
 import AttributeModal from '@/components/Scans/AttributeModal.vue';
 import DateInput from '@/components/Inputs/DateInput.vue';
 import TextAreaInput from '@/components/Inputs/TextAreaInput.vue';
 import { useRealestatesStore } from '@/stores/realestates';
 const useRealestateStore = useRealestatesStore();
 const licenseData = useRealestateStore.realestate.license;
 const logDate = (date) => {
  licenseData.date = date;
 };
</script>
<template>
 <AttributeModal v-model="isAddPropertyModalActive" :params="{ id: null, title: '' }" />
 <form>
  <div class="mb-5">
   <div class="flex flex-wrap justify-between items-center">
    <BasicInput v-model="licenseData.number" placeholder="رقم الرخصة" type="number" class="w-1/5 p-2" />
    <DateInput @getDate="logDate" placeholder=" تاريخ الرخصة" class="w-1/5 p-2" />
    <SingleSelectInput placeholder="المنطقة" :options="['1', '2', '3']" class="w-1/5 p-2" />
    <SingleSelectInput placeholder="المدينة" :options="['1', '2', '3']" class="w-1/5 p-2" />
    <SingleSelectInput v-model="licenseData.issuance_place_id" placeholder="الحي" :options="['1', '2', '3']" class="w-1/5 p-2" />
    <SingleSelectInput v-model="licenseData.realestate_type_id" placeholder="نوع العقار" :options="['1', '2', '3']" class="w-1/5 p-2" />
    <TextAreaInput v-model="licenseData.note" class="w-full p-2" label="الملاحظات" />
   </div>
  </div>
 </form>
</template>
