<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getProduct, products } from '../data/products'

const route = useRoute()
const product = computed(() => getProduct(route.params.id))
const related = computed(() =>
  products.filter((p) => p.id !== route.params.id).slice(0, 3),
)
</script>

<template>
  <div v-if="product" class="page">
    <div class="container">
      <router-link to="/products" class="back mono">← 返回产品中心</router-link>

      <div class="layout">
        <div class="media">
          <div class="img"><img :src="product.image" :alt="product.name" /></div>
        </div>

        <div class="info">
          <span class="kicker">{{ product.category }}</span>
          <h1>{{ product.name }}</h1>
          <p class="tagline">{{ product.tagline }}</p>
          <p class="desc">{{ product.description }}</p>

          <ul class="features">
            <li v-for="f in product.features" :key="f">{{ f }}</li>
          </ul>

          <div class="actions">
            <router-link to="/contact" class="btn btn-primary">索取规格书</router-link>
            <router-link to="/contact" class="btn btn-ghost">咨询报价</router-link>
          </div>
        </div>
      </div>

      <!-- 规格表 -->
      <section class="spec-section">
        <h2 class="spec-title mono">// 技术规格 SPECIFICATIONS</h2>
        <div class="spec-table">
          <div class="row" v-for="s in product.specs" :key="s.label">
            <span class="k">{{ s.label }}</span>
            <span class="v mono">{{ s.value }}</span>
          </div>
        </div>
      </section>

      <!-- 相关产品 -->
      <section class="related">
        <h2 class="rel-title">相关产品</h2>
        <div class="rel-grid">
          <router-link
            v-for="r in related"
            :key="r.id"
            :to="`/product/${r.id}`"
            class="rel-card"
          >
            <img :src="r.image" :alt="r.name" />
            <div>
              <h4>{{ r.name }}</h4>
              <p>{{ r.tagline }}</p>
            </div>
          </router-link>
        </div>
      </section>
    </div>
  </div>

  <div v-else class="page container notfound">
    <h1>产品未找到</h1>
    <p>该产品可能已下架或链接有误。</p>
    <router-link to="/products" class="btn btn-primary">返回产品中心</router-link>
  </div>
</template>

<style scoped>
.page { padding: 140px 0 80px; }
.back { color: var(--text-dim); font-size: 13px; display: inline-block; margin-bottom: 28px; }
.back:hover { color: var(--accent); }

.layout {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 56px;
  align-items: center;
}
.img {
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--line-soft);
  background: #000;
}
.img img { width: 100%; height: auto; }

.info h1 {
  font-size: clamp(34px, 4.5vw, 54px);
  font-weight: 800;
  margin: 16px 0 8px;
  letter-spacing: -0.01em;
}
.tagline { color: var(--accent); font-size: 18px; margin-bottom: 18px; }
.desc { color: var(--text-dim); font-size: 16px; margin-bottom: 24px; }
.features { list-style: none; margin-bottom: 32px; }
.features li {
  position: relative;
  padding-left: 24px;
  color: var(--text);
  font-size: 15px;
  margin-bottom: 10px;
}
.features li::before {
  content: '+';
  position: absolute; left: 0;
  color: var(--accent);
  font-family: var(--font-mono);
}
.actions { display: flex; gap: 14px; flex-wrap: wrap; }

/* spec table */
.spec-section { margin-top: 90px; }
.spec-title {
  font-size: 16px;
  color: var(--accent);
  margin-bottom: 20px;
  letter-spacing: 0.08em;
}
.spec-table {
  border: 1px solid var(--line-soft);
  border-radius: var(--radius);
  overflow: hidden;
}
.row {
  display: grid;
  grid-template-columns: 200px 1fr;
  padding: 16px 22px;
  border-bottom: 1px solid var(--line-soft);
  font-size: 14px;
}
.row:last-child { border-bottom: 0; }
.row:nth-child(odd) { background: var(--panel); }
.k { color: var(--text-dim); }
.v { color: var(--text); }

/* related */
.related { margin-top: 80px; }
.rel-title { font-size: 22px; margin-bottom: 22px; }
.rel-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.rel-card {
  display: flex;
  gap: 14px;
  align-items: center;
  background: var(--panel);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius);
  padding: 14px;
  transition: border-color 0.2s;
}
.rel-card:hover { border-color: var(--accent); }
.rel-card img { width: 72px; height: 72px; object-fit: cover; border-radius: 8px; }
.rel-card h4 { font-size: 16px; }
.rel-card p { color: var(--text-dim); font-size: 13px; }

.notfound { text-align: center; padding-top: 200px; }
.notfound p { color: var(--text-dim); margin: 14px 0 28px; }

@media (max-width: 900px) {
  .layout { grid-template-columns: 1fr; gap: 32px; }
  .rel-grid { grid-template-columns: 1fr; }
  .row { grid-template-columns: 130px 1fr; }
}
</style>
