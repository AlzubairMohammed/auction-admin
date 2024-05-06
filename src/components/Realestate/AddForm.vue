<script setup>
 import { FormWizard, TabContent } from 'vue3-form-wizard';
 import 'vue3-form-wizard/dist/style.css';
 import { useMeta } from '@/composables/use-meta';
 import CustomerInfo from '@/components/Realestate/CustomerInfo.vue';
 import DocumentInfo from '@/components/Realestate/DocumentInfo.vue';
 import License from '@/components/Realestate/License.vue';
 import FileUpload from '@/components/Realestate/FileUpload.vue';
 import { ref, onMounted } from 'vue';
 import { useRoute } from 'vue-router';
 import { useRealestatesStore } from '@/stores/realestates';
 import SelectAucationModal from '@/components/Realestate/SelectAucationModal.vue';
 const useStore = useRealestatesStore();
 const router = useRoute();
 const customerData = useStore.realestate;
 const wizardRef = ref(null);
 const isModalActive = ref(false);
 useMeta({ title: 'Wizards' });

 const onSubmit = () => {
  customerData.auction_id = router.params.id;
  useStore.addRealestate(customerData, wizardRef.value);
 };
 const beforeChange = () => {
  return true;
 };
 onMounted(() => {
  wizardRef.value.maxStep = 1;
  if (!router.params.id) {
   isModalActive.value = true;
  }
 });
</script>

<template>
 <div>
  <SelectAucationModal v-model="isModalActive" />
  <div class="pt-5 space-y-8">
   <div class="panel">
    <div class="mb-5">
     <form-wizard
      ref="wizardRef"
      @on-complete="onSubmit"
      :beforeChange="beforeChange"
      color="#4361ee"
      class="circle"
      nextButtonText="التالي"
      backButtonText="الرجوع"
      finishButtonText="إنهاء"
     >
     </form-wizard>
    </div>
   </div>
  </div>
 </div>
</template>
