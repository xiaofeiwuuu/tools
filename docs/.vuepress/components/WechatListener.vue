<template>
  <!-- 弹窗遮罩 -->
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="showModal" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="closeModal">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
          <h3 class="modal-title">扫码关注公众号</h3>
          <div class="qrcode-container">
            <img src="/code.jpg" alt="公众号二维码" class="qrcode-image" />
          </div>
          <p class="modal-subtitle">无忧不忧</p>
          <p class="modal-desc">发现更多实用工具和资源</p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showModal = ref(false)

const closeModal = () => {
  showModal.value = false
}

const handleClick = (e) => {
  // 检查是否是公众号链接
  const target = e.target.closest('a')
  if (target && target.getAttribute('href') === '#wechat') {
    e.preventDefault()
    showModal.value = true
  }
}

// ESC 键关闭弹窗
const handleKeydown = (e) => {
  if (e.key === 'Escape' && showModal.value) {
    closeModal()
  }
}

onMounted(() => {
  // 监听全局点击事件
  document.addEventListener('click', handleClick)
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClick)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
/* 弹窗样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.modal-content {
  position: relative;
  background: white;
  border-radius: 16px;
  padding: 30px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  text-align: center;
}

:global(.dark) .modal-content {
  background: #1a1a1a;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s;
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.05);
  color: #333;
}

:global(.dark) .modal-close {
  color: #999;
}

:global(.dark) .modal-close:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ccc;
}

.modal-title {
  margin: 0 0 20px 0;
  font-size: 20px;
  font-weight: 600;
  color: #333;
}

:global(.dark) .modal-title {
  color: #fff;
}

.qrcode-container {
  margin: 20px 0;
  padding: 20px;
  background: #f8f8f8;
  border-radius: 12px;
  display: inline-block;
}

:global(.dark) .qrcode-container {
  background: #2a2a2a;
}

.qrcode-image {
  width: 200px;
  height: 200px;
  display: block;
}

.modal-subtitle {
  margin: 15px 0 5px 0;
  font-size: 18px;
  font-weight: 600;
  color: #07c160;
}

.modal-desc {
  margin: 0;
  color: #666;
  font-size: 14px;
}

:global(.dark) .modal-desc {
  color: #999;
}

/* 过渡动画 */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from .modal-content {
  transform: scale(0.9);
}

.modal-leave-to .modal-content {
  transform: scale(0.9);
}

/* 响应式 */
@media (max-width: 480px) {
  .modal-content {
    padding: 25px;
  }
  
  .qrcode-image {
    width: 160px;
    height: 160px;
  }
}
</style>