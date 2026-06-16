<template>
    <div ref="mapEl" class="map"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const mapEl = ref(null)
let map = null

onMounted(() => {
    map = L.map(mapEl.value).setView([39.9042, 116.4074], 13)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(map)
})

onBeforeUnmount(() => {
    // 一定要销毁，否则内存泄漏
    map?.remove()
    map = null
})
</script>

<style scoped>
.map {
    height: 100%;
    width: 100%;
}
</style>