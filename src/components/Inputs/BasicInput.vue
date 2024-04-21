<template>
 <div>
  <label v-if="props.label" class="block text-sm text-gray-700"> {{ props.label }}</label>
  <input type="text" placeholder="Username" class="form-input" />
 </div>
</template>
<script lang="ts" setup>
 const props = defineProps<{
  label: string;
 }>();
</script>
