<template>
  <div>
    <Form
      :model="formItem"
      :label-width="120"
      :rules="rules"
      class="register-form"
      ref="registerForm"
    >
      <FormItem :label="regInfo[index].name" :prop="index" v-for="(item,index) in formItem" :key="index">
        <i-input v-model="formItem[index]" :placeholder="regInfo[index].placeholder"></i-input>
      </FormItem>
      <FormItem class="step-1-btn">
        <Checkbox v-model="agree">
          已满18 岁，且同意本站
          <span>用户注册协议</span>
        </Checkbox>
        <Button @click="nextStep('registerForm')" :disabled="!agree">下一步</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  props: ['formItem', 'rules', 'regInfo'],
  data() {
    return {
      agree: false
    };
  },
  methods: {
    nextStep: function(name) {
      this.$refs[name].validate(valid => {
        if (!valid) {
          return;
        }
        this.$emit('next');
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.step-1-btn {
  margin: 0 -10px;
  padding: 15px 10px 0 0;
  text-align: right;
  border-top: 2px solid #563a84;
  label {
    float: left;
    color: #5c5c5c;
  }
}
</style>
