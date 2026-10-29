<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container grid">
      <div class="col brand-col">
        <div class="brand">
          <span class="mark">EM</span>
          <strong>EMNOVA 曜明电子</strong>
        </div>
        <p class="desc">
          专注高性能主控芯片、工业电源、智能传感与边缘计算终端，
          为全球设备厂商提供从芯片到整机的电子硬件解决方案。
        </p>
      </div>

      <div class="col">
        <h4>产品</h4>
        <router-link to="/products">主控芯片</router-link>
        <router-link to="/products">工业电源</router-link>
        <router-link to="/products">智能传感</router-link>
        <router-link to="/products">边缘计算</router-link>
      </div>

      <div class="col">
        <h4>公司</h4>
        <router-link to="/about">关于曜明</router-link>
        <router-link to="/contact">联系我们</router-link>
        <router-link to="/contact">供应商合作</router-link>
        <router-link to="/contact">招贤纳士</router-link>
      </div>

      <div class="col">
        <h4>联系方式</h4>
        <p class="mono">sales@emnova.tech</p>
        <p class="mono">+86 594 000 8888</p>
        <p>福建省福州市 高新区 创新路 88 号</p>
      </div>
    </div>

    <div class="container bottom">
      <span class="mono">© {{ year }} EMNOVA Electronics. All rights reserved.</span>
      <span class="mono">BUILD 2026 · PRECISION BY DESIGN</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--line-soft);
  background: var(--bg-soft);
  padding: 64px 0 0;
  margin-top: 40px;
}
.grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
  gap: 40px;
  padding-bottom: 48px;
}
.brand { display: flex; align-items: center; gap: 10px; margin-bottom: 18px; }
.mark {
  display: grid; place-items: center;
  width: 32px; height: 32px;
  border-radius: 8px;
  background: var(--accent); color: #04211d;
  font-weight: 800; font-family: var(--font-mono); font-size: 13px;
}
.desc { color: var(--text-dim); font-size: 14px; max-width: 340px; }
.col h4 {
  font-size: 13px;
  letter-spacing: 0.16em;
  color: var(--text-faint);
  margin-bottom: 18px;
  font-weight: 600;
}
.col a, .col p {
  display: block;
  color: var(--text-dim);
  font-size: 14px;
  padding: 5px 0;
}
.col a:hover { color: var(--accent); }
.bottom {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding-top: 20px;
  padding-bottom: 24px;
  border-top: 1px solid var(--line-soft);
  color: var(--text-faint);
  font-size: 12px;
}
@media (max-width: 820px) {
  .grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 520px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
