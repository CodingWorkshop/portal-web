<template>
  <transition :name="'md-' + animation">
    <div class="md-backdrop">
      <div class="md-container">
        <div class="md-header">
          <slot name="header">彈窗標題</slot>
          <button type="button" class="btn-close" @click="close">x</button>
        </div>
        <div class="md-body">
          <slot name="body">彈窗標題內容</slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: ['animation'],
  data() {
    return {};
  },
  methods: {
    close: function() {
      this.$emit('close');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.md-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
.md-container {
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  min-width: 500px;
  min-height: 400px;
  background-color: #fff;
  box-shadow: 1px 1px 9px 0;
  border-radius: 7px;
}
.md-header {
  position: relative;
  display: block;
  height: 50px;
  line-height: 50px;
  color: #fff;
  background-color: #563a84;
  text-align: center;
}
.md-body {
  position: relative;
  padding: 20px 10px;
}
.btn-close {
  position: absolute;
  top: 11px;
  right: 10px;
  width: 30px;
  height: 30px;
  padding: 0;
  color: #563a84;
  font-size: 21px;
  font-weight: bold;
  line-height: 30px;
  background-color: #fff;
  border-radius: 50%;
  border: none;
  cursor: pointer;
}
// animation: fade-in
.md-fade-enter,
.md-fade-leave-active {
  opacity: 0;
}
.md-fade-enter-active,
.md-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
