<template>
 <div :class="{ 'dark text-white-dark': store.semidark }">
  <nav class="sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300">
   <div class="bg-white dark:bg-[#0e1726] h-full">
    <div class="flex justify-between items-center px-4 py-3">
     <router-link to="/" class="main-logo flex items-center shrink-0">
      <img class="w-8 ml-[5px] flex-none" src="/assets/images/logo.svg" alt="" />
      <span class="text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light">لوكيشن</span>
     </router-link>
     <a
      href="javascript:;"
      class="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180 hover:text-primary"
      @click="store.toggleSidebar()"
     >
      <icon-carets-down class="m-auto rotate-90" />
     </a>
    </div>
    <perfect-scrollbar
     :options="{
      swipeEasing: true,
      wheelPropagation: false,
     }"
     class="h-[calc(100vh-80px)] relative"
    >
     <ul class="relative font-semibold space-y-0.5 p-4 py-0">
      <li class="menu nav-item">
       <button
        type="button"
        class="nav-link group w-full"
        :class="{ active: activeDropdown === 'dashboard' }"
        @click="activeDropdown === 'dashboard' ? (activeDropdown = null) : (activeDropdown = 'dashboard')"
       >
        <div class="flex items-center">
         <icon-menu-dashboard class="group-hover:!text-primary shrink-0" />
         <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
          {{ $t('dashboard') }}
         </span>
        </div>
        <div :class="{ 'rtl:rotate-90 -rotate-90': activeDropdown !== 'dashboard' }">
         <icon-caret-down />
        </div>
       </button>
       <vue-collapsible :isOpen="activeDropdown === 'dashboard'">
        <ul class="sub-menu text-gray-500">
         <li>
          <router-link to="/evaluations/comparisons" @click="toggleMobileMenu">{{ $t('comparisons_evaluation') }}</router-link>
         </li>
         <li>
          <router-link to="/analytics" @click="toggleMobileMenu">{{ $t('direct_capitlization_evaluation') }}</router-link>
         </li>
         <li>
          <router-link to="/evaluations/cost" @click="toggleMobileMenu">{{ $t('cost_evaluation') }}</router-link>
         </li>
        </ul>
       </vue-collapsible>
      </li>

      <h2 class="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
       <icon-minus class="w-4 h-5 flex-none hidden" />
       <span>{{ $t('evaluation') }}</span>
      </h2>

      <li class="nav-item">
       <ul>
        <li class="nav-item">
         <router-link to="/auctions/list-page" class="group" @click="toggleMobileMenu">
          <div class="flex items-center">
           <icon-menu-mailbox class="group-hover:!text-primary shrink-0" />

           <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{{ $t('auctions') }}</span>
          </div>
         </router-link>
        </li>
        <li class="nav-item">
         <router-link to="/auctions/add-page" class="group" @click="toggleMobileMenu">
          <div class="flex items-center">
           <icon-menu-todo class="group-hover:!text-primary shrink-0" />
           <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{{ $t('add_auction') }}</span>
          </div>
         </router-link>
        </li>
        <li class="nav-item">
         <router-link to="/scans" class="group" @click="toggleMobileMenu">
          <div class="flex items-center">
           <icon-menu-chat class="group-hover:!text-primary shrink-0" />

           <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{{ $t('scan') }}</span>
          </div>
         </router-link>
        </li>
       </ul>
      </li>

      <h2 class="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
       <icon-minus class="w-4 h-5 flex-none hidden" />
       <span>{{ $t('user_and_pages') }}</span>
      </h2>

      <li class="menu nav-item">
       <button
        type="button"
        class="nav-link group w-full"
        :class="{ active: activeDropdown === 'users' }"
        @click="activeDropdown === 'users' ? (activeDropdown = null) : (activeDropdown = 'users')"
       >
        <div class="flex items-center">
         <icon-menu-users class="group-hover:!text-primary shrink-0" />

         <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{{ $t('users') }}</span>
        </div>
        <div :class="{ 'rtl:rotate-90 -rotate-90': activeDropdown !== 'users' }">
         <icon-caret-down />
        </div>
       </button>
       <vue-collapsible :isOpen="activeDropdown === 'users'">
        <ul class="sub-menu text-gray-500">
         <li>
          <router-link to="/users/profile" @click="toggleMobileMenu">{{ $t('profile') }}</router-link>
         </li>
         <li>
          <router-link to="/users/user-account-settings" @click="toggleMobileMenu">{{ $t('account_settings') }}</router-link>
         </li>
        </ul>
       </vue-collapsible>
      </li>

      <li class="menu nav-item">
       <button
        type="button"
        class="nav-link group w-full"
        :class="{ active: activeDropdown === 'pages' }"
        @click="activeDropdown === 'pages' ? (activeDropdown = null) : (activeDropdown = 'pages')"
       >
        <div class="flex items-center">
         <icon-menu-pages class="group-hover:!text-primary shrink-0" />

         <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{{ $t('pages') }}</span>
        </div>
        <div :class="{ 'rtl:rotate-90 -rotate-90': activeDropdown !== 'pages' }">
         <icon-caret-down />
        </div>
       </button>
       <vue-collapsible :isOpen="activeDropdown === 'pages'">
        <ul class="sub-menu text-gray-500">
         <li>
          <router-link to="/pages/knowledge-base" @click="toggleMobileMenu">{{ $t('knowledge_base') }}</router-link>
         </li>
         <li @click="toggleMobileMenu">
          <router-link to="/pages/contact-us-boxed" target="_blank">{{ $t('contact_us_boxed') }}</router-link>
         </li>
         <li @click="toggleMobileMenu">
          <router-link to="/pages/contact-us-cover" target="_blank">{{ $t('contact_us_cover') }}</router-link>
         </li>
         <li>
          <router-link to="/pages/faq" @click="toggleMobileMenu">{{ $t('faq') }}</router-link>
         </li>
         <li @click="toggleMobileMenu">
          <router-link to="/pages/coming-soon-boxed" target="_blank">{{ $t('coming_soon_boxed') }}</router-link>
         </li>
         <li @click="toggleMobileMenu">
          <router-link to="/pages/coming-soon-cover" target="_blank">{{ $t('coming_soon_cover') }}</router-link>
         </li>
         <li class="menu nav-item">
          <button
           type="button"
           class="w-full before:bg-gray-300 before:w-[5px] before:h-[5px] before:rounded ltr:before:mr-2 rtl:before:ml-2 dark:text-[#888ea8] hover:bg-gray-100 dark:hover:bg-gray-900"
           @click="subActive === 'error' ? (subActive = null) : (subActive = 'error')"
          >
           {{ $t('error') }}
           <div class="ltr:ml-auto rtl:mr-auto" :class="{ 'rtl:rotate-90 -rotate-90': subActive !== 'error' }">
            <icon-carets-down :fill="true" class="w-4 h-4" />
           </div>
          </button>

          <vue-collapsible :isOpen="subActive === 'error'">
           <ul :unmount="false" class="sub-menu text-gray-500">
            <li @click="toggleMobileMenu">
             <router-link to="/pages/error404" target="_blank">{{ $t('404') }}</router-link>
            </li>
            <li @click="toggleMobileMenu">
             <router-link to="/pages/error500" target="_blank">{{ $t('500') }}</router-link>
            </li>
            <li @click="toggleMobileMenu">
             <router-link to="/pages/error503" target="_blank">{{ $t('503') }}</router-link>
            </li>
           </ul>
          </vue-collapsible>
         </li>
         <li>
          <router-link to="/pages/maintenence" target="_blank">{{ $t('maintenence') }}</router-link>
         </li>
        </ul>
       </vue-collapsible>
      </li>

      <li class="menu nav-item">
       <button
        type="button"
        class="nav-link group w-full"
        :class="{ active: activeDropdown === 'authentication' }"
        @click="activeDropdown === 'authentication' ? (activeDropdown = null) : (activeDropdown = 'authentication')"
       >
        <div class="flex items-center">
         <icon-menu-authentication class="group-hover:!text-primary shrink-0" />

         <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{{ $t('authentication') }}</span>
        </div>
        <div :class="{ 'rtl:rotate-90 -rotate-90': activeDropdown !== 'authentication' }">
         <icon-caret-down />
        </div>
       </button>
       <vue-collapsible :isOpen="activeDropdown === 'authentication'">
        <ul class="sub-menu text-gray-500">
         <li @click="toggleMobileMenu">
          <router-link to="/auth/boxed-signin" target="_blank">{{ $t('login_boxed') }}</router-link>
         </li>
         <li @click="toggleMobileMenu">
          <router-link to="/auth/boxed-signup" target="_blank">{{ $t('register_boxed') }}</router-link>
         </li>
         <li @click="toggleMobileMenu">
          <router-link to="/auth/boxed-lockscreen" target="_blank">{{ $t('unlock_boxed') }}</router-link>
         </li>
         <li @click="toggleMobileMenu">
          <router-link to="/auth/boxed-password-reset" target="_blank">{{ $t('recover_id_boxed') }}</router-link>
         </li>
         <li @click="toggleMobileMenu">
          <router-link to="/auth/cover-login" target="_blank">{{ $t('login_cover') }}</router-link>
         </li>
         <li @click="toggleMobileMenu">
          <router-link to="/auth/cover-register" target="_blank">{{ $t('register_cover') }}</router-link>
         </li>
         <li @click="toggleMobileMenu">
          <router-link to="/auth/cover-lockscreen" target="_blank">{{ $t('unlock_cover') }}</router-link>
         </li>
         <li @click="toggleMobileMenu">
          <router-link to="/auth/cover-password-reset" target="_blank">{{ $t('recover_id_cover') }}</router-link>
         </li>
        </ul>
       </vue-collapsible>
      </li>

      <h2 class="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
       <icon-minus class="w-4 h-5 flex-none hidden" />
       <span>{{ $t('supports') }}</span>
      </h2>

      <li class="menu nav-item">
       <a href="https://vristo.sbthemes.com" target="_blank" class="nav-link group">
        <div class="flex items-center">
         <icon-menu-documentation class="group-hover:!text-primary shrink-0" />

         <span class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{{ $t('documentation') }}</span>
        </div>
       </a>
      </li>
     </ul>
    </perfect-scrollbar>
   </div>
  </nav>
 </div>
</template>

<script setup>
 import { ref, onMounted } from 'vue';

 import { useAppStore } from '@/stores/index';
 import VueCollapsible from 'vue-height-collapsible/vue3';

 import IconCaretsDown from '@/components/icon/icon-carets-down.vue';
 import IconMenuDashboard from '@/components/icon/menu/icon-menu-dashboard.vue';
 import IconMinus from '@/components/icon/icon-minus.vue';
 import IconMenuChat from '@/components/icon/menu/icon-menu-chat.vue';
 import IconMenuMailbox from '@/components/icon/menu/icon-menu-mailbox.vue';
 import IconMenuTodo from '@/components/icon/menu/icon-menu-todo.vue';
 import IconMenuNotes from '@/components/icon/menu/icon-menu-notes.vue';
 import IconMenuScrumboard from '@/components/icon/menu/icon-menu-scrumboard.vue';
 import IconMenuContacts from '@/components/icon/menu/icon-menu-contacts.vue';
 import IconMenuInvoice from '@/components/icon/menu/icon-menu-invoice.vue';
 import IconCaretDown from '@/components/icon/icon-caret-down.vue';
 import IconMenuCalendar from '@/components/icon/menu/icon-menu-calendar.vue';
 import IconMenuComponents from '@/components/icon/menu/icon-menu-components.vue';
 import IconMenuElements from '@/components/icon/menu/icon-menu-elements.vue';
 import IconMenuCharts from '@/components/icon/menu/icon-menu-charts.vue';
 import IconMenuWidgets from '@/components/icon/menu/icon-menu-widgets.vue';
 import IconMenuFontIcons from '@/components/icon/menu/icon-menu-font-icons.vue';
 import IconMenuDragAndDrop from '@/components/icon/menu/icon-menu-drag-and-drop.vue';
 import IconMenuTables from '@/components/icon/menu/icon-menu-tables.vue';
 import IconMenuDatatables from '@/components/icon/menu/icon-menu-datatables.vue';
 import IconMenuForms from '@/components/icon/menu/icon-menu-forms.vue';
 import IconMenuUsers from '@/components/icon/menu/icon-menu-users.vue';
 import IconMenuPages from '@/components/icon/menu/icon-menu-pages.vue';
 import IconMenuAuthentication from '@/components/icon/menu/icon-menu-authentication.vue';
 import IconMenuDocumentation from '@/components/icon/menu/icon-menu-documentation.vue';

 const store = useAppStore();
 const activeDropdown = ref('');
 const subActive = ref('');

 onMounted(() => {
  const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
  if (selector) {
   selector.classList.add('active');
   const ul = selector.closest('ul.sub-menu');
   if (ul) {
    let ele = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
    if (ele.length) {
     ele = ele[0];
     setTimeout(() => {
      ele.click();
     });
    }
   }
  }
 });

 const toggleMobileMenu = () => {
  if (window.innerWidth < 1024) {
   store.toggleSidebar();
  }
 };
</script>
