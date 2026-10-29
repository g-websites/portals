<script setup>
import { reactive, ref } from 'vue'

const form = reactive({ name: '', company: '', email: '', message: '' })
const sent = ref(false)

function submit() {
  // 前端演示：实际项目里接后端 API
  sent.value = true
}
</script>

<template>
  <div class="page">
    <div class="container">
      <header class="head">
        <span class="kicker">CONTACT</span>
        <h1 class="title">联系我们</h1>
        <p class="sub">留下你的设备场景，曜明 FAE 团队将在 1 个工作日内回复选型建议。</p>
      </header>

      <div class="layout">
        <div class="info">
          <div class="block">
            <h4>销售咨询</h4>
            <p class="mono">sales@emnova.tech</p>
            <p class="mono">+86 594 000 8888</p>
          </div>
          <div class="block">
            <h4>技术支持</h4>
            <p class="mono">support@emnova.tech</p>
            <p>工作日 9:00 – 18:00</p>
          </div>
          <div class="block">
            <h4>总部地址</h4>
            <p>福建省福州市 高新区 创新路 88 号<br />曜明科技园 A 座</p>
          </div>
        </div>

        <form class="form" @submit.prevent="submit">
          <div v-if="sent" class="done">
            <h3>提交成功</h3>
            <p>我们已收到你的信息，会尽快与你联系。</p>
          </div>
          <template v-else>
            <div class="row2">
              <label>
                <span>姓名</span>
                <input v-model="form.name" required placeholder="怎么称呼你" />
              </label>
              <label>
                <span>公司</span>
                <input v-model="form.company" required placeholder="公司名称" />
              </label>
            </div>
            <label>
              <span>邮箱</span>
              <input v-model="form.email" type="email" required placeholder="name@company.com" />
            </label>
            <label>
              <span>需求描述</span>
              <textarea v-model="form.message" rows="5" required placeholder="简单描述你的设备、需要的产品方向和数量级…"></textarea>
            </label>
            <button type="submit" class="btn btn-primary">提交咨询</button>
          </template>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page { padding: 150px 0 100px; min-height: 80vh; }
.title { font-size: clamp(36px, 5vw, 58px); font-weight: 800; margin: 16px 0 14px; }
.sub { color: var(--text-dim); max-width: 560px; }

.layout {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 60px;
  margin-top: 50px;
}
.info { display: flex; flex-direction: column; gap: 30px; }
.block h4 { font-size: 13px; color: var(--text-faint); letter-spacing: 0.16em; margin-bottom: 10px; }
.block p { color: var(--text-dim); font-size: 15px; padding: 2px 0; }

.form {
  background: var(--panel);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius);
  padding: 32px;
}
.row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
label { display: block; margin-bottom: 18px; }
label span { display: block; font-size: 13px; color: var(--text-dim); margin-bottom: 8px; }
input, textarea {
  width: 100%;
  background: var(--bg-soft);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  padding: 13px 14px;
  color: var(--text);
  font-family: inherit;
  font-size: 15px;
  resize: vertical;
}
input:focus, textarea:focus {
  outline: none;
  border-color: var(--accent);
}
.done { text-align: center; padding: 40px 0; }
.done h3 { font-size: 24px; margin-bottom: 10px; color: var(--accent); }
.done p { color: var(--text-dim); }

@media (max-width: 820px) {
  .layout { grid-template-columns: 1fr; gap: 36px; }
  .row2 { grid-template-columns: 1fr; }
}
</style>
