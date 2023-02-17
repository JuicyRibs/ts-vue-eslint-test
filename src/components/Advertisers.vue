<script lang="ts" setup>
    import useAdvertisersStore from '@/stores/advertisers';
    import { onMounted } from 'vue';
    
    const advertiserStore = useAdvertisersStore()

    onMounted(() => {
        advertiserStore.getAll()
        console.log('Component Mounted!')
    })
</script>
<template>
    <div>Total length {{ advertiserStore.count }}</div>
    <ul>
    <li v-for="data in advertiserStore.advertisers" v-bind:key="data.id">
        <div>{{data.id}}</div>
        <ul>
            <li>{{ data.name }}</li>
            <li>{{ data.url }}</li>
            <li>{{ data.is_deleted }}</li>
        </ul>
    </li></ul>
</template>