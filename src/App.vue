<template>
 <div
  class="main-section antialiased relative font-nunito text-sm font-normal"
  :class="[store.sidebar ? 'toggle-sidebar' : '', store.menu, store.layout, store.rtlClass]"
 >
  <component v-bind:is="mainLayout"></component>
 </div>
</template>

<script setup>
 import { computed, onMounted } from 'vue';

 import appLayout from '@/layouts/app-layout.vue';
 import authLayout from '@/layouts/auth-layout.vue';

 import { useAppStore } from '@/stores/index';
 import { useMeta } from '@/composables/use-meta';
 import { useAreasCitiesQuartersStore } from '@/stores/areasCitiesQuarters';
 import { useRealestatesStore } from '@/stores/realestates';
 import { useScansStore } from '@/stores/scans';

 const useScans = useScansStore();
 const useAreasCitiesQuarters = useAreasCitiesQuartersStore();
 const useRealestates = useRealestatesStore();
 const store = useAppStore();

 // meta
 useMeta({ title: 'Sales Admin' });

 const mainLayout = computed(() => {
  return store.mainLayout === 'auth' ? authLayout : appLayout;
 });
 onMounted(() => {
  useRealestates.fetchRealestateTypes();
  useAreasCitiesQuarters.fetchAreas();
  useScans.fetchProperties();
 });
</script>
