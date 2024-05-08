<script setup>
 import { ref, onMounted } from 'vue';
 import Vue3Datatable from '@bhplugin/vue3-datatable';
 import { useAuctionsStore } from '@/stores/auctions';
 import { useAppStore } from '@/stores/index';
 import IconPlus from '@/components/icon/icon-plus.vue';
 const items = ref([]);
 const store = useAppStore();
 const useAuctions = useAuctionsStore();
 const cols = ref([
  { field: 'assignment_number', title: 'رقم التكليف' },
  { field: 'name', title: 'اسم المزاد' },
  { field: 'id', title: 'رقم المزاد' },
  { field: 'start_date', title: 'تاريخ البداية' },
  { field: 'end_date', title: 'تاريخ البداية' },
  { field: 'actions', title: 'العمليات' },
 ]);
 onMounted(async () => {
  store.isShowMainLoader = true;
  await useAuctions.fetchAuctions();
  items.value = useAuctions.auctions;
 });
</script>
<template>
 <div>
  <div class="panel px-0 pb-1.5 border-[#e0e6ed] dark:border-[#1b2e4b]">
   <div class="datatable invoice-table">
    <div class="mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5">
     <div class="flex items-center gap-2">
      <router-link to="/auctions/add-page" class="btn btn-primary gap-2">
       <icon-plus />
       اضافة مزاد جديد
      </router-link>
     </div>
     <div class="ltr:ml-auto rtl:mr-auto">
      <input v-model="search" type="text" class="form-input" placeholder="بحث..." />
     </div>
    </div>
    <vue3-datatable
     ref="datatable"
     :rows="items"
     :columns="cols"
     :totalRows="items?.length"
     :sortable="true"
     :search="search"
     :paginationInfo="`عرض ${1} to {to} of {count} entries`"
     skin="whitespace-nowrap bh-table-hover"
     firstArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M13 19L7 12L13 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path opacity="0.5" d="M16.9998 19L10.9998 12L16.9998 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>'
     lastArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M11 19L17 12L11 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path opacity="0.5" d="M6.99976 19L12.9998 12L6.99976 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg> '
     previousArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M15 5L9 12L15 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>'
     nextArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M9 5L15 12L9 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>'
    >
     <template #invoice="data">
      <router-link to="/auctions/preview-page" class="text-primary underline font-semibold hover:no-underline">#{{ data.assignment_number }}</router-link>
     </template>
     <template #name="data">
      <div class="flex items-center font-semibold">
       {{ data.value.name }}
      </div>
     </template>

     <template #actions="data">
      <div class="flex gap-4">
       <router-link :to="`/auctions/preview-page/${data.value.id}`" class="text-primary"> عرض </router-link>
       <router-link to="/apps/invoice/edit" class="text-success"> تعديل </router-link>
       <router-link :to="`/auctions/preview-page/${data.value.id}`" class="text-danger"> حذف </router-link>
      </div>
     </template>
    </vue3-datatable>
   </div>
  </div>
 </div>
</template>
