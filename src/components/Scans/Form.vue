<script setup>
 import { FormWizard, TabContent } from 'vue3-form-wizard';
 import 'vue3-form-wizard/dist/style.css';
 import { useMeta } from '@/composables/use-meta';
 import LocationSelectForm from '@/components/Scans/LocationSelectForm.vue';
 import RealestateDetails from '@/components/Scans/RealestateDetails.vue';
 import RealestateComponents from '@/components/Scans/RealestateComponents.vue';
 import ImagesUpload from '@/components/Scans/ImagesUpload.vue';
 import RealestateFeatures from '@/components/Scans/RealestateFeatures.vue';
 import SelectRealestateModal from '@/components/Scans/SelectRealestateModal.vue';
 import { ref, onMounted } from 'vue';
 import { useScansStore } from '@/stores/scans';
 import { useRealestatesStore } from '@/stores/realestates';
 import { useRoute, useRouter } from 'vue-router';
 const realestatesStore = useRealestatesStore();
 const route = useRoute();
 const router = useRouter();
 const useStore = useScansStore();
 const formData = useStore.scan;
 const isModalActive = ref(false);

 useMeta({ title: 'Wizards' });

 const onComplete = async () => {
  const data = await useStore.addScan(formData);
  const realestateData = await realestatesStore.getRealestate(data.realestate_id);
  if (data) router.push({ name: 'auctions/preview-page', params: { id: realestateData.auction_id } });
 };
 onMounted(() => {
  if (!route.params.id) {
   isModalActive.value = true;
  } else {
   formData.realestate_id = route.params.id;
  }
 });
</script>

<template>
 <div>
  <SelectRealestateModal v-model="isModalActive" />
  <div class="pt-5 space-y-8">
   <div class="panel">
    <div class="mb-5">
     <form-wizard @on-complete="onComplete" color="#4361ee" class="circle" nextButtonText="التالي" backButtonText="الرجوع" finishButtonText="إنهاء">
      <tab-content
       title="تحديد موقع العقار"
       customIcon='<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M7.25 10a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M12 6.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"/><path d="M3.524 8.857a8.288 8.288 0 0 1 8.26-7.607h.432a8.288 8.288 0 0 1 8.26 7.607a8.944 8.944 0 0 1-1.99 6.396l-4.793 5.861a2.187 2.187 0 0 1-3.386 0l-4.793-5.861a8.943 8.943 0 0 1-1.99-6.396m8.26-6.107A6.788 6.788 0 0 0 5.02 8.98a7.443 7.443 0 0 0 1.656 5.323l4.793 5.862a.687.687 0 0 0 1.064 0l4.793-5.862A7.443 7.443 0 0 0 18.98 8.98a6.788 6.788 0 0 0-6.765-6.23z"/></g></svg>'
      >
       <LocationSelectForm />
      </tab-content>
      <tab-content
       title="تفاصيل العقار"
       customIcon='<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 8H8c-1.1 0-2 .9-2 2v6a2 2 0 0 0 2 2h10c1.11 0 2-.89 2-2v-6a2 2 0 0 0-2-2m-4 8H8v-2h6zm4-4H8v-2h10zm4-6H4v16H2V2h2v2h18z"/></svg>'
      >
       <RealestateDetails />
      </tab-content>
      <tab-content
       title="مميزات العقار"
       customIcon='<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 14V7.5L14 4L9 7.5V9H7V6.5l7-5l7 5V14zm-4.5-6h1V7h-1zm-2 0h1V7h-1zm2 2h1V9h-1zm-2 0h1V9h-1zM7 18.5l6.95 1.9l5.95-1.85q-.125-.225-.363-.388T19 18h-5.05q-.675 0-1.075-.05t-.825-.2l-2.325-.775l.55-1.95l2.025.675q.425.125 1 .2t1.7.1q0-.275-.162-.525t-.388-.325L8.6 13H7zM1 22V11h7.6q.175 0 .35.038t.325.087L15.15 13.3q.825.3 1.338 1.05T17 16h2q1.25 0 2.125.825T22 19v1l-8 2.5l-7-1.95V22zm2-2h2v-7H3z"/></svg>'
      >
       <RealestateFeatures />
      </tab-content>
      <tab-content
       title="مكونات العقار"
       customIcon='<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1024 1024h768v896H128V256h896zM256 384v640h640V384zm640 1408v-640H256v640zm768 0v-640h-640v640zM1280 0h768v768h-768zm640 640V128h-512v512z"/></svg>'
      >
       <RealestateComponents />
      </tab-content>
      <tab-content
       title="رقع الصور و الارسال"
       customIcon='<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M432 112V96a48.14 48.14 0 0 0-48-48H64a48.14 48.14 0 0 0-48 48v256a48.14 48.14 0 0 0 48 48h16"/><rect width="400" height="336" x="96" y="128" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="45.99" ry="45.99"/><ellipse cx="372.92" cy="219.64" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" rx="30.77" ry="30.55"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M342.15 372.17L255 285.78a30.93 30.93 0 0 0-42.18-1.21L96 387.64M265.23 464l118.59-117.73a31 31 0 0 1 41.46-1.87L496 402.91"/></svg>'
      >
       <ImagesUpload />
      </tab-content>
     </form-wizard>
    </div>
   </div>
  </div>
 </div>
</template>
