<script setup>
 import SingleSelectInput from '@/components/Inputs/SingleSelectInput.vue';
 import BasicInput from '@/components/Inputs/BasicInput.vue';
 import DateInput from '@/components/Inputs/DateInput.vue';
 import TextAreaInput from '@/components/Inputs/TextAreaInput.vue';
 import { useRealestatesStore } from '@/stores/realestates';
 import { useAreasCitiesQuartersStore } from '@/stores/areasCitiesQuarters';
 import { ref, computed } from 'vue';
 const useRealestateStore = useRealestatesStore();
 const useAreasCitiesQuarters = useAreasCitiesQuartersStore();
 const areas = useAreasCitiesQuarters.areas;
 const licenseData = useRealestateStore.realestate.license;
 const realestateTypes = useRealestateStore.realestateTypes;

 const cities = ref([]);
 const quarters = ref([]);
 const logDate = (date) => {
  licenseData.date = date;
  console.log(areas);
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
 <form>
  <div class="mb-5">
   <div class="flex flex-wrap justify-between items-center">
    <BasicInput v-model="licenseData.number" placeholder="رقم الرخصة" type="number" class="w-1/5 p-2" />
    <DateInput @getDate="logDate" placeholder=" تاريخ الرخصة" class="w-1/5 p-2" />
    <SingleSelectInput @on-select="getCities" placeholder="المنطقة" :options="areas" class="w-1/5 p-2" />
    <SingleSelectInput @on-select="(event) => (licenseData.issuance_place_id = event.id)" placeholder="المدينة" :options="cities" class="w-1/5 p-2" />
    <SingleSelectInput
     @on-select="(event) => (licenseData.realestate_type_id = event.id)"
     placeholder="نوع العقار"
     :options="realestateTypes"
     class="w-1/5 p-2"
    />
    <TextAreaInput v-model="licenseData.note" class="w-full p-2" label="الملاحظات" />
   </div>
  </div>
 </form>
</template>
