<script setup>
import { ref, computed } from 'vue'
import { products } from '../data/products'

const categories = ['全部', ...new Set(products.map((p) => p.category))]
const active = ref('全部')

const list = computed(() =>
  active.value === '全部' ? products : products.filter((p) => p.category === active.value),
)
</script>

<template>
  <div class="page">
    <div class="container">
      <header class="head">
        <span class="kicker">PRODUCT MATRIX</span>
        <h1 class="title">产品中心</h1>
        <p class="sub">从主控芯片到整机终端，六条产品线覆盖设备的核心算力、供电与感知。</p>
      </header>

      <div class="filters mono">
        <button
          v-for="c in categories"
          :key="c"
          class="filter"
          :class="{ on: active === c }"
          @click="active = c"
        >
          {{ c }}
        </button>
      </div>

      <div class="grid">
        <router-link
          v-for="p in list"
          :key="p.id"
          :to="`/product/${p.id}`"
          class="card"
        >
          <div class="img">
            <img :src="p.image" :alt="p.name" />
            <span class="cat mono">{{ p.category }}</span>
          </div>
          <div class="body">
            <h3>{{ p.name }}</h3>
            <p>{{ p.tagline }}</p>
            <div class="specs mono">
              <span v-for="s in p.specs.slice(0, 2)" :key="s.label">
                {{ s.label }} · {{ s.value }}
              </span>
            </div>
            <span class="more mono">详情 →</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page { padding: 150px 0 100px; }
.head { margin-bottom: 40px; }
.title {
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 800;
  margin: 16px 0 14px;
  letter-spacing: -0.01em;
}
.sub { color: var(--text-dim); max-width: 620px; font-size: 17px; }

.filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 36px;
}
.filter {
  padding: 9px 18px;
  border-radius: 999px;
  background: var(--panel);
  border: 1px solid var(--line);
  color: var(--text-dim);
  font-size: 13px;
  transition: 0.2s;
}
.filter:hover { border-color: var(--accent); color: var(--text); }
.filter.on { background: var(--accent); color: #04211d; border-color: var(--accent); font-weight: 600; }

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}
.card {
  background: var(--panel);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius);
  overflow: hidden;
  transition: transform 0.25s ease, border-color 0.25s ease;
}
.card:hover { transform: translateY(-5px); border-color: var(--accent); }
.img { position: relative; aspect-ratio: 4/3; background: #000; overflow: hidden; }
.img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
.card:hover .img img { transform: scale(1.05); }
.cat {
  position: absolute; top: 14px; left: 14px;
  padding: 5px 10px; border-radius: 6px;
  background: rgba(7, 9, 13, 0.7);
  backdrop-filter: blur(6px);
  color: var(--accent); font-size: 11px; letter-spacing: 0.1em;
}
.body { padding: 22px; }
.body h3 { font-size: 20px; margin-bottom: 6px; }
.body p { color: var(--text-dim); font-size: 14px; margin-bottom: 16px; }
.specs { display: flex; flex-direction: column; gap: 5px; margin-bottom: 16px; }
.specs span { color: var(--text-faint); font-size: 12px; }
.more { color: var(--accent); font-size: 13px; }

@media (max-width: 900px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .grid { grid-template-columns: 1fr; } }
</style>
