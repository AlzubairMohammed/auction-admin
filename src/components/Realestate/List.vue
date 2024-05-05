<script setup>
 import { ref, onMounted } from 'vue';
 //  import Vue3Datatable from '@bhplugin/vue3-datatable';
 import { useRealestatesStore } from '@/stores/realestates';
 import { useAppStore } from '@/stores/index';
 import IconTrashLines from '@/components/icon/icon-trash-lines.vue';
 import IconPlus from '@/components/icon/icon-plus.vue';
 import IconEdit from '@/components/icon/icon-edit.vue';
 import IconEye from '@/components/icon/icon-eye.vue';
 const items = ref([]);
 const store = useAppStore();
 const useRealestates = useRealestatesStore();
 const cols = ref([
  { field: 'id', title: 'رقم العقار' },
  { field: 'name', title: 'اسم المزاد' },
  { field: 'customer_name', title: 'اسم العميل' },
  { field: 'owner_number', title: 'اسم المالك' },
  { field: 'actions', title: 'العمليات' },
 ]);
 onMounted(async () => {
  store.isShowMainLoader = true;
  await useRealestates.fetchRealestates();
  items.value = useRealestates.realestates;
  if (items.value) {
   store.isShowMainLoader = false;
  }
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
       اضافة جديد
      </router-link>
     </div>
     <div class="ltr:ml-auto rtl:mr-auto">
      <input v-model="search" type="text" class="form-input" placeholder="بحث..." />
     </div>
    </div>

    <!-- <vue3-datatable
     ref="datatable"
     :rows="items"
     :columns="cols"
     :totalRows="items?.length"
     :hasCheckbox="true"
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
       {{ data?.value?.name }}
      </div>
     </template>

     <template #actions="data">
      <div class="flex gap-4 items-center justify-center">
       <router-link to="/apps/invoice/edit" class="hover:text-info">
        <icon-edit class="w-4.5 h-4.5" />
       </router-link>
       <router-link :to="`/auctions/preview-page/${data?.value?.id}`" class="hover:text-primary">
        <icon-eye />
       </router-link>
       <button type="button" class="hover:text-danger" @click="deleteRow(`${data?.assignment_number}`)">
        <icon-trash-lines />
       </button>
      </div>
     </template>
    </vue3-datatable> -->
    <h1>Realestate List</h1>
   </div>
  </div>
 </div>
</template>
