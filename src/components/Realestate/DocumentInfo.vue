<script setup>
 import MultiselectInput from '@/components/Inputs/MultiselectInput.vue';
 import SingleSelectInput from '@/components/Inputs/SingleSelectInput.vue';
 import BasicInput from '@/components/Inputs/BasicInput.vue';
 import AttributeModal from '@/components/Scans/AttributeModal.vue';
 import DateInput from '@/components/Inputs/DateInput.vue';
 import AddingBar from '@/components/AddingBar/AddingBar.vue';
 import TextAreaInput from '@/components/Inputs/TextAreaInput.vue';
 import { ref } from 'vue';
 let isAddPropertyModalActive = ref(false);
 const activeModal = () => {
  isAddPropertyModalActive.value = !isAddPropertyModalActive.value;
 };
</script>
<template>
 <AttributeModal v-model="isAddPropertyModalActive" :params="{ id: null, title: '' }" />
 <form>
  <div class="mb-5">
   <div class="flex flex-wrap justify-between items-center">
    <BasicInput placeholder="رقم الصك" type="number" class="w-1/4 p-2" />
    <DateInput placeholder=" تاريخ الصك" class="w-1/4 p-2" />
    <BasicInput placeholder="رقم القطعة" type="number" class="w-1/4 p-2" />
    <BasicInput placeholder="رقم البلك" type="number" class="w-1/4 p-2" />
    <BasicInput placeholder="رقم المخطط" type="number" class="w-1/4 p-2" />
    <BasicInput placeholder="المساحة" type="number" class="w-1/4 p-2" />
    <SingleSelectInput placeholder="المنطقة" :options="['1', '2', '3']" class="w-1/4 p-2" />
    <SingleSelectInput placeholder="المدينة" :options="['1', '2', '3']" class="w-1/4 p-2" />
    <SingleSelectInput placeholder="الحي" :options="['1', '2', '3']" class="w-1/4 p-2" />
    <AddingBar :clicked-function="activeModal" title="الحدود و الاطوال" class="mt-3 w-full" />
    <div class="p-3 w-1/4">
     <div class="bg-gray-200 rounded-md p-3">
      <label for="btnRight">شمالا</label>
      <BasicInput placeholder="الوصف" type="number" class="w-full p-2" />
      <BasicInput placeholder="الطول" type="number" class="w-full p-2" />
     </div>
    </div>
    <div class="p-3 w-1/4">
     <div class="bg-gray-200 rounded-md p-3">
      <label for="btnRight">شمالا</label>
      <BasicInput placeholder="الوصف" type="number" class="w-full p-2" />
      <BasicInput placeholder="الطول" type="number" class="w-full p-2" />
     </div>
    </div>
    <div class="p-3 w-1/4">
     <div class="bg-gray-200 rounded-md p-3">
      <label for="btnRight">شمالا</label>
      <BasicInput placeholder="الوصف" type="number" class="w-full p-2" />
      <BasicInput placeholder="الطول" type="number" class="w-full p-2" />
     </div>
    </div>
    <div class="p-3 w-1/4">
     <div class="bg-gray-200 rounded-md p-3">
      <label for="btnRight">شمالا</label>
      <BasicInput placeholder="الوصف" type="number" class="w-full p-2" />
      <BasicInput placeholder="الطول" type="number" class="w-full p-2" />
     </div>
    </div>
    <TextAreaInput class="w-full p-2" label="الملاحظات" />
   </div>
  </div>
 </form>
</template>
