<template>
  <div>
    <Form
      :model="formItem"
      :label-width="120"
      :rules="rules"
      class="register-form"
      ref="registerForm"
    >
      <FormItem :label="index" :prop="index" v-for="(item,index) in formItem" :key="index">
        <i-input v-model="formItem[index]" :placeholder="index"></i-input>
      </FormItem>

      <FormItem>
        <Button class="prev-btn" @click="prevStep()" style>上一步</Button>
        <Button @click="nextStep('registerForm')">下一步</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  props: ['formItem', 'rules'],
  methods: {
    nextStep: function(name) {
      this.$refs[name].validate(valid => {
        if (!valid) {
          return;
        }
        this.$emit('next');
      });
    },
    prevStep: function() {
      this.$emit('prev');
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
