import request from '@/services/request';
import { defineStore } from 'pinia';
export const useRealestatesStore = defineStore('realestates', {
 state: () => ({
  url: '/realestates',
  realestateTypes: [],
  realestates: [],
  realestateErrors: {
   customer: { customer_name: '', customer_number: '', owner_name: '', owner_number: '' },
   document: {
    number: '',
    area_number: '',
    block_number: '',
    graph_number: '',
    space: '',
    quarter_id: '',
    north_desc: '',
    north_space: '',
    west_desc: '',
    west_space: '',
    east_desc: '',
    east_space: '',
    south_desc: '',
    south_space: '',
    date: '',
   },
   license: {
    number: '',
    issuance_place_id: '',
    date: '',
    realestate_type_id: '',
   },
   files: '',
  },
  realestate: {
   auction_id: 4,
   customer_name: '',
   customer_number: '',
   owner_name: '',
   owner_number: '',
   license: {
    number: '',
    issuance_place_id: '',
    date: '',
    path: '',
    realestate_type_id: '',
    note: '',
   },
   files: [],
   filesNames: [{ name: 'الصك' }, { name: 'الرخصة' }, { name: 'المخطط' }],
   document: {
    number: '',
    area_number: '',
    block_number: '',
    graph_number: '',
    space: '',
    quarter_id: '',
    north_desc: '',
    north_space: '',
    west_desc: '',
    west_space: '',
    east_desc: '',
    east_space: '',
    south_desc: '',
    south_space: '',
    note: '',
    path: '',
    date: '',
   },
  },
 }),

 getters: {
  getRealestates() {
   return this.realestates;
  },
 },
 actions: {
  fetchRealestates() {
   request.get(this.url).then((response) => {
    this.realestates = response.data;
   });
  },
  getRealestate(id) {
   return request.get(`${this.url}/${id}`);
  },
  addRealestate: async function (realestate, tabControll) {
   // rest fields validation
   this.realestateErrors.customer.customer_name = '';
   this.realestateErrors.customer.customer_number = '';
   this.realestateErrors.customer.owner_name = '';
   this.realestateErrors.customer.owner_number = '';
   !this.realestate.customer_name && (this.realestateErrors.customer.customer_name = 'الحقل مطلوب');
   !this.realestate.customer_number && (this.realestateErrors.customer.customer_number = 'الحقل مطلوب');
   !this.realestate.owner_name && (this.realestateErrors.customer.owner_name = 'الحقل مطلوب');
   !this.realestate.owner_number && (this.realestateErrors.customer.owner_number = 'الحقل مطلوب');
   if (Object.values(this.realestateErrors.customer).some((r) => r !== '')) {
    tabControll.navigateToTab(0);
    console.log(realestate);
    return;
   }
   // document validation
   this.realestateErrors.document.number = '';
   this.realestateErrors.document.area_number = '';
   this.realestateErrors.document.block_number = '';
   this.realestateErrors.document.graph_number = '';
   this.realestateErrors.document.space = '';
   this.realestateErrors.document.quarter_id = '';
   this.realestateErrors.document.north_desc = '';
   this.realestateErrors.document.north_space = '';
   this.realestateErrors.document.west_desc = '';
   this.realestateErrors.document.west_space = '';
   this.realestateErrors.document.east_desc = '';
   this.realestateErrors.document.east_space = '';
   this.realestateErrors.document.south_desc = '';
   this.realestateErrors.document.south_space = '';
   this.realestateErrors.document.date = '';
   !realestate.document.number && (this.realestateErrors.document.number = 'الحقل مطلوب');
   !realestate.document.area_number && (this.realestateErrors.document.area_number = 'الحقل مطلوب');
   !realestate.document.block_number && (this.realestateErrors.document.block_number = 'الحقل مطلوب');
   !realestate.document.graph_number && (this.realestateErrors.document.graph_number = 'الحقل مطلوب');
   !realestate.document.space && (this.realestateErrors.document.space = 'الحقل مطلوب');
   !realestate.document.quarter_id && (this.realestateErrors.document.quarter_id = 'الحقل مطلوب');
   !realestate.document.north_desc && (this.realestateErrors.document.north_desc = 'الحقل مطلوب');
   !realestate.document.north_space && (this.realestateErrors.document.north_space = 'الحقل مطلوب');
   !realestate.document.west_desc && (this.realestateErrors.document.west_desc = 'الحقل مطلوب');
   !realestate.document.west_space && (this.realestateErrors.document.west_space = 'الحقل مطلوب');
   !realestate.document.east_desc && (this.realestateErrors.document.east_desc = 'الحقل مطلوب');
   !realestate.document.east_space && (this.realestateErrors.document.east_space = 'الحقل مطلوب');
   !realestate.document.south_desc && (this.realestateErrors.document.south_desc = 'الحقل مطلوب');
   !realestate.document.south_space && (this.realestateErrors.document.south_space = 'الحقل مطلوب');
   !realestate.document.date && (this.realestateErrors.document.date = 'الحقل مطلوب');
   if (Object.values(this.realestateErrors.document).some((r) => r !== '')) {
    tabControll.navigateToTab(1);
    return;
   }
   // license validation
   this.realestateErrors.license.number = '';
   this.realestateErrors.license.issuance_place_id = '';
   this.realestateErrors.license.date = '';
   this.realestateErrors.license.realestate_type_id = '';
   !realestate.license.number && (this.realestateErrors.license.number = 'الحقل مطلوب');
   !realestate.license.issuance_place_id && (this.realestateErrors.license.issuance_place_id = 'الحقل مطلوب');
   !realestate.license.date && (this.realestateErrors.license.date = 'الحقل مطلوب');
   !realestate.license.realestate_type_id && (this.realestateErrors.license.realestate_type_id = 'الحقل مطلوب');
   if (Object.values(this.realestateErrors.license).some((r) => r !== '')) {
    tabControll.navigateToTab(2);
    return;
   }
   // files validation
   //    !realestate.files[0] && (this.realestateErrors.files = 'يجب تحميل صورة واحدة على الأقل');

   //    if (realestate.files.length > 0) {
   //     realestate.files.forEach((file, index) => {
   //      if (!file.path) {
   //       this.realestateErrors.files.push(`الملف ${index + 1} مطلوب`);
   //      }
   //     });
   //    }
   //    if (this.realestateErrors.files) {
   //     tabControll.navigateToTab(3);
   //     return;
   //    }
   await request.post(this.url, realestate).then((response) => {
    this.realestate = response.data;
   });
  },
  removeRealestate(id) {
   request.delete(this.url, id).then(() => {
    this.realestates = this.realestates.filter((r) => r?.id !== id);
   });
  },
  updateRealestate(realestate) {
   this.realestates = this.realestates.map((r) => (r.id === realestate?.id ? realestate : r));
  },
  fetchRealestateTypes() {
   request.get('realestateTypes').then(({ data }) => {
    this.realestateTypes = data;
   });
  },
 },
});
