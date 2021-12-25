<template>
  <div class="toasts">
    <div v-for="toast in toasts" class="toast" :class="toast.class">
      <ui-icon class="toast__icon" :icon="toast.icon" v-if="toast.icon" />
      <span>{{ toast.message }}</span>
    </div>
  </div>
</template>

<script>
import UiIcon from './UiIcon';
import { toasterClasses, toasterIcons } from './ToasterTypeData';

export default {
  name: 'TheToaster',

  components: { UiIcon },

  methods: {
    success(message){
      var toast = this.showToast('success', message);
      this.setHidingToast(toast, 5000);
    },

    error(message){
      var toast = this.showToast('error', message);
      this.setHidingToast(toast, 5000);
    },

    showToast(toastType, message){
      var toast = {
        message: message,
        class: toasterClasses.[toastType],
        icon: toasterIcons.[toastType],
      };
      this.toasts.add(toast);
      return toast;
    },

    setHidingToast(toast, delay){
      setTimeout((toast) => {this.hideToast(toast)}, delay, toast);
    },

    hideToast(toast){
      this.toasts.delete(toast);
    },
  },

  data() {
    return {
      toasts: new Set(),
    };
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
