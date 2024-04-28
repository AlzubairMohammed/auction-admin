<script setup>
 import MultiselectInput from '@/components/Inputs/MultiselectInput.vue';
 import SingleSelectInput from '@/components/Inputs/SingleSelectInput.vue';
 import BasicInput from '@/components/Inputs/BasicInput.vue';
 import AttributeModal from '@/components/Scans/PropertiesModal.vue';
 import DateInput from '@/components/Inputs/DateInput.vue';
 import AddingBar from '@/components/AddingBar/AddingBar.vue';
 import TextAreaInput from '@/components/Inputs/TextAreaInput.vue';
 import { ref } from 'vue';
 import { useRealestatesStore } from '@/stores/realestates';
 import { useAreasCitiesQuartersStore } from '@/stores/areasCitiesQuarters';
 const useRealestateStore = useRealestatesStore();
 const useAreasCitiesQuarters = useAreasCitiesQuartersStore();
 const areas = useAreasCitiesQuarters.areas;
 const doumentData = useRealestateStore.realestate.document;
 const doumentErrors = useRealestateStore.realestateErrors.document;
 let isAddPropertyModalActive = ref(false);
 const cities = ref([]);
 const quarters = ref([]);
 const activeModal = () => {
  isAddPropertyModalActive.value = !isAddPropertyModalActive.value;
 };
 const logDate = (date) => {
  doumentData.date = date;
 };
 const getCities = async (event) => {
  await useAreasCitiesQuarters.getAreaCities(event?.id);
  cities.value = useAreasCitiesQuarters.cities;
  console.log(cities.value);
 };
 const getQuarters = async (event) => {
  await useAreasCitiesQuarters.getCityQuarters(event?.id);
  quarters.value = useAreasCitiesQuarters.quarters;
 };
</script>
<template>
 <AttributeModal v-model="isAddPropertyModalActive" :params="{ id: null, title: '' }" />
 <form>
  <div class="mb-5">
   <div class="flex flex-wrap justify-between items-center">
    <BasicInput v-model="doumentData.number" placeholder="رقم الصك" type="number" class="w-1/4 p-2" :error-message="doumentErrors.number" />
    <DateInput @getDate="logDate" placeholder="تاريخ الصك" class="w-1/4 p-2" :error-message="doumentErrors.date" />
    <BasicInput v-model="doumentData.area_number" placeholder="رقم القطعة" type="number" class="w-1/4 p-2" :error-message="doumentErrors.area_number" />
    <BasicInput v-model="doumentData.block_number" placeholder="رقم البلك" type="number" class="w-1/4 p-2" :error-message="doumentErrors.block_number" />
    <BasicInput v-model="doumentData.graph_number" placeholder="رقم المخطط" type="number" class="w-1/4 p-2" :error-message="doumentErrors.graph_number" />
    <BasicInput v-model="doumentData.space" placeholder="المساحة" type="number" class="w-1/4 p-2" :error-message="doumentErrors.space" />
    <SingleSelectInput @on-select="getCities" placeholder="المنطقة" :options="areas" class="w-1/4 p-2" :error-message="doumentErrors.area_id" />
    <SingleSelectInput @on-select="getQuarters" placeholder="المدينة" :options="cities" class="w-1/4 p-2" :error-message="doumentErrors.city_id" />
    <SingleSelectInput
     @on-select="(event) => (doumentData.quarter_id = event?.id)"
     placeholder="الحي"
     :options="quarters"
     class="w-1/4 p-2"
     :error-message="doumentErrors.quarter_id"
    />
    <AddingBar :clicked-function="activeModal" title="الحدود و الاطوال" class="mt-3 w-full" />
    <div class="p-3 w-1/4">
     <div class="bg-[#eee] p-3 rounded shadow dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 p-3">
      <label for="btnRight">شمالا</label>
      <BasicInput v-model="doumentData.north_desc" placeholder="الوصف" type="number" class="w-full p-2" :error-message="doumentErrors.north_desc" />
      <BasicInput v-model="doumentData.north_space" placeholder="الطول" type="number" class="w-full p-2" :error-message="doumentErrors.north_space" />
     </div>
    </div>
    <div class="p-3 w-1/4">
     <div class="bg-[#eee] p-3 rounded shadow dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 p-3">
      <label for="btnRight">شرقا</label>
      <BasicInput v-model="doumentData.west_desc" placeholder="الوصف" type="number" class="w-full p-2" :error-message="doumentErrors.west_desc" />
      <BasicInput v-model="doumentData.west_space" placeholder="الطول" type="number" class="w-full p-2" :error-message="doumentErrors.west_space" />
     </div>
    </div>
    <div class="p-3 w-1/4">
     <div class="bg-[#eee] p-3 rounded shadow dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 p-3">
      <label for="btnRight">غربا</label>
      <BasicInput v-model="doumentData.east_desc" placeholder="الوصف" type="number" class="w-full p-2" :error-message="doumentErrors.east_desc" />
      <BasicInput v-model="doumentData.east_space" placeholder="الطول" type="number" class="w-full p-2" :error-message="doumentErrors.east_space" />
     </div>
    </div>
    <div class="p-3 w-1/4">
     <div class="bg-[#eee] p-3 rounded shadow dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 p-3">
      <label for="btnRight">جنوبا</label>
      <BasicInput v-model="doumentData.south_desc" placeholder="الوصف" type="number" class="w-full p-2" :error-message="doumentErrors.south_desc" />
      <BasicInput v-model="doumentData.south_space" placeholder="الطول" type="number" class="w-full p-2" :error-message="doumentErrors.south_space" />
     </div>
    </div>
    <TextAreaInput v-model="doumentData.note" class="w-full p-2" label="الملاحظات" />
   </div>
  </div>
 </form>
</template>
