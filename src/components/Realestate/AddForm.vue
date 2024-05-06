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
      <tab-content
       title="رفع الملفات "
       customIcon='<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" d="M10 14h2m0 0h2m-2 0v2m0-2v-2" opacity="0.5"/><path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77c.079.07.154.145.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14z"/></g></svg>'
      >
       <FileUpload />
      </tab-content>
     </form-wizard>
    </div>
   </div>
  </div>
 </div>
</template>
