import request from '@/services/request';
import { defineStore } from 'pinia';
// import { useAppStore } from '.';
// const useApp = useAppStore();
export const useScansStore = defineStore('scans', {
 state: () => {
  return {
   url: '/scans',
   properties_url: '/properties',
   components_url: '/realestateComponents',
   properties: [],
   images: [],
   imagesNames: [{ description: 'الصك' }, { description: 'الرخصة' }, { description: 'المخطط' }],
   realestateComponents: [],
  };
 },
 getters: {
  getAuctions() {
   return this.auctions;
  },
 },
 actions: {
  fetchProperties: async function () {
   await request.get(this.properties_url).then((response) => {
    this.properties = response.data;
    if (this.properties) {
     //  useApp.isShowMainLoader = false;
    }
   });
  },
  removeProperty: async function (id) {
   await request.delete(this.properties_url, id).then(() => {
    this.properties = this.properties.filter((r) => r?.id !== id);
   });
  },
  addProperty: async function (property) {
   await request.post(this.properties_url, property).then((response) => {
    this.properties.push(response.data);
   });
  },
  fetchRealestateComponents: async function () {
   await request.get(this.components_url).then((response) => {
    this.realestateComponents = response.data;
    if (this.realestateComponents) {
     //  useApp.isShowMainLoader = false;
    }
   });
  },
 },
});
