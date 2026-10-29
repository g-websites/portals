<script setup>
import lab from '../assets/images/lab.jpg'

const timeline = [
  { year: '2014', text: '曜明电子在福州成立，首颗自研 MCU 流片成功。' },
  { year: '2017', text: '深圳制造基地投产，工业电源模块通过 UL 认证。' },
  { year: '2020', text: '首款边缘计算终端出货，进入全球 30+ 国家设备供应链。' },
  { year: '2023', text: '6nm 主控芯片 Nova X1 发布，AI 算力达 48 TOPS。' },
  { year: '2026', text: '累计出货芯片突破 1.2 亿颗，服务全球设备厂商。' },
]

const values = [
  { title: '精度为先', desc: '每一颗料号都经过 -40℃~85℃ 全温区验证。' },
  { title: '长期主义', desc: '主力产品生命周期不短于 10 年。' },
  { title: '可量产', desc: '设计阶段即导入 DFM，确保良率与交付。' },
]
</script>

<template>
  <div>
    <section class="hero">
      <img :src="lab" alt="" class="bg" />
      <div class="ov"></div>
      <div class="container inner">
        <span class="kicker">ABOUT EMNOVA</span>
        <h1>做被设备厂商<br />长期信任的硬件伙伴</h1>
        <p>
          曜明电子成立于 2014 年，是一家专注于高性能集成电路与智能硬件产品的设计制造公司。
          我们相信，好的电子产品应当安静、可靠、并在最苛刻的环境里持续工作。
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="cols">
          <div class="reveal">
            <span class="kicker">WHAT WE DO</span>
            <h2 class="h2">从芯片到整机</h2>
            <p class="dim">
              我们不只卖元器件。曜明提供从主控芯片选型、原理图参考设计、散热与结构仿真，
              到整机制造、认证与售后的完整硬件服务。客户拿到的不是一个零件，
              而是一段可以直接装进自己产品里的确定性。
            </p>
          </div>
          <div class="values reveal">
            <div v-for="v in values" :key="v.title" class="v-card">
              <h3>{{ v.title }}</h3>
              <p>{{ v.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section alt-sec">
      <div class="container">
        <h2 class="h2 reveal">发展历程</h2>
        <div class="timeline">
          <div v-for="(t, i) in timeline" :key="t.year" class="t-row reveal" :style="{ transitionDelay: i * 80 + 'ms' }">
            <div class="t-year mono">{{ t.year }}</div>
            <div class="t-dot"></div>
            <p>{{ t.text }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero { position: relative; min-height: 78vh; display: flex; align-items: center; overflow: hidden; }
.bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.ov {
  position: absolute; inset: 0;
  background: linear-gradient(90deg, rgba(7,9,13,0.92) 0%, rgba(7,9,13,0.6) 55%, rgba(7,9,13,0.4) 100%),
              linear-gradient(0deg, var(--bg) 2%, transparent 45%);
}
.inner { position: relative; z-index: 2; padding-top: 60px; max-width: 720px; }
.inner h1 {
  font-size: clamp(36px, 5.5vw, 64px);
  font-weight: 800; line-height: 1.08; margin: 18px 0 22px; letter-spacing: -0.01em;
}
.inner p { color: var(--text-dim); font-size: 17px; }

.cols { display: grid; grid-template-columns: 1fr 1.1fr; gap: 60px; align-items: start; }
.h2 { font-size: clamp(28px, 3.6vw, 42px); font-weight: 800; margin: 16px 0 18px; }
.dim { color: var(--text-dim); font-size: 16px; }
.values { display: flex; flex-direction: column; gap: 16px; }
.v-card {
  background: var(--panel);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius);
  padding: 22px 24px;
}
.v-card h3 { font-size: 18px; margin-bottom: 8px; color: var(--accent); }
.v-card p { color: var(--text-dim); font-size: 14px; }

.alt-sec { background: var(--bg-soft); border-top: 1px solid var(--line-soft); border-bottom: 1px solid var(--line-soft); }
.timeline { margin-top: 40px; max-width: 760px; }
.t-row {
  display: grid;
  grid-template-columns: 110px 24px 1fr;
  align-items: center;
  padding: 18px 0;
  border-bottom: 1px solid var(--line-soft);
}
.t-row:last-child { border-bottom: 0; }
.t-year { color: var(--accent); font-size: 18px; font-weight: 700; }
.t-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 10px var(--accent);
  justify-self: center;
}
.t-row p { color: var(--text-dim); font-size: 15px; }

@media (max-width: 820px) {
  .cols { grid-template-columns: 1fr; gap: 36px; }
  .t-row { grid-template-columns: 80px 20px 1fr; }
}
</style>
