<script setup>
 import { Dialog, DialogOverlay, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
 import { computed, ref, onMounted } from 'vue';
 import { useRouter } from 'vue-router';
 import { useRealestatesStore } from '@/stores/realestates';
 import { useCostEvaluationsStore } from '@/stores/costEvaluations';
 import BasicInput from '@/components/Inputs/BasicInput.vue';
 import SingleSelectInput from '@/components/Inputs/SingleSelectInput.vue';
 import iconX from '@/components/icon/icon-x.vue';

 const realestateStore = useRealestatesStore();
 const useCostEvaluationStore = useCostEvaluationsStore();
 const costEvaluation = useCostEvaluationStore.costEvaluation;
 const router = useRouter();
 const realestate = realestateStore.realestate;
 const options = ref([]);
 const formData = ref({
  id: '',
 });
 const props = defineProps({
  modelValue: '',
 });
 const errorMessage = ref('');
 const realestateId = ref('');
 const emit = defineEmits(['update:modelValue', 'cancel', 'confirm']);

 const value = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
 });

 const confirmCancel = (mode) => {
  value.value = false;
  emit(mode);
  router.push({ name: 'home' });
 };

 const cancel = () => confirmCancel('cancel');

 window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && value.value) {
   cancel();
  }
 });
 onMounted(async () => {
  await realestateStore.fetchRealestates();
  realestateStore.realestates.forEach((item) => {
   options.value.push({ name: `${item[`${realestate.key}`]}`, id: item.id });
  });
 });
 const onSelectSearchMethod = (event) => {
  realestate.key = event.id;
  options.value = [];
  realestateStore.realestates.forEach((item) => {
   options.value.push({ name: `${item[`${event?.id}`]}`, id: item.id });
  });
 };
 const searchRealestates = async () => {
  await realestateStore.fetchRealestates();
  options.value = [];
  realestateStore.realestates.forEach((item) => {
   console.log(item);
   options.value.push({ name: `${item[`${realestate.key}`]}`, id: item.id });
  });
 };
 const onSubmit = () => {
  if (!realestateId.value) {
   errorMessage.value = 'يجب اختيار العقار';
   return;
  }
  costEvaluation.realestate_id = realestateId.value;
  value.value = false;
 };
 const onSelectAuction = (event) => {
  realestateId.value = event.id;
  errorMessage.value = '';
 };
 const goToAddAuction = () => {
  value.value = false;
  router.push({ name: 'realestates/add-page' });
 };
</script>
<template>
 <TransitionRoot appear :show="value || false" as="template">
  <Dialog as="div" @close="!value" class="relative z-[51]">
   <TransitionChild
    as="template"
    enter="duration-300 ease-out"
    enter-from="opacity-0"
    const
    realestates="realestateStore.realestates;"
    enter-to="opacity-100"
    leave="duration-200 ease-in"
    leave-from="opacity-100"
    leave-to="opacity-0"
   >
    <DialogOverlay class="fixed inset-0 bg-[black]/60" />
   </TransitionChild>

   <div class="fixed inset-0 overflow-y-auto">
    <div class="flex min-h-full items-center justify-center px-4 py-8">
     <TransitionChild
      as="template"
      enter="duration-300 ease-out"
      enter-from="opacity-0 scale-95"
      enter-to="opacity-100 scale-100"
      leave="duration-200 ease-in"
      leave-from="opacity-100 scale-100"
      leave-to="opacity-0 scale-95"
     >
      <DialogPanel class="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
       <button
        type="button"
        class="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
        @click="cancel"
       >
        <icon-x />
       </button>
       <div class="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">
        {{ formData.id ? 'تعديل' : 'اختار العقار' }}
       </div>
       <div class="p-5">
        <form @submit.prevent="onSubmit">
         <div class="mb-5 flex flex-wrap">
          <SingleSelectInput
           placeholder="اختر طريقة البحث"
           :options="[
            { name: 'رقم المزاد', id: 'auction_id' },
            { name: 'رقم جوال العميل', id: 'customer_number' },
            { name: 'رقم جوال المالك', id: 'owner_number' },
           ]"
           @on-select="onSelectSearchMethod"
           class="w-1/2 pr-2 pl-2"
          />
          <BasicInput id="name" type="text" placeholder="بحث" class="w-1/2 pl-2" v-model="realestate.value" @input="searchRealestates" />
          <SingleSelectInput
           id="auction_id"
           label="العقار"
           placeholder="اختر العقار"
           class="w-full mt-2 px-2 mb-[60px]"
           v-model="formData.id"
           :options="options"
           @on-select="onSelectAuction"
           :error-message="errorMessage"
          />
         </div>
         <div class="ltr:text-right rtl:text-left flex justify-end items-center mt-8">
          <button type="button" class="btn btn-outline-info" @click="goToAddAuction">إضافة عقار جديد</button>
          <button type="submit" class="btn btn-info ltr:ml-4 rtl:mr-4">
           {{ formData.id ? 'تعديل' : 'اختيار' }}
          </button>
         </div>
        </form>
       </div>
      </DialogPanel>
     </TransitionChild>
    </div>
   </div>
  </Dialog>
 </TransitionRoot>
</template>
