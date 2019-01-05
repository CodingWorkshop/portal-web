<template>
  <div class="form-box">
    <ul class="step-list">
      <li v-for="(item, index) in steplist" :key="index" :class="{'active':index<=step}">{{item}}</li>
    </ul>
    <step1 v-if="step==0" :form-item="formlist[0]" :rules="ruleValidate" @next="nextStep"></step1>
    <step2 v-if="step==1" :form-item="formlist[1]" :rules="ruleValidate" @next="nextStep" @prev="prevStep"></step2>
    <step3 v-if="step==2"></step3>
  </div>
</template>

<script>
import step1 from '@/views/popup/Register/step1.vue';
import step2 from '@/views/popup/Register/step2.vue';
import step3 from '@/views/popup/Register/step3.vue';

export default {
  components: {
    step1,
    step2,
    step3
  },
  data() {
    return {
      step: 0,
      steplist: ['输入账密', '会员资料', '完成注册'],
      formlist: [
        {
          ParentAccount: '',
          Account: '',
          Password: '',
          Confirm_Password: '',
          MoneyPassword: ''
          // agree: ''
        },
        {
          Email: '',
          Mobile: ''
        }
      ],
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
            required: true,
            type: 'boolean'
          }
        ],
        Email: [
          {
            required: true
          }
        ],
        Mobile: [
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
          console.log(
            `step 1 done. ${JSON.stringify(this.formlist[this.step])}`
          );
          break;
        case 1:
          console.log(
            `step 2 done. ${JSON.stringify(this.formlist[this.step])}`
          );
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

.form-box /deep/ button {
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
</style>
