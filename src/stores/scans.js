import request from '@/services/request';
import { defineStore } from 'pinia';
export const useScansStore = defineStore('scans', {
 state: () => {
  return {
   url: '/scans',
   properties_url: '/properties',
   components_url: '/realestateComponents',
   scans: [],
   scanErrors: {
    properties: [],
    files: [],
    realestateComponents: [],
   },
   scan: {
    user_id: 2,
    realestate_id: '',
    lat: '5.2323',
    lng: '4.2333',
    properties: [],
    files: [],
    imagesNames: [{ name: 'الصك' }, { name: 'الرخصة' }, { name: 'المخطط' }],
    realestateComponents: [],
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
   await request.get(this.properties_url).then((response) => {
    this.scan.properties = response.data;
    if (this.scan.properties) {
     //  useApp.isShowMainLoader = false;
    }
   });
  },
  removeProperty: async function (id) {
   await request.delete(this.properties_url, id).then(() => {
    this.scan.properties = this.scan.properties.filter((r) => r?.id !== id);
   });
  },
  addProperty: async function (property) {
   await request.post(this.properties_url, property, '', false).then((response) => {
    this.scan.properties.push(response.data);
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
