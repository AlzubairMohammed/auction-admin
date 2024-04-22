<script setup>
 import BasicInput from '@/components/Inputs/BasicInput.vue';
 import { useRealestatesStore } from '@/stores/realestates';
 const useRealestateStore = useRealestatesStore();
 const realestateData = useRealestateStore.realestate;
</script>
<template>
 <form>
  <div class="mb-5">
   <BasicInput class="m-3" required v-model="realestateData.customer_name" placeholder="اسم العميل" />
   <BasicInput class="m-3" required v-model="realestateData.customer_number" placeholder="رقم جوال العميل" type="number" />
   <BasicInput class="m-3" required v-model="realestateData.owner_name" placeholder="اسم المالك" />
   <BasicInput class="m-3" required v-model="realestateData.owner_number" placeholder="رقم جوال المالك" type="number" />
  </div>
 </form>
</template>
