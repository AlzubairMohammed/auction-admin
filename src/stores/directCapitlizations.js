import request from '@/services/request';
import { defineStore } from 'pinia';
// import { useAppStore } from '.';
// const useApp = useAppStore();
export const useDirecCapitlizationsStore = defineStore('directCapitlizations', {
 state: () => {
  return {
   url: '/directCapitalizationEvaluations',
   directCapitlizations: [],
   directCapitlization: {
    capitalization_rate: '',
    operation_income_rate: '',
    cross_income: '',
    realestate_id: '',
   },
  };
 },
 getters: {
  getAuctions() {
   return this.auctions;
  },
 },
 actions: {
  fetchProperties: async function () {
   await request.get(this.url).then((response) => {
    this.scan.properties = response.data;
    if (this.scan.properties) {
     //  useApp.isShowMainLoader = false;
    }
   });
  },
  removeProperty: async function (id) {
   await request.delete(this.url, id).then(() => {
    this.scan.properties = this.scan.properties.filter((r) => r?.id !== id);
   });
  },
  addDirectCapitalization: async function () {
   return await request.post(this.url, this.directCapitlization, '', false).then((response) => {
    return response.data;
   });
  },
  fetchRealestateComponents: async function () {
   await request.get(this.components_url).then((response) => {
    this.scan.realestateComponents = response.data;
    if (this.scan.realestateComponents) {
     //  useApp.isShowMainLoader = false;
    }
   });
  },
  addScan: async function (scan) {
   console.log(this.scan);
   await request.post(this.url, scan).then((response) => {});
  },
 },
});
