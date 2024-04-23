<script lang="ts" setup>
 import { ref, onMounted } from 'vue';
 import IconTrashLines from '@/components/icon/icon-trash-lines.vue';
 import IconPencil from '@/components/icon/icon-pencil.vue';
 import { useAuctionsStore } from '@/stores/auctions';
 import { useAppStore } from '@/stores/index';
 const store = useAppStore();
 const useAuctions = useAuctionsStore();
 const tableData = ref([]);
 onMounted(async () => {
  store.isShowMainLoader = true;
  await useAuctions.fetchAuctions();
  tableData.value = useAuctions.auctions;
  console.log(tableData.value);
 });
</script>
<template>
 <div class="panel">
  <div class="mb-5">
   <div class="table-responsive">
    <table>
     <thead>
      <tr>
       <th>#</th>
       <th>الاسم</th>
       <th>رقم التكليف</th>
       <!-- <th>الحالة</th> -->
       <th>تاريخ البداية</th>
       <th>تاريخ النهاية</th>

       <th class="text-center">العمليات</th>
      </tr>
     </thead>
     <tbody>
      <template v-for="(data, index) in tableData" :key="data?.id">
       <tr>
        <td>{{ ++index }}</td>
        <td class="whitespace-nowrap">{{ data?.name }}</td>
        <td>{{ data?.start_date }}</td>
        <td>{{ data?.end_date }}</td>
        <td>{{ data?.assignment_number }}</td>
        <!-- <td
         class="whitespace-nowrap"
         :class="{
          'text-success': data?.status === 'Complete',
          'text-secondary': data?.status === 'Pending',
          'text-info': data?.status === 'In Progress',
          'text-danger': data?.status === 'Canceled',
         }"
        >
         {{ data?.name }}
        </td> -->
        <td class="p-3 border-b border-[#ebedf2] dark:border-[#191e3a] text-center">
         <div class="flex items-center">
          <div>
           <button type="button" v-tippy:edit>
            <icon-pencil class="ltr:mr-2 rtl:ml-2" />
           </button>
           <tippy target="edit">تعديل</tippy>
          </div>
          <div>
           <button type="button" v-tippy:delete>
            <icon-trash-lines />
           </button>
           <tippy target="delete">حذف</tippy>
          </div>
         </div>
        </td>
       </tr>
      </template>
     </tbody>
    </table>
   </div>
  </div>
 </div>
</template>
