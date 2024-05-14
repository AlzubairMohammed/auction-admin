<template>
 <div>
  <div class="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
   <button type="button" class="btn btn-primary gap-2" @click="print">
    <icon-printer />
    طباعة
   </button>
   <div class="dropdown">
    <Popper :placement="'bottom-start'" offsetDistance="0" class="align-middle">
     <button to="/realestates/add-page" class="btn btn-secondary gap-2">تقييم</button>
     <template #content="{ close }">
      <ul @click="close()" class="whitespace-nowrap">
       <li><router-link :to="`/evaluations/comparisons/${realestate?.id}`">المقارنات</router-link></li>
       <li><router-link :to="`/evaluations/direct-capitlization/${realestate?.id}`">الرسملة المباشرة</router-link></li>
       <li><router-link :to="`/evaluations/cost/${realestate?.id}`">التكلفة</router-link></li>
      </ul>
     </template>
    </Popper>
   </div>
   <router-link :to="`/realestates/edit-page/${realestate?.id}`" class="btn btn-warning gap-2">
    <icon-edit />
    تعديل
   </router-link>
  </div>
  <div id="report" class="panel">
   <!-- title and logo -->
   <div class="flex justify-between flex-wrap gap-4 px-4">
    <div class="text-2xl font-semibold uppercase">بيانات العقار</div>
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
   <!-- Realestate Details -->
   <div class="flex justify-between lg:flex-row flex-col gap-6 flex-wrap">
    <div class="flex justify-between sm:flex-row flex-col gap-6 lg:w-full">
     <div class="xl:1/3 lg:w-2/5 sm:w-1/3 px-5">
      <div class="flex items-center w-full justify-between mb-2">
       <div class="text-white-dark">رقم العقار :</div>
       <div>{{ realestate?.id }}</div>
      </div>
      <div class="flex items-center w-full justify-between mb-2">
       <div class="text-white-dark">تاريخ الإنشاء :</div>
       <div>{{ realestate?.created?.substring(0, 10) }}</div>
      </div>
     </div>
     <div class="xl:1/3 lg:w-2/5 sm:w-1/3 px-5">
      <div class="flex items-center w-full justify-between mb-2">
       <div class="text-white-dark">اسم العميل :</div>
       <div>{{ realestate?.customer_name }}</div>
      </div>
      <div class="flex items-center w-full justify-between mb-2">
       <div class="text-white-dark">رقم جوال العميل :</div>
       <div>{{ realestate?.customer_number }}</div>
      </div>
     </div>
     <div class="xl:1/3 lg:w-2/5 sm:w-1/3 px-5">
      <div class="flex items-center w-full justify-between mb-2">
       <div class="text-white-dark">اسم المالك :</div>
       <div>{{ realestate?.owner_name }}</div>
      </div>
      <div class="flex items-center w-full justify-between">
       <div class="text-white-dark">رقم جوال المالك :</div>
       <div>{{ realestate?.owner_number }}</div>
      </div>
     </div>
    </div>
   </div>
   <!-- comparisons evaluations -->
   <div class="pt-3 flex flex-wrap">
    <div class="mr-3 text-center text-lg underline w-full">قيمة الارض طريقة المقارنات</div>
    <table class="table table-bordered">
     <thead>
      <tr>
       <th class="text-center" v-for="(item, index) in realestate.comparisons_evaluations[0]?.comparisons_evaluation_realestates" :key="index">
        {{ index + 1 }}مقارنة
       </th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td class="" v-for="(evaluation, nestedIndex) in realestate.comparisons_evaluations[0]?.comparisons_evaluation_realestates" :key="nestedIndex">
        <div v-for="(data, subNestedIndex) in evaluation.comparisons_evaluation_realestates_properties" :key="subNestedIndex" class="flex flex-wrap">
         <div class="inline w-1/2 text-center">{{ data?.percentage }}</div>
         <div class="inline w-1/2 bg-gray-100 text-center m-0">{{ data?.value }}</div>
        </div>
       </td>
      </tr>
     </tbody>
    </table>
   </div>
   <div class="flex flex-wrap p-5">
    <!-- direct cost evaluation -->
    <div class="pt-3 flex flex-wrap w-4/8 p-5" v-if="realestate.cost_evaluations[0]?.direct_costs[0]">
     <div class="text-center text-lg underline w-full mb-4">قيمة المبنى</div>
     <table class="table table-bordered">
      <thead>
       <tr>
        <th>البيان</th>
        <th>المساحة</th>
        <th>سعر المتر</th>
        <th>الاجمالي</th>
       </tr>
      </thead>
      <tbody>
       <tr v-for="(cost, index) in realestate.cost_evaluations[0]?.direct_costs[0]?.direct_cost_components" :key="nestedIndex">
        <td class="">
         {{ cost.name }}
        </td>
        <td class="">
         {{ cost.area }}
        </td>
        <td class="">
         {{ cost.meter_price }}
        </td>
        <td class="">
         {{ cost.area * +cost.meter_price }}
        </td>
       </tr>
       <tr>
        <td class="bg-gray-200">الاجمالي</td>
        <td class="text-center bg-blue-200" colspan="3">{{ +realestate.cost_evaluations[0]?.direct_costs[0]?.direct_cost }}</td>
       </tr>
      </tbody>
     </table>
    </div>
    <!-- indirect cost evaluation -->
    <div class="pt-3 flex flex-wrap w-2/8 p-5" v-if="realestate.cost_evaluations[0]?.indirect_costs[0]">
     <div class="mr-3 text-center text-lg underline w-full">التكاليف غير المباشرة</div>
     <table class="table table-bordered">
      <tbody>
       <tr v-for="(cost, index) in realestate.cost_evaluations[0]?.indirect_costs[0]?.indirect_cost_components" :key="nestedIndex">
        <td class="bg-gray-200" colspan="1">
         {{ cost.name }}
        </td>
        <td class="">
         {{ cost.percentage ? cost.percentage : cost.price }}
        </td>
       </tr>
      </tbody>
     </table>
    </div>
    <!-- direct capitalization evaluation -->
    <div class="pt-3 flex flex-wrap w-2/8" v-if="realestate?.cost_evaluations[0]?.depreciations[0]">
     <div class="mr-3 text-center text-lg underline w-full">حساب الاهلاك</div>
     <table class="table table-bordered">
      <tbody>
       <tr>
        <td class="bg-gray-200" colspan="1">عمر المبنى</td>
        <td class="" colspan="1">
         {{ realestate.cost_evaluations[0]?.depreciations[0]?.realestate_life_span }}
        </td>
       </tr>
       <tr>
        <td class="bg-gray-200" colspan="1">العمر الافتراض</td>
        <td class="" colspan="1">
         {{ realestate.cost_evaluations[0]?.depreciations[0]?.realestate_expected_life_span }}
        </td>
       </tr>

       <tr>
        <td class="bg-gray-200" colspan="1">العمر المتبقي</td>
        <td class="" colspan="1">
         {{ realestate.cost_evaluations[0]?.depreciations[0]?.realestate_expected_life_span }}
        </td>
       </tr>
       <tr>
        <td class="bg-gray-200" colspan="1">معدل الاهلاك</td>
        <td class="" colspan="1">
         {{ realestate.cost_evaluations[0]?.depreciations[0]?.depreciation_rate }}
        </td>
       </tr>
       <tr>
        <td class="bg-gray-200" colspan="1">قيمة الاهلاك</td>
        <td class="" colspan="1">
         {{ realestate.cost_evaluations[0]?.depreciations[0]?.depreciation_value }}
        </td>
       </tr>
       <tr>
        <td class="bg-gray-200" colspan="1">قيمة المبنى</td>
        <td class="" colspan="1">
         {{
          realestate.cost_evaluations[0]?.depreciations[0]?.depreciation_value -
          (realestate.cost_evaluations[0]?.depreciations[0]?.realestate_expected_life_span *
           realestate.cost_evaluations[0]?.depreciations[0]?.depreciation_rate) /
           100
         }}
        </td>
       </tr>
      </tbody>
     </table>
    </div>
   </div>
  </div>
 </div>
</template>
<script setup>
 import { ref, onBeforeMount } from 'vue';
 import { useRoute } from 'vue-router';
 import { useMeta } from '@/composables/use-meta';
 import IconPrinter from '@/components/icon/icon-printer.vue';
 import IconEdit from '@/components/icon/icon-edit.vue';
 import { useRealestatesStore } from '@/stores/realestates';
 const realestatesSotre = useRealestatesStore();
 const route = useRoute();
 useMeta({ title: 'Invoice Preview' });
 const realestate = ref({});
 onBeforeMount(async () => {
  realestate.value = await realestatesSotre.getRealestate(route.params.id);
  console.log(realestate.value);
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
