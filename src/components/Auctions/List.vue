<script setup>
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
        <td class="pr-5 pl-0 border-b border-[#ebedf2] dark:border-[#191e3a] text-center">
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
          <div>
           <button type="button" class="pr-3" v-tippy:report>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
             <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
              <path
               d="M12.25 2.834c-.46-.078-1.088-.084-2.22-.084c-1.917 0-3.28.002-4.312.14c-1.012.135-1.593.39-2.016.812c-.423.423-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.29v4c0 1.906.002 3.26.14 4.288c.135 1.006.389 1.586.812 2.01c.423.422 1.003.676 2.009.811c1.028.139 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.423-.423.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-.437c0-1.536-.01-2.264-.174-2.813h-3.13c-1.133 0-2.058 0-2.79-.098c-.763-.103-1.425-.325-1.954-.854c-.529-.529-.751-1.19-.854-1.955c-.098-.73-.098-1.656-.098-2.79zm1.5.776V5c0 1.2.002 2.024.085 2.643c.08.598.224.891.428 1.094c.203.204.496.348 1.094.428c.619.083 1.443.085 2.643.085h2.02a45.815 45.815 0 0 0-1.17-1.076l-3.959-3.563A37.2 37.2 0 0 0 13.75 3.61m-3.575-2.36c1.385 0 2.28 0 3.103.315c.823.316 1.485.912 2.51 1.835l.107.096l3.958 3.563l.125.112c1.184 1.065 1.95 1.754 2.361 2.678c.412.924.412 1.954.411 3.546v.661c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.945c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.75-.749 1.701-1.08 2.878-1.238c1.144-.153 2.607-.153 4.455-.153h.056z"
              />
              <path
               d="M11.547 16.513a.75.75 0 0 0 0-1.026l-1.875-2a.75.75 0 1 0-1.094 1.026l.69.737H6a.75.75 0 1 0 0 1.5h3.269l-.691.737a.75.75 0 1 0 1.094 1.026z"
              />
             </g>
            </svg>
           </button>
           <tippy target="report">تقرير</tippy>
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
