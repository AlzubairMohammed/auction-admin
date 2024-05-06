<script setup>
 import SingleSelectInput from '@/components/Inputs/SingleSelectInput.vue';
 import BasicInput from '@/components/Inputs/BasicInput.vue';
 import TextAreaInput from '@/components/Inputs/TextAreaInput.vue';
 import { useRealestatesStore } from '@/stores/realestates';
 import { useAreasCitiesQuartersStore } from '@/stores/areasCitiesQuarters';
 import { ref } from 'vue';
 const useRealestateStore = useRealestatesStore();
 const useAreasCitiesQuarters = useAreasCitiesQuartersStore();
 const areas = useAreasCitiesQuarters.areas;
 const licenseData = useRealestateStore.realestate.license;
 const licenseErrors = useRealestateStore.realestateErrors.license;
 const realestateTypes = useRealestateStore.realestateTypes;

 const cities = ref([]);
 const quarters = ref([]);
 const logDate = (date) => {
  licenseData.date = date;
 };
 const getCities = async (event) => {
  await useAreasCitiesQuarters.getAreaCities(event.id);
  cities.value = useAreasCitiesQuarters.cities;
 };
</script>
<template>
 <form>
  <div class="mb-5">
   <div class="flex flex-wrap justify-between items-center">
    <BasicInput v-model="licenseData.number" placeholder="رقم الرخصة" type="number" class="w-1/5 p-2" :error-message="licenseErrors.number" />
    <DateInput @getDate="logDate" placeholder=" تاريخ الرخصة" class="w-1/5 p-2" :error-message="licenseErrors.date" />
    <SingleSelectInput @on-select="getCities" placeholder="المنطقة" :options="areas" class="w-1/5 p-2" :error-message="licenseErrors.area" />
    <SingleSelectInput
     @on-select="(event) => (licenseData.issuance_place_id = event.id)"
     placeholder="المدينة"
     :options="cities"
     class="w-1/5 p-2"
     :error-message="licenseErrors.issuance_place_id"
    />
    <SingleSelectInput
     @on-select="(event) => (licenseData.realestate_type_id = event.id)"
     placeholder="نوع العقار"
     :options="realestateTypes"
     class="w-1/5 p-2"
     :error-message="licenseErrors.realestate_type_id"
    />
    <TextAreaInput v-model="licenseData.note" class="w-full p-2" label="الملاحظات" />
   </div>
  </div>
 </form>
</template>
