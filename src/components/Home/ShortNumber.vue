<template>
 <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6 text-white">
  <!-- Auctions -->
  <div class="panel bg-gradient-to-r from-cyan-500 to-cyan-400">
   <div class="flex justify-between">
    <div class="ltr:mr-1 rtl:ml-1 text-md font-semibold">المزادات</div>
    <div class="dropdown">
     <Popper :placement="'bottom-end'" offsetDistance="0" class="align-middle">
      <button type="button">
       <icon-horizontal-dots class="hover:opacity-80 opacity-70" />
      </button>
      <template #content="{ close }">
       <ul @click="close()" class="text-black dark:text-white-dark">
        <li>
         <a href="javascript:;">View Report</a>
        </li>
        <li>
         <a href="javascript:;">Edit Report</a>
        </li>
       </ul>
      </template>
     </Popper>
    </div>
   </div>
   <div class="flex items-center mt-5">
    <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">$170.46</div>
    <div class="badge bg-white/30">+ 2.35%</div>
   </div>
   <div class="flex items-center font-semibold mt-5">
    <icon-eye class="ltr:mr-2 rtl:ml-2 shrink-0" />
    Last Week 44,700
   </div>
  </div>

  <!-- Sessions -->
  <div class="panel bg-gradient-to-r from-violet-500 to-violet-400">
   <div class="flex justify-between">
    <div class="ltr:mr-1 rtl:ml-1 text-md font-semibold">العقارات</div>
    <div class="dropdown">
     <Popper :placement="'bottom-end'" offsetDistance="0" class="align-middle">
      <button type="button">
       <icon-horizontal-dots class="hover:opacity-80 opacity-70" />
      </button>
      <template #content="{ close }">
       <ul @click="close()" class="text-black dark:text-white-dark">
        <li>
         <a href="javascript:;">View Report</a>
        </li>
        <li>
         <a href="javascript:;">Edit Report</a>
        </li>
       </ul>
      </template>
     </Popper>
    </div>
   </div>
   <div class="flex items-center mt-5">
    <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">74,137</div>
    <div class="badge bg-white/30">- 2.35%</div>
   </div>
   <div class="flex items-center font-semibold mt-5">
    <icon-eye class="ltr:mr-2 rtl:ml-2 shrink-0" />
    Last Week 84,709
   </div>
  </div>

  <!-- Time On-Site -->
  <div class="panel bg-gradient-to-r from-blue-500 to-blue-400">
   <div class="flex justify-between">
    <div class="ltr:mr-1 rtl:ml-1 text-md font-semibold">التقييمات</div>
    <div class="dropdown">
     <Popper :placement="'bottom-end'" offsetDistance="0" class="align-middle">
      <button type="button">
       <icon-horizontal-dots class="hover:opacity-80 opacity-70" />
      </button>
      <template #content="{ close }">
       <ul @click="close()" class="text-black dark:text-white-dark">
        <li>
         <a href="javascript:;">View Report</a>
        </li>
        <li>
         <a href="javascript:;">Edit Report</a>
        </li>
       </ul>
      </template>
     </Popper>
    </div>
   </div>
   <div class="flex items-center mt-5">
    <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">38,085</div>
    <div class="badge bg-white/30">+ 1.35%</div>
   </div>
   <div class="flex items-center font-semibold mt-5">
    <icon-eye class="ltr:mr-2 rtl:ml-2 shrink-0" />
    Last Week 37,894
   </div>
  </div>

  <!-- Bounce Rate -->
  <div class="panel bg-gradient-to-r from-fuchsia-500 to-fuchsia-400">
   <div class="flex justify-between">
    <div class="ltr:mr-1 rtl:ml-1 text-md font-semibold">المستخدمين</div>
    <div class="dropdown">
     <Popper :placement="'bottom-start'" offsetDistance="0" class="align-middle">
      <button type="button">
       <icon-horizontal-dots class="hover:opacity-80 opacity-70" />
      </button>
      <template #content="{ close }">
       <ul @click="close()" class="text-black dark:text-white-dark">
        <li>
         <a href="javascript:;">View Report</a>
        </li>
        <li>
         <a href="javascript:;">Edit Report</a>
        </li>
       </ul>
      </template>
     </Popper>
    </div>
   </div>
   <div class="flex items-center mt-5">
    <div class="text-3xl font-bold ltr:mr-3 rtl:ml-3">49.10%</div>
    <div class="badge bg-white/30">- 0.35%</div>
   </div>
   <div class="flex items-center font-semibold mt-5">
    <icon-eye class="ltr:mr-2 rtl:ml-2 shrink-0" />
    Last Week 50.01%
   </div>
  </div>
 </div>
</template>
