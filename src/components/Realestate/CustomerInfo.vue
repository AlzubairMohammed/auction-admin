<script setup>
 import BasicInput from '@/components/Inputs/BasicInput.vue';
 import { useRealestatesStore } from '@/stores/realestates';
 const useStore = useRealestatesStore();
 const customerData = useStore.customer;
</script>
<template>
 <form>
  <div class="mb-5">
   <BasicInput class="m-3" required v-model="customerData.customer_name" placeholder="اسم العميل" />
   <BasicInput class="m-3" required v-model="customerData.customer_number" placeholder="رقم جوال العميل" type="number" />
   <BasicInput class="m-3" required v-model="customerData.owner_name" placeholder="اسم المالك" />
   <BasicInput class="m-3" required v-model="customerData.owner_number" placeholder="رقم جوال المالك" type="number" />
  </div>
 </form>
</template>
