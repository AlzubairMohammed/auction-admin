<template>
 <div>
  <div class="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
   <button type="button" class="btn btn-primary gap-2" @click="print">
    <icon-printer />
    طباعة
   </button>
   <router-link to="/auctions/add-page" class="btn btn-secondary gap-2">
    <icon-plus />
    اضافة
   </router-link>
   <router-link :to="`/auctions/edit-page/${auction?.data?.id}`" class="btn btn-warning gap-2">
    <icon-edit />
    تعديل
   </router-link>
  </div>
  <div id="report" class="panel">
   <!-- title and logo -->
   <div class="flex justify-between flex-wrap gap-4 px-4">
    <div class="text-2xl font-semibold uppercase">تقرير مزاد</div>
    <div class="shrink-0">
     <img src="/assets/images/logo.svg" alt="" class="w-14 ltr:ml-auto rtl:mr-auto" />
    </div>
   </div>
   <!-- Header -->
   <div class="ltr:text-right rtl:text-left px-4">
    <div class="space-y-1 mt-6 text-white-dark">
     <div>13 شركة اكشن, للمزدات والتقييم العقاري, 33884,</div>
     <div>admin@gmail.com</div>
     <div>966503553231</div>
    </div>
   </div>
   <hr class="border-[#e0e6ed] dark:border-[#1b2e4b] my-6" />
   <!-- Auction Details -->
   <div class="flex justify-between lg:flex-row flex-col gap-6 flex-wrap">
    <div class="flex justify-between sm:flex-row flex-col gap-6 lg:w-full">
     <div class="xl:1/3 lg:w-2/5 sm:w-1/3 px-5">
      <div class="flex items-center w-full justify-between mb-2">
       <div class="text-white-dark">اسم المزاد :</div>
       <div>{{ auction?.data?.name }}</div>
      </div>
      <div class="flex items-center w-full justify-between mb-2">
       <div class="text-white-dark">تاريخ الإنشاء :</div>
       <div>{{ auction?.data?.created.substring(0, 10) }}</div>
      </div>
     </div>
     <div class="xl:1/3 lg:w-2/5 sm:w-1/3 px-5">
      <div class="flex items-center w-full justify-between mb-2">
       <div class="text-white-dark">تاريخ البداية :</div>
       <div>{{ auction?.data?.start_date }}</div>
      </div>
     </div>
     <div class="xl:1/3 lg:w-2/5 sm:w-1/3 px-5">
      <div class="flex items-center w-full justify-between">
       <div class="text-white-dark">تاريخ النهاية :</div>
       <div>{{ auction?.data?.end_date }}</div>
      </div>
     </div>
    </div>
   </div>

   <!-- realestates details -->
   <div v-for="(item, index) in auction?.data?.realestates" class="table-responsive mt-6">
    <h1 class="text-2xl font-semibold text-center">{{ `عقار رقم ${index + 1}` }}</h1>
    <table class="table table-bordered">
     <thead>
      <tr>
       <th>اسم العميل</th>
       <th>رقم العميل</th>
       <th>اسم المالك</th>
       <th>رقم المالك</th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>{{ item.customer_name }}</td>
       <td>{{ item.customer_number }}</td>
       <td>{{ item.owner_name }}</td>
       <td>{{ item.owner_number }}</td>
      </tr>
     </tbody>
    </table>
    <div class="flex flex-wrap">
     <img v-for="image in item.realestate_images.slice(0, 5)" :src="`http://89.116.236.251:7070/${image.path}`" alt="" class="w-1/5 p-2 rounded" />
    </div>
   </div>
  </div>
 </div>
</template>
<script setup>
 import { ref, computed, onBeforeMount, onMounted, onUpdated } from 'vue';
 import { useRoute } from 'vue-router';
 import { useMeta } from '@/composables/use-meta';
 import IconPrinter from '@/components/icon/icon-printer.vue';
 import IconPlus from '@/components/icon/icon-plus.vue';
 import IconEdit from '@/components/icon/icon-edit.vue';
 import { useAuctionsStore } from '@/stores/auctions';
 const auctionsStore = useAuctionsStore();
 const route = useRoute();
 useMeta({ title: 'Invoice Preview' });
 const auction = ref({});
 onBeforeMount(async () => {
  auction.value = await auctionsStore.getAuction(route.params.id);
 });
 const print = () => {
  let printContents = document.getElementById('report').innerHTML;
  let originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();
  window.location.reload();
  document.body.innerHTML = originalContents;
 };
</script>
