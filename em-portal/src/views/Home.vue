<script setup>
import { products } from '../data/products'
import hero from '../assets/images/hero.jpg'

const stats = [
  { value: '12+', label: '年硬件研发沉淀' },
  { value: '320', label: '项授权专利' },
  { value: '48', label: '国和地区客户' },
  { value: '1.2亿', label: '颗累计出货芯片' },
]

const caps = [
  { code: '01', title: '自研主控芯片', desc: '从架构定义到版图流片全链路自主可控，6nm 工艺持续迭代。' },
  { code: '02', title: '工业级可靠性', desc: '-40℃ 宽温、EMC 与振动冲击全项验证，7×24 连续运行。' },
  { code: '03', title: '快速交付', desc: '深圳、福州双基地，标准件 4 周、定制件 12 周交付。' },
  { code: '04', title: '全球技术支持', desc: 'FAE 一线响应，提供原理图参考、散热设计与量产导入支持。' },
]
</script>

<template>
  <div>
    <!-- ===== HERO ===== -->
    <section class="hero">
      <img :src="hero" alt="" class="hero-bg" />
      <div class="hero-overlay"></div>
      <div class="container hero-inner">
        <span class="kicker">EMNOVA · 曜明电子</span>
        <h1 class="hero-title">
          重新定义<br />
          电子的<span class="accent">边界</span>
        </h1>
        <p class="hero-sub">
          从一颗主控芯片到一台边缘计算终端，曜明为全球设备厂商提供
          高性能、高可靠、可量产的电子产品与硬件解决方案。
        </p>
        <div class="hero-actions">
          <router-link to="/products" class="btn btn-primary">浏览产品矩阵</router-link>
          <router-link to="/about" class="btn btn-ghost">了解曜明</router-link>
        </div>
      </div>

      <div class="readout mono">
        <div><span class="dot"></span>SYS.READY</div>
        <div>CORE 2.6GHz</div>
        <div>NPU 48TOPS</div>
        <div>MTBF 500K H</div>
        <div class="amber">PWR 96.5%</div>
      </div>
    </section>

    <!-- ===== 主营产品墙：一进来就看懂做什么 ===== -->
    <section class="section products-sec">
      <div class="container">
        <div class="section-head reveal">
          <span class="kicker">CORE BUSINESS</span>
          <h2 class="section-title">六大产品线，覆盖设备核心硬件</h2>
          <p class="section-sub">
            算力、供电、感知、连接、边缘、储能——一台设备里最关键的电子部件，曜明都能提供。
          </p>
        </div>

        <div class="prod-grid">
          <router-link
            v-for="(p, i) in products"
            :key="p.id"
            :to="`/product/${p.id}`"
            class="prod-card reveal"
            :style="{ transitionDelay: (i % 3) * 80 + 'ms' }"
          >
            <div class="prod-img">
              <img :src="p.image" :alt="p.name" />
              <span class="prod-cat mono">{{ p.category }}</span>
            </div>
            <div class="prod-body">
              <h3>{{ p.name }}</h3>
              <p>{{ p.tagline }}</p>
              <div class="prod-spec mono">
                <span v-for="s in p.specs.slice(0, 2)" :key="s.label">
                  {{ s.label }} {{ s.value }}
                </span>
              </div>
              <span class="prod-more mono">查看产品 →</span>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- ===== 数据带 ===== -->
    <section class="stats">
      <div class="container stats-grid">
        <div v-for="s in stats" :key="s.label" class="stat reveal">
          <div class="stat-value mono">{{ s.value }}</div>
          <div class="stat-label">{{ s.label }}</div>
        </div>
      </div>
    </section>

    <!-- ===== 能力 ===== -->
    <section class="section alt">
      <div class="container">
        <div class="section-head reveal">
          <span class="kicker">CAPABILITIES</span>
          <h2 class="section-title">硬件能力，落到产线</h2>
          <p class="section-sub">不止于设计。从流片、认证到量产导入，每个环节都可交付。</p>
        </div>
        <div class="cap-grid">
          <div v-for="(c, i) in caps" :key="c.code" class="cap-card reveal" :style="{ transitionDelay: i * 80 + 'ms' }">
            <div class="cap-code mono">{{ c.code }}</div>
            <h3>{{ c.title }}</h3>
            <p>{{ c.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="cta-band">
      <div class="container cta-inner reveal">
        <h2>准备好让你的产品跑得更快了吗？</h2>
        <p>告诉我们你的设备场景，曜明 FAE 团队会在 1 个工作日内给出选型建议。</p>
        <router-link to="/contact" class="btn btn-primary">联系我们</router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* HERO */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.hero-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
.hero-overlay {
  position: absolute; inset: 0; z-index: 1;
  background:
    linear-gradient(90deg, rgba(7, 9, 13, 0.92) 0%, rgba(7, 9, 13, 0.7) 45%, rgba(7, 9, 13, 0.35) 100%),
    linear-gradient(0deg, var(--bg) 2%, rgba(7, 9, 13, 0) 40%);
}
.hero-inner { position: relative; z-index: 2; padding-top: 72px; }
.hero-title {
  font-size: clamp(46px, 8vw, 96px);
  font-weight: 800; line-height: 1.02; letter-spacing: -0.02em;
  margin: 22px 0 24px;
}
.accent { color: var(--accent); }
.hero-sub { max-width: 560px; color: var(--text-dim); font-size: 18px; margin-bottom: 36px; }
.hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }

.readout {
  position: absolute; left: 0; right: 0; bottom: 0; z-index: 2;
  display: flex; gap: 36px; flex-wrap: wrap;
  padding: 16px 28px;
  border-top: 1px solid var(--line-soft);
  background: rgba(7, 9, 13, 0.6);
  backdrop-filter: blur(8px);
  font-size: 12px; color: var(--text-dim); letter-spacing: 0.08em;
}
.readout > div { display: flex; align-items: center; gap: 8px; }
.readout .amber { color: var(--amber); }
.dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--accent); box-shadow: 0 0 8px var(--accent);
  animation: blink 1.6s infinite;
}
@keyframes blink { 50% { opacity: 0.3; } }

/* 产品墙 */
.products-sec { padding-top: 90px; }
.prod-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}
.prod-card {
  background: var(--panel);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius);
  overflow: hidden;
  transition: transform 0.25s ease, border-color 0.25s ease;
}
.prod-card:hover { transform: translateY(-6px); border-color: var(--accent); }
.prod-img { position: relative; aspect-ratio: 16/10; overflow: hidden; background: #000; }
.prod-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
.prod-card:hover .prod-img img { transform: scale(1.07); }
.prod-cat {
  position: absolute; top: 14px; left: 14px;
  padding: 5px 10px; border-radius: 6px;
  background: rgba(7, 9, 13, 0.7);
  backdrop-filter: blur(6px);
  color: var(--accent); font-size: 11px; letter-spacing: 0.1em;
}
.prod-body { padding: 22px; }
.prod-body h3 { font-size: 21px; margin-bottom: 6px; }
.prod-body p { color: var(--text-dim); font-size: 14px; margin-bottom: 14px; }
.prod-spec { display: flex; flex-direction: column; gap: 4px; margin-bottom: 16px; }
.prod-spec span { color: var(--text-faint); font-size: 12px; }
.prod-more { color: var(--accent); font-size: 13px; }

/* STATS */
.stats { padding: 56px 0; border-top: 1px solid var(--line-soft); border-bottom: 1px solid var(--line-soft); }
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.stat-value { font-size: clamp(30px, 3.5vw, 44px); font-weight: 700; }
.stat-label { color: var(--text-dim); font-size: 14px; margin-top: 6px; }

/* CAPS */
.alt { background: var(--bg-soft); border-top: 1px solid var(--line-soft); }
.cap-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.cap-card {
  background: var(--panel); border: 1px solid var(--line-soft);
  border-radius: var(--radius); padding: 28px 24px;
  transition: transform 0.25s ease, border-color 0.25s ease;
}
.cap-card:hover { transform: translateY(-4px); border-color: var(--accent); }
.cap-code { color: var(--accent); font-size: 13px; margin-bottom: 18px; }
.cap-card h3 { font-size: 18px; margin-bottom: 10px; }
.cap-card p { color: var(--text-dim); font-size: 14px; }

/* CTA */
.cta-band {
  padding: 100px 0;
  background: radial-gradient(ellipse at center, var(--accent-soft) 0%, transparent 60%), var(--bg-soft);
  border-top: 1px solid var(--line-soft);
}
.cta-inner { text-align: center; max-width: 680px; }
.cta-inner h2 { font-size: clamp(28px, 4vw, 44px); font-weight: 800; margin-bottom: 14px; }
.cta-inner p { color: var(--text-dim); margin-bottom: 30px; }

@media (max-width: 900px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 32px 16px; }
  .cap-grid { grid-template-columns: repeat(2, 1fr); }
  .prod-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 520px) {
  .cap-grid { grid-template-columns: 1fr; }
  .prod-grid { grid-template-columns: 1fr; }
  .readout { gap: 18px; font-size: 11px; }
}
</style>
