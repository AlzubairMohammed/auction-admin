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
      <tab-content
       title="بيانات العميل"
       customIcon='<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="9" r="2"/><path d="M13 15c0 1.105 0 2-4 2s-4-.895-4-2s1.79-2 4-2s4 .895 4 2Z"/><path d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12Z" opacity="0.5"/><path stroke-linecap="round" d="M19 12h-4m4-3h-5"/><path stroke-linecap="round" d="M19 15h-3" opacity="0.9"/></g></svg>'
      >
       <CustomerInfo />
      </tab-content>
     </form-wizard>
    </div>
   </div>
  </div>
 </div>
</template>
