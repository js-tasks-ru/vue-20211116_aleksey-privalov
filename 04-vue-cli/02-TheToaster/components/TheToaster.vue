<template>
  <div class="toasts">
    <div v-for="[mess, toast] in toasts" class="toast" :class="toast.class">
      <ui-icon class="toast__icon" :icon="toast.icon" />
      <span>{{ mess }}</span>
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
      this.showToast('success', message);
      this.setHidingToast(message, 5000);
    },

    error(message){
      this.showToast('error', message);
      this.setHidingToast(message, 5000);
    },

    showToast(toastType, message){
      this.toasts.set(message, {
        class: toasterClasses.[toastType],
        icon: toasterIcons.[toastType],
      });
    },

    setHidingToast(message, delay){
      setTimeout((mess) => {this.hideToast(mess)}, delay, message);
    },

    hideToast(mess){
      this.toasts.delete(mess);
    },
  },

  data() {
    return {
      toasts: new Map(),
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
