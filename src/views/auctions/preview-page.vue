<template>
 <div>
  <div class="flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6">
   <button type="button" class="btn btn-primary gap-2" @click="print">
    <icon-printer />
    طباعة
   </button>
   <router-link :to="`/realestates/add-page/${auction?.data?.id}`" class="btn btn-secondary gap-2">
    <icon-plus />
    اضافة عقار
   </router-link>
   <router-link :to="`/auctions/edit-page/${auction?.data?.id}`" class="btn btn-warning gap-2">
    <icon-edit />
    تعديل
   </router-link>
  </div>
  <div id="report" class="panel">
   <!-- title and logo -->
   <div class="flex justify-between flex-wrap gap-4 px-4">
    <div class="text-2xl font-semibold uppercase">بيانات المزاد</div>
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
       <th id="operatons_title">العمليات</th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>{{ item.customer_name }}</td>
       <td>{{ item.customer_number }}</td>
       <td>{{ item.owner_name }}</td>
       <td>{{ item.owner_number }}</td>
       <td class="flex gap-4" id="operations">
        <div class="dropdown">
         <Popper :placement="'bottom-start'" offsetDistance="0" class="align-middle">
          <button class="text-primary">تقييم</button>
          <template #content="{ close }">
           <ul @click="close()" class="whitespace-nowrap">
            <li><router-link :to="`/evaluations/comparisons/${item.id}`">المقارنات</router-link></li>
            <li><router-link :to="`/evaluations/direct-capitlization/${item.id}`">الرسملة المباشرة</router-link></li>
            <li><router-link :to="`/evaluations/cost/${item.id}`">التكلفة</router-link></li>
           </ul>
          </template>
         </Popper>
        </div>

        <router-link v-if="!item.scans.length" :to="`/scans/${item.id}`" class="text-success"> الدراسة العقار </router-link>
        <button v-else class="text-warning">تم دراسة العقار</button>
       </td>
      </tr>
     </tbody>
    </table>
    <div class="flex flex-wrap">
     <img v-for="image in item?.realestate_images?.slice(0, 5)" :src="`http://89.116.236.251:7070/${image.path}`" alt="" class="w-1/5 p-2 rounded" />
    </div>
    <div class="pt-3 flex flex-wrap" v-if="item.scans.length">
     <div class="mr-3 text-center text-lg underline w-full">بيانات المسح الميداني</div>
     <div class="flex flex-wrap gap-4 pr-3 pt-3 w-full">
      <div class="w-1/4">
       <div class="flex items-center w-full justify-between mb-2">
        <div class="text-white-dark">اسم الموظف :</div>
        <div>{{ item.scans[0]?.user?.name }}</div>
       </div>
      </div>
      <div class="w-1/4">
       <div class="flex items-center w-full justify-between mb-2">
        <div class="text-white-dark">تاريخ الانشاء :</div>
        <div>{{ item.scans[0]?.user?.created?.substring(0, 10) }}</div>
       </div>
      </div>
     </div>
     <div class="flex flex-wrap gap-4 pr-3 pt-3 w-full">
      <div class="text-center w-full underline">المميزات</div>
      <table class="table table-bordered table-striped">
       <tbody>
        <tr v-for="(property, index) in item.realestate_properties" :key="index">
         <td>{{ property.property?.name }} :</td>
         <td v-if="property.property?.type == 'text'">{{ property.value }}</td>
         <td v-else>{{ property.properties_option?.name }}</td>
         <!-- <td v-if="property.property?.name === item.realestate_properties[index - 1]?.property.name">
          <div v-for="(subPropertyOptionName, index) in [...property.properties_option.name]" :key="index">{{ subPropertyOptionName }}</div>
         </td> -->
        </tr>
       </tbody>
      </table>
     </div>
     <div class="flex flex-wrap gap-4 pr-3 pt-3 w-full">
      <div class="text-center w-full underline">المكونات</div>
      <table class="table table-bordered">
       <tbody>
        <tr v-for="(component, index) in item.realestate_components" :key="index">
         <td>{{ component.component?.name }}</td>
         <td>{{ component.value }}</td>
        </tr>
       </tbody>
      </table>
     </div>
    </div>
    <!-- comparisons evaluation -->
    <div class="pt-3 flex flex-wrap">
     <div class="mr-3 text-center text-lg underline w-full">قيمة الارض طريقة المقارنات</div>
     <table class="table table-bordered">
      <thead>
       <tr>
        <th class="text-center" v-for="(, index) in item.comparisons_evaluations[0]?.comparisons_evaluation_realestates" :key="index">{{ index + 1 }}مقارنة</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td class="" v-for="(evaluation, index) in item.comparisons_evaluations[0]?.comparisons_evaluation_realestates" :key="nestedIndex">
         <div v-for="(data, nestedIndex) in evaluation.comparisons_evaluation_realestates_properties" class="flex flex-wrap">
          <div class="inline w-1/2 text-center">{{ data.percentage }}</div>
          <div class="inline w-1/2 bg-gray-100 text-center m-0">{{ data.value }}</div>
         </div>
        </td>
       </tr>
      </tbody>
     </table>
    </div>
    <div class="flex flex-wrap p-5">
     <!-- direct cost evaluation -->
     <div class="pt-3 flex flex-wrap w-4/8 p-5" v-if="item.cost_evaluations[0]?.direct_costs[0]">
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
        <tr v-for="(cost, index) in item.cost_evaluations[0]?.direct_costs[0]?.direct_cost_components" :key="nestedIndex">
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
         <td class="text-center bg-blue-200" colspan="3">{{ +item.cost_evaluations[0]?.direct_costs[0]?.direct_cost }}</td>
        </tr>
       </tbody>
      </table>
     </div>
     <!-- indirect cost evaluation -->
     <div class="pt-3 flex flex-wrap w-2/8 p-5" v-if="item.cost_evaluations[0]?.indirect_costs[0]">
      <div class="mr-3 text-center text-lg underline w-full">التكاليف غير المباشرة</div>
      <table class="table table-bordered">
       <tbody>
        <tr v-for="(cost, index) in item.cost_evaluations[0]?.indirect_costs[0]?.indirect_cost_components" :key="nestedIndex">
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
     <div class="pt-3 flex flex-wrap w-2/8" v-if="item?.cost_evaluations[0]?.depreciations[0]">
      <div class="mr-3 text-center text-lg underline w-full">حساب الاهلاك</div>
      <table class="table table-bordered">
       <tbody>
        <tr>
         <td class="bg-gray-200" colspan="1">عمر المبنى</td>
         <td class="" colspan="1">
          {{ item.cost_evaluations[0]?.depreciations[0]?.realestate_life_span }}
         </td>
        </tr>
        <tr>
         <td class="bg-gray-200" colspan="1">العمر الافتراض</td>
         <td class="" colspan="1">
          {{ item.cost_evaluations[0]?.depreciations[0]?.realestate_expected_life_span }}
         </td>
        </tr>
        <tr>
         <td class="bg-gray-200" colspan="1">معدل الاهلاك</td>
         <td class="" colspan="1">
          {{ item.cost_evaluations[0]?.depreciations[0]?.depreciation_rate }}
         </td>
        </tr>
        <tr>
         <td class="bg-gray-200" colspan="1">قيمة الاهلاك</td>
         <td class="" colspan="1">
          {{ item.cost_evaluations[0]?.depreciations[0]?.depreciation_value }}
         </td>
        </tr>
        <tr>
         <td class="bg-gray-200" colspan="1">قيمة المبنى</td>
         <td class="" colspan="1">
          {{
           item.cost_evaluations[0]?.depreciations[0]?.depreciation_value -
           (item.cost_evaluations[0]?.depreciations[0]?.realestate_expected_life_span * item.cost_evaluations[0]?.depreciations[0]?.depreciation_rate) / 100
          }}
         </td>
        </tr>
       </tbody>
      </table>
     </div>
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
 import { useComparisonsEvaluationsStore } from '@/stores/comparisonsEvaluations';
 const comparisonsEvaluationsStore = useComparisonsEvaluationsStore();
 const properties = comparisonsEvaluationsStore.comparisonsEvaluation.properties;
 const auctionsStore = useAuctionsStore();
 const route = useRoute();
 useMeta({ title: 'Invoice Preview' });
 const auction = ref({});
 onBeforeMount(async () => {
  auction.value = await auctionsStore.getAuction(route.params.id);
  console.log(auction.value);
  auction.value.data.realestates?.map((realestate) => {
   realestate?.realestate_properties?.map((property, index) => {
    if (property.property?.name === realestate.realestate_properties[index - 1]?.property?.name) {
     const container = property.properties_option;
     property.properties_option = [];
     property.properties_option?.push(container);
     realestate?.realestate_properties?.slice(index, 1);
    }
   });
  });
  console.log(auction.value.data.realestates);
 });
 const print = () => {
  let printContents = document.getElementById('report').innerHTML;
  printContents = printContents.replace(/<td class="flex gap-4" id="operations">.*?<\/td>/g, '');
  printContents = printContents.replace(/<th id="operatons_title">.*?<\/th>/g, '');
  let originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();
  window.location.reload();
  document.body.innerHTML = originalContents;
 };
</script>
<style></style>
