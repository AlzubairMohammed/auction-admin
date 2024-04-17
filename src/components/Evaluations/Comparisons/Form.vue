<script setup>
    import { ref } from 'vue';
    import MultipleInputs from '@/components/Inputs/MultipleInputs.vue';
    import AddingBar from '@/components/AddingBar/AddingBar.vue';
    import { useComparisonsEvaluationsStore } from '@/stores/comparisonsEvaluations';

    const comparisonsEvaluationsStore = useComparisonsEvaluationsStore();

    const isModalActive = ref(false);
    const isAddPropertyModalActive = ref(false);
    const title = ref('');
    let result = ref(0.0);

    let properties = ref(['السعر', 'ظروف السوق', 'شروط التمويل', 'الاستخدام', 'عدد الشوارع', 'المرجح الموزون']);
    const multiArray = ref([
        [
            {
                value: '',
                percentage: '',
            },
            {
                value: '',
                percentage: '',
            },
            {
                value: '',
                percentage: '',
            },
            {
                value: '',
                percentage: '',
            },
            {
                value: '',
                percentage: '',
            },
            {
                value: '',
                percentage: '',
            },
        ],
        [
            {
                value: '',
                percentage: '',
            },
            {
                value: '',
                percentage: '',
            },
            {
                value: '',
                percentage: '',
            },
            {
                value: '',
                percentage: '',
            },
            {
                value: '',
                percentage: '',
            },
            {
                value: '',
                percentage: '',
            },
        ],
        [
            {
                value: '',
                percentage: '',
            },
            {
                value: '',
                percentage: '',
            },
            {
                value: '',
                percentage: '',
            },
            {
                value: '',
                percentage: '',
            },
            {
                value: '',
                percentage: '',
            },
            {
                value: '',
                percentage: '',
            },
        ],
    ]);
    let form = ref();
    const onSubmit = async () => {
        const data = {
            comparisons: multiArray.value,
            properties: properties.value,
            realestate: {
                id: 7,
                meters: 2250,
            },
        };
        comparisonsEvaluationsStore.addComparisonsEvaluation(data);
        result.value = comparisonsEvaluationsStore.comparisonsEvaluation;
        isModalActive.value = true;
    };
    const pushToRealestates = () => {
        multiArray.value.push([
            {
                value: '',
                percentage: '',
            },
            {
                value: '',
                percentage: '',
            },
            {
                value: '',
                percentage: '',
            },
            {
                value: '',
                percentage: '',
            },
            {
                value: '',
                percentage: '',
            },
            {
                value: '',
                percentage: '',
            },
        ]);
    };
    const pushToComparisons = () => {
        //looping in multiArray to add new property to each realestate
        multiArray.value.forEach((realestate) => {
            realestate.push({
                value: '',
                percentage: '',
            });
        });
        // properties.splice(properties.length - 1, 0, title.value)
        properties.value.splice(properties.value.length - 1, 0, title.value);
        title.value = '';
    };
    const trashProperty = (index) => {
        properties.value.splice(index, 1);
        multiArray.value.forEach((realestate) => {
            realestate.splice(index, 1);
        });
    };
    // const spliceComparisons = (index) => {
    //   multiArray.value[0].splice(index, 1)
    // }
</script>
<template>
    <!-- <CardBoxModal v-model="isAddPropertyModalActive" button="info" button-label="اضافة" :submit-function="pushToComparisons">
        <MultipleInputs v-model="title" placeholder="ادخل البيان لهذا العنصر" type="text" />
    </CardBoxModal> -->
    <!-- <CardBoxModal v-model="isModalActive" title="النتيجة">
    <p>
      قيمة المتر <b>{{ result ? result : 0 }} ريال</b>
    </p>
  </CardBoxModal> -->
    <form ref="form" action="" @submit.prevent="onSubmit">
        <AddingBar :clicked-function="pushToRealestates" title="اضافة عقار" class="mt-3" />
        <table>
            <thead>
                <tr>
                    <th class="text-center">عوامل التسوية</th>
                    <th v-for="(attribute, RealestateIndex) in multiArray" :key="RealestateIndex" class="text-center">
                        {{ RealestateIndex === 0 ? 'عقار التقييم' : `عقار${RealestateIndex}` }}
                        <button
                            v-if="RealestateIndex !== 0"
                            class="py-1 mr-1 px-1 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-900 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:bg-white dark:text-gray-800"
                            type="button"
                            @click="multiArray.splice(RealestateIndex, 1)"
                        >
                            <box-icon color="white" name="trash"></box-icon>
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(variation, index) in properties" :key="index">
                    <td class="text-right">
                        <button
                            class="py-1 ml-3 mr-1 px-1 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-900 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:bg-white dark:text-gray-800"
                            type="button"
                            @click="trashProperty(index)"
                        >
                            <box-icon class="text-xs p-0 m-0" color="white" name="trash"></box-icon></button
                        >{{ properties[index] }}
                    </td>
                    <td v-for="(attribute, RealestateIndex) in multiArray" :key="RealestateIndex">
                        <MultipleInputs v-if="RealestateIndex === 0" v-model="multiArray[RealestateIndex][index].value" placeholder="القيمة" required />
                        <!-- <MultipleInputs
                            v-if="index !== 0 && RealestateIndex !== 0 && index !== multiArray[0].length - 1"
                            v-model="multiArray[RealestateIndex][index].value"
                            :name="`compairson_value_${index}`"
                            placeholder="القيمة"
                            :value="index !== 0 && RealestateIndex !== 0 && index !== multiArray[0].length - 1 ? 'لايوجد' : ''"
                            required
                        /> -->
                        <MultipleInputs
                            v-if="RealestateIndex !== 0"
                            v-model="multiArray[RealestateIndex][index].percentage"
                            :name="`compairson_percentage_${index}`"
                            type="number"
                            required
                            class="pt-2"
                            :inputOnePlaceholder="index === 0 ? 'السعر' : 'التسوية'"
                            inputTwoPlaceholder="القيمة"
                        />
                    </td>
                </tr>
            </tbody>
        </table>
        <AddingBar :clickedFunction="() => (isAddPropertyModalActive = true)" title="اضافة عامل" class="mt-3" />

        <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">تقييم</button>
        </div>
    </form>
</template>
