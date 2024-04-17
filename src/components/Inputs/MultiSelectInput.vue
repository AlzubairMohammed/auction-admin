<template>
    <multiselect
        v-model="input6"
        :options="options"
        class="custom-multiselect"
        :multiple="true"
        :searchable="false"
        placeholder="Select an option"
        selected-label=""
        select-label=""
        deselect-label=""
    >
    </multiselect>
</template>

<!-- script -->
<script lang="ts" setup>
    import { ref } from 'vue';
    import Multiselect from '@suadelabs/vue3-multiselect';
    import '@suadelabs/vue3-multiselect/dist/vue3-multiselect.css';

    const options = ref(['Orange', 'White', 'Purple']);
    const input6 = ref([]);
</script>
