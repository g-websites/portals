<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
let ticking = false

function checkReveals() {
  const vh = window.innerHeight
  document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
    const rect = el.getBoundingClientRect()
    if (rect.top < vh - 60) {
      el.classList.add('is-visible')
    }
  })
  ticking = false
}

function onScroll() {
  if (!ticking) {
    ticking = true
    requestAnimationFrame(checkReveals)
  }
}

onMounted(() => {
  checkReveals()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})

watch(
  () => route.fullPath,
  async () => {
    await nextTick()
    checkReveals()
  },
)
</script>

<template>
  <div class="app">
    <AppHeader />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.app { min-height: 100vh; display: flex; flex-direction: column; }
main { flex: 1; }
.page-enter-active,
.page-leave-active { transition: opacity 0.25s ease; }
.page-enter-from,
.page-leave-to { opacity: 0; }
</style>
