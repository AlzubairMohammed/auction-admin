<script setup>
 import SingleSelectInput from '@/components/Inputs/SingleSelectInput.vue';
 import BasicInput from '@/components/Inputs/BasicInput.vue';
 import DateInput from '@/components/Inputs/DateInput.vue';
 import { useAuctionsStore } from '@/stores/auctions';
 import { ref } from 'vue';
 import { useRouter } from 'vue-router';
 const router = useRouter();
 const auctionsStore = useAuctionsStore();
 const auctionErrors = auctionsStore.auctionErrors;
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
  const data = await auctionsStore.addAuction(auctionData.value);
  if (data) router.push({ name: 'auctions/preview-page', params: { id: data.id } });
 };
</script>
<template>
 <form @submit.prevent="submit" class="mb-5 grid grid-cols-1 p-[100px] gap-5 p-5 bg-white shadow-md rounded-md">
  <h1 class="text-2xl font-bold mb-5 text-center">
   <span class="underline">اضافة مزاد</span>
  </h1>
  <SingleSelectInput
   :isRequired="true"
   @on-select="(event) => (auctionData.auction_type = event.id)"
   :placeholder="'اختار نوع المزاد'"
   :options="[
    { name: 'الكتروني', id: 1 },
    { name: 'هجين', id: 2 },
   ]"
   :errorMessage="auctionErrors.auction_type"
  />
  <BasicInput v-model="auctionData.name" :errorMessage="auctionErrors.name" :placeholder="'اسم المزاد'" />
  <BasicInput v-model="auctionData.assignment_number" :errorMessage="auctionErrors.assignment_number" :placeholder="'رقم التكليف'" />
  <DateInput @get-date="(date) => (auctionData.start_date = date)" :errorMessage="auctionErrors.start_date" :placeholder="'تاريخ بداية المزاد'" type="date" />
  <DateInput @get-date="(date) => (auctionData.end_date = date)" :errorMessage="auctionErrors.end_date" :placeholder="'تاريخ نهاية المزاد'" />
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
