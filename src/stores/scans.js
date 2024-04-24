import request from '@/services/request';
import { defineStore } from 'pinia';
// import { useAppStore } from '.';
// const useApp = useAppStore();
export const useScansStore = defineStore('scans', {
 state: () => {
  return {
   url: '/scans',
   properties_url: '/properties',
   auctions: [],
   auction: {},
   properties: [],
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
 },
});
