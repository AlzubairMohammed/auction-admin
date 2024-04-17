<template>
    <div class="flex md:items-center md:flex-row flex-col mb-5 gap-5">
        <h5 class="font-semibold text-lg dark:text-white-light">اضافة عقار</h5>
        <div class="ltr:ml-auto rtl:mr-auto">
            <AddingButton />
        </div>
    </div>
</template>
<script lang="ts" setup>
    import AddingButton from '@/components/AddingBar/AddingButton.vue';
</script>
