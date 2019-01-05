<template>
  <Form :model="formItem" :label-width="120" :rules="ruleValidate" class="register-form">
    <ul class="step-list">
      <li v-for="(item, index) in steplist" :key="index" :class="{'active':index<=step}">{{item}}</li>
    </ul>
    <template v-if="step==0">
      <FormItem label="推荐人" prop="ParentAccount">
        <i-input v-model="formItem.ParentAccount" placeholder="Enter something..."></i-input>
      </FormItem>
      <FormItem label="会员账号" prop="Account">
        <i-input v-model="formItem.Account" placeholder="Enter something..."></i-input>
      </FormItem>
      <FormItem label="会员密码" prop="Password">
        <i-input v-model="formItem.Password" placeholder="Enter something..."></i-input>
      </FormItem>
      <FormItem label="确认密码" prop="Confirm_Password">
        <i-input v-model="formItem.Confirm_Password" placeholder="Enter something..."></i-input>
      </FormItem>
      <FormItem label="取款密码" prop="MoneyPassword">
        <i-input v-model="formItem.MoneyPassword" placeholder="Enter something..."></i-input>
      </FormItem>
      <FormItem class="step-1-btn">
        <Checkbox v-model="formItem.agree">
          已满18 岁，且同意本站
          <span>用户注册协议</span>
        </Checkbox>
        <Button @click="nextStep()">下一步</Button>
      </FormItem>
    </template>
    <template v-else-if="step==1">
      <FormItem>
        <Button class="prev-btn" @click="prevStep()" style>上一步</Button>
        <Button @click="nextStep()">下一步</Button>
      </FormItem>
    </template>
    <template v-else-if="step==2"></template>
  </Form>
</template>

<script>
export default {
  data() {
    return {
      step: 0,
      steplist: ['输入账密', '会员资料', '完成注册'],
      formItem: {
        ParentAccount: '',
        Account: '',
        Password: '',
        Confirm_Password: '',
        MoneyPassword: ''
      },
      ruleValidate: {
        ParentAccount: [
          {
            required: true,
            message: 'The name cannot be empty',
            trigger: 'blur'
          }
        ],
        Account: [
          {
            required: true,
            message: 'The name cannot be empty',
            trigger: 'blur'
          }
        ],
        Password: [
          {
            required: true,
            message: 'The name cannot be empty',
            trigger: 'blur'
          }
        ],
        Confirm_Password: [
          {
            required: true,
            message: 'The name cannot be empty',
            trigger: 'blur'
          }
        ],
        MoneyPassword: [
          {
            required: true,
            message: 'The name cannot be empty',
            trigger: 'blur'
          }
        ],
        agree: [
          {
            required: true
          }
        ]
      }
    };
  },
  methods: {
    nextStep: function() {
      switch (this.step) {
        case 0:
          console.log(`step 1 done. ${JSON.stringify(this.formItem)} `);
          break;
        case 1:
          console.log(`step 2 done. ${JSON.stringify(this.formItem)} `);
          break;
        default:
          break;
      }
      this.step++;
    },
    prevStep: function() {
      this.step--;
    }
  }
};
</script>

<style lang="scss" scoped>
.step-list {
  margin-bottom: 20px;
  li {
    display: inline-block;
    font-size: 12px;
    color: #8f8f8f;
    font-weight: bold;
    counter-increment: step;
    &:before {
      content: counter(step);
      display: inline-block;
      width: 18px;
      height: 18px;
      margin: 0 5px;
      color: #fff;
      border-radius: 50%;
      background: #8f8f8f;
    }
    &:after {
      content: '';
      display: inline-block;
      width: 18px;
      height: 12px;
      margin-left: 5px;
      background: url('https://i.imgur.com/7XBymwN.png') no-repeat center;
    }
    &:last-child:after {
      display: none;
    }
    &.active {
      color: #563a83;
      &:before {
        background-color: #563a83;
      }
      &:after {
        background-image: url('https://i.imgur.com/4ePgveS.png');
      }
    }
  }
}
.ivu-form .ivu-form-item-label {
  font-size: 14px;
  font-weight: bold;
}
form {
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
  button {
    width: 164px;
    height: 44px;
    margin: 0 10px;
    color: #fff;
    font-weight: bold;
    border-radius: 10px;
    background: #563a83;
    border: none;
    &:hover {
      color: #fff;
      background: #48326c;
    }
    &.prev-btn {
      background: #326a9a;
      &:hover {
        background: #204666;
      }
    }
  }
}
</style>
