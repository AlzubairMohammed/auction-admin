<script setup>
 import { Dialog, DialogOverlay, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
 import { computed, ref } from 'vue';
 import { useCostEvaluationsStore } from '@/stores/costEvaluations';
 import SingleSelectInput from '@/components/Inputs/SingleSelectInput.vue';
 const costEvaluationsSotre = useCostEvaluationsStore();

 const formData = ref({
  id: null,
  title: '',
  area: '',
  price: '',
 });
 const isModalActive = ref(false);

 //   directTotal () => {
 //   let sum = 0;
 //   for (const item of items) {
 //    sum += item?.price * item?.area;
 //   }
 //   costEvaluationsSotre?.directCostOperations?.directTotalCost = sum;
 //   isResultModalActive.value = true;
 //  };
 const pushItem = async () => {
  await costEvaluationsSotre.directCostOperations.push(formData.value);
  formData.value = { id: null, title: '', area: '', price: '' };
  confirmCancel('confirm');
 };

 const props = defineProps({
  title: '',
  button: '',
  buttonLabel: '',
  hasCancel: false,
  modelValue: '',
  submitFunction: '',
  params: {
   id: null,
   title: '',
  },
 });

 const emit = defineEmits(['update:modelValue', 'cancel', 'confirm']);

 const value = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
 });

 const confirmCancel = (mode) => {
  value.value = false;
  emit(mode);
 };

 const cancel = () => confirmCancel('cancel');

 window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && value.value) {
   cancel();
  }
 });
</script>
<template>
 <TransitionRoot appear :show="value || false" as="template">
  <Dialog as="div" @close="!value" class="relative z-[51]">
   <TransitionChild
    as="template"
    enter="duration-300 ease-out"
    enter-from="opacity-0"
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
        {{ formData.id ? 'تعديل معامل' : 'اضافة معامل' }}
       </div>
       <div class="p-5">
        <form @submit.prevent="pushItem">
         <div class="mb-5">
          <input id="title" type="text" placeholder="ادخل اسم البيان" class="form-input" v-model="formData.title" />
         </div>
         <div class="mb-5">
          <SingleSelectInput
           :options="[{ name: 'نسبة' }, { name: 'ريال' }]"
           id="title"
           type="text"
           placeholder="ادخل نوع البيان"
           class="form-input"
           v-model="formData.title"
          />
         </div>
         <div class="ltr:text-right rtl:text-left flex justify-end items-center mt-8">
          <button type="button" class="btn btn-outline-danger" @click="cancel">الغاء</button>
          <button type="submit" class="btn btn-primary ltr:ml-4 rtl:mr-4">
           {{ formData.id ? 'تعديل' : 'اضافة' }}
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
