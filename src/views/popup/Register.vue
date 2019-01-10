<template>
  <div class="form-box">
    <ul class="step-list">
      <li v-for="(item, index) in steplist" :key="index" :class="{'active':index<=step}">{{item}}</li>
    </ul>
    <step1
      v-if="step==0"
      :form-item="formlist[0]"
      :rules="ruleValidate"
      :reg-info="regInfo"
      @next="nextStep"
    ></step1>
    <step2
      v-if="step==1"
      :form-item="formlist[1]"
      :rules="ruleValidate"
      :reg-info="regInfo"
      @next="nextStep"
      @prev="prevStep"
    ></step2>
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
          Referrer: '',
          Account: '',
          Password: '',
          CheckPsd: '',
          MoneyPassword: ''
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
      },
      regInfo: {
        Referrer: {
          name: '推薦人',
          placeholder: '請輸入推薦人',
          type: 'text',
          step: 1
        },
        Account: {
          name: '會員帳號',
          placeholder: '2 - 15 字元，字母開頭，限字母，數字和底線',
          type: 'text',
          maxlength: 15,
          pattern: /^[a-zA-Z]\w{1,}/,
          step: 1
        },
        Password: {
          name: '會員密碼',
          placeholder: '6 個字元以上，須包含字母及數字',
          type: 'password',
          pattern: /\w{6,}/,
          step: 1
        },
        CheckPsd: {
          name: '確認密碼',
          model: 'CheckPsd',
          placeholder: '請再確認密碼',
          type: 'password',
          step: 1
        },
        MoneyPassword: {
          name: '取款密碼',
          placeholder: '請輸入取款密碼',
          type: 'password',
          pattern: /[0-9]/,
          step: 1
        },
        Name: {
          name: '真實姓名',
          placeholder: '請輸入真實姓名 需與提款銀行戶口相同',
          type: 'text',
          step: 2
        },
        Mobile: {
          name: '手機號碼',
          placeholder: '請輸入手機號碼',
          type: 'text',
          pattern: /[0-9]/,
          step: 2
        },
        Email: {
          name: '電子信箱',
          placeholder: '請輸入電子信箱',
          type: 'email',
          step: 2
        },
        Sex: {
          name: '性別',
          placeholder: '請輸入性別',
          type: 'text',
          step: 2
        }
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
  },
  mounted: function() {
    this.axios
      .get('https://next.json-generator.com/api/json/get/Ek4rMjJzI')
      .then(response => {
        if (!response.IsSuccess) {
          return;
        }
        const masterSetting = response.ReturnObject;
      });
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
