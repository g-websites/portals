<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const scrolled = ref(false)
const open = ref(false)

const links = [
  { to: '/portals/demo1/', label: '首页' },
  { to: '/portals/demo1/products', label: '产品中心' },
  { to: '/portals/demo1/about', label: '关于曜明' },
  { to: '/portals/demo1/contact', label: '联系我们' },
]

function onScroll() {
  scrolled.value = window.scrollY > 24
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="header" :class="{ scrolled }">
    <div class="container bar">
      <router-link to="/" class="brand" @click="open = false">
        <span class="mark">EM</span>
        <span class="brand-text">
          <strong>EMNOVA</strong>
          <small class="mono">曜明电子</small>
        </span>
      </router-link>

      <nav class="links" :class="{ open }">
        <router-link
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="link"
          :class="{ active: route.path === l.to }"
          @click="open = false"
        >
          {{ l.label }}
        </router-link>
        <router-link to="/contact" class="cta">获取方案</router-link>
      </nav>

      <button class="burger" :aria-expanded="open" @click="open = !open">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
  border-bottom: 1px solid transparent;
}
.header.scrolled {
  background: rgba(7, 9, 13, 0.78);
  backdrop-filter: blur(14px);
  border-bottom-color: var(--line-soft);
}
.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}
.mark {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: var(--accent);
  color: #04211d;
  font-weight: 800;
  font-family: var(--font-mono);
  font-size: 15px;
}
.brand-text { display: flex; flex-direction: column; line-height: 1.1; }
.brand-text strong { font-size: 16px; letter-spacing: 0.06em; }
.brand-text small { font-size: 11px; color: var(--text-dim); letter-spacing: 0.2em; }

.links { display: flex; align-items: center; gap: 34px; }
.link {
  font-size: 15px;
  color: var(--text-dim);
  position: relative;
  padding: 6px 0;
  transition: color 0.2s ease;
}
.link:hover { color: var(--text); }
.link.active { color: var(--text); }
.link.active::after {
  content: '';
  position: absolute;
  left: 0; right: 0; bottom: -2px;
  height: 2px;
  background: var(--accent);
  border-radius: 2px;
}
.cta {
  padding: 10px 20px;
  border-radius: var(--radius-sm);
  background: var(--accent);
  color: #04211d;
  font-weight: 600;
  font-size: 14px;
}
.cta:hover { background: #4fe3d0; }

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: 0;
  padding: 8px;
}
.burger span {
  width: 22px; height: 2px;
  background: var(--text);
  transition: 0.25s;
}

@media (max-width: 820px) {
  .burger { display: flex; }
  .links {
    position: absolute;
    top: 72px;
    left: 0; right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    background: rgba(7, 9, 13, 0.97);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--line);
    padding: 12px 20px 20px;
    display: none;
  }
  .links.open { display: flex; }
  .link { padding: 14px 0; border-bottom: 1px solid var(--line-soft); }
  .cta { margin-top: 16px; text-align: center; }
}
</style>
