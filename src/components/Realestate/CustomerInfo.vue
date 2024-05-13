<script setup>
 import BasicInput from '@/components/Inputs/BasicInput.vue';
 import { useRealestatesStore } from '@/stores/realestates';
 const useRealestateStore = useRealestatesStore();
 const realestateData = useRealestateStore.realestate;
 const errors = useRealestateStore.realestateErrors.customer;
</script>
<template>
 <form>
  <div class="mb-5">
   <BasicInput type="tex" class="m-3" required v-model="realestateData.customer_name" :error-message="errors.customer_name" placeholder="اسم العميل" />
   <BasicInput
    class="m-3"
    required
    v-model="realestateData.customer_number"
    :error-message="errors.customer_number"
    placeholder="رقم جوال العميل"
    type="number"
   />
   <BasicInput class="m-3" required v-model="realestateData.owner_name" :error-message="errors.owner_name" placeholder="اسم المالك" />
   <BasicInput class="m-3" required v-model="realestateData.owner_number" :error-message="errors.owner_number" placeholder="رقم جوال المالك" type="number" />
  </div>
 </form>
</template>
