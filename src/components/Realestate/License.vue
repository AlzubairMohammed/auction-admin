<script setup>
 import MultiselectInput from '@/components/Inputs/MultiselectInput.vue';
 import SingleSelectInput from '@/components/Inputs/SingleSelectInput.vue';
 import BasicInput from '@/components/Inputs/BasicInput.vue';
 import AttributeModal from '@/components/Scans/AttributeModal.vue';
 import DateInput from '@/components/Inputs/DateInput.vue';
 import AddingBar from '@/components/AddingBar/AddingBar.vue';
 import TextAreaInput from '@/components/Inputs/TextAreaInput.vue';
 import { ref } from 'vue';
 import { useRealestatesStore } from '@/stores/realestates';
 const useRealestateStore = useRealestatesStore();
 const licenseData = useRealestateStore.realestate.license;
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
    <BasicInput placeholder="رقم الرخصة" type="number" class="w-1/5 p-2" />
    <DateInput placeholder=" تاريخ الرخصة" class="w-1/5 p-2" />
    <SingleSelectInput placeholder="المنطقة" :options="['1', '2', '3']" class="w-1/5 p-2" />
    <SingleSelectInput placeholder="المدينة" :options="['1', '2', '3']" class="w-1/5 p-2" />
    <SingleSelectInput placeholder="الحي" :options="['1', '2', '3']" class="w-1/5 p-2" />
    <TextAreaInput class="w-full p-2" label="الملاحظات" />
   </div>
  </div>
 </form>
</template>
