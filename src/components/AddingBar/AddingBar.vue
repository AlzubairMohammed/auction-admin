<template>
    <div class="flex md:items-center md:flex-row flex-col mb-5 gap-5">
        <h5 class="font-semibold text-lg dark:text-white-light">{{ title }}</h5>
        <div class="ltr:ml-auto rtl:mr-auto">
            <AddingButton @click="clickedFunction" />
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { defineProps } from 'vue';
    import AddingButton from '@/components/AddingBar/AddingButton.vue';

    // Define props
    const props = defineProps({
        title: String,
        clickedFunction: Function,
    });
</script>
