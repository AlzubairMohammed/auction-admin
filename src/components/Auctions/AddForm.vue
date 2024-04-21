<script setup>
 import SingleSelectInput from '@/components/Inputs/SingleSelectInput.vue';
 import BasicInput from '@/components/Inputs/BasicInput.vue';
 import DateInput from '@/components/Inputs/DateInput.vue';
 import { useAuctionsStore } from '@/stores/auctions';
 import { ref } from 'vue';
 const useStore = useAuctionsStore();
 let isAddPropertyModalActive = ref(false);
 let auctionData = ref({
  assignment_number: '',
  auction_type: '',
  start_date: '',
  end_date: '',
  user_id: 2,
  name: '',
 });
 const submit = async () => {
  const data = await useStore.addAuction(auctionData.value);
  console.log(data);
 };
</script>
<template>
 <form @submit.prevent="submit" class="mb-5 grid grid-cols-1 p-[100px] gap-5 p-5 bg-white shadow-md rounded-md">
  <SingleSelectInput :isRequired="true" v-model="auctionData.auction_type" :placeholder="'اختار نوع المزاد'" :options="['type2', 'type1']" />
  <BasicInput required v-model="auctionData.name" :placeholder="'اسم المزاد'" />
  <BasicInput required v-model="auctionData.assignment_number" :placeholder="'رقم التكليف'" />
  <DateInput required v-model="auctionData.start_date" :placeholder="'تاريخ بداية المزاد'" type="date" />
  <DateInput required v-model="auctionData.end_date" :placeholder="'تاريخ نهاية المزاد'" />
  <button type="submit" class="btn btn-primary w-1/6 mb-0">التالي</button>
 </form>
</template>

<style scoped>
 .grid {
  display: grid;
 }

 .grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
 }

 .gap-5 {
  gap: 1.25rem;
 }

 .col-span-1 {
  grid-column: span 1;
 }
</style>
