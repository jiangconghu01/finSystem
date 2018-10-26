<style lang='scss' scoped>
.login-page{
  width: 100%;
  height: 100%;
  background: url("../static/bjtp.png") no-repeat;
  background-size:100% 100%; 
  background-attachment:fixed;
  position: relative;
  .login-logo{
    display: inline-block;
    width:20%;
    //position:absolute;
    margin-left:9%;
    span{
      display: inline-block;
      &.logo{
        width: 85%;
        margin-top:15%;
      }
      &.card{
        width: 100%;
        margin-top: 10%;
      }
      img{
        width: 100%;
      }
    }
  }
  .login-form{
    background-color: #fff;
    display: inline-block;
    vertical-align: top;
    width: 27%;
    border-radius: 2%;
    position: absolute;
    right: 10%;
    top:15%;
    padding: 2% 0;
    ul{
      margin: 0 auto;
      width: 70%;
      li{
        margin-top: 2%;
        white-space: nowrap;
        &:nth-child(2){
          margin-top: 8%;
        }
        p{
          font-size: 18px;
          // height: 50px;
          // line-height: 50px;
          text-align: center;
        }
        input{
          height: 36px;
          width: calc(100% - 2px);
          border: 1px solid #DCDCDC;
          &.verify-code-text{
            width:calc(40% - 2px);
            background: #F4F4F4;
            height: 38px;           
            border: 1px solid #DCDCDC;
            cursor: pointer;
          }
          &.verify-code{
            float: left;
            width:calc(60% - 2px);
          }
        }
        button{
          height: 36px;
          width: 100%;
          background: #378EDF;
          color: #FEFEFE;
          border: 1px;
          cursor: pointer;
        }
        &:last-child{
          color: #4D9AE3;
          font-size: small;
          text-align: right;
        }
      }
    }
    .form-footer{
      margin-top: 10%;
      .more-login{
        color: #C7C7C7;
        position: relative;
        margin: 2% 0;
        text-align: center;
        hr{
          position: absolute;
          width: 20%;
          color: #C7C7C7;
          background-color: #C7C7C7;
          bottom: 5%;
          &:nth-child(1){
            left:15%;
          }
          &.after{
            right: 15%;
          }
        }
        span{
           font-size: 14px;
        }
      }
      .circle-button{
        margin-top: 5%;
        text-align: center;
        .button{
          display: inline-block;
          width: 50px;
          height: 50px;
          border-radius: 100%;
          line-height: 50px;
          text-align: center;
          color:#fff;
          &:nth-child(1){
            background: #1EBDEB;
            margin-right: 8%;
          }
          &:nth-child(2){
            background: #57D220;
            margin-left:8%;
          }
        }
      }
      .text{
        margin-top: 5%;
        text-align: center;
        color:#CDCDC1;
          .eip{
            margin-right: 8%;
          }
          .mss{
            margin-left: 8%;
          }
      }
    }

  }
  .auth{
      width: 15%;
      position: absolute; 
      top: 90%; 
      left: 6%; 
      color: #FEFEFE;
      font-size:24px;
    }
}
</style>
<template>
  <div class="login-page" :style="{minHeight:mheight}">
    <!-- <img src="./static/bjtp.png" alt=""> -->
    <div class="login-logo">
      <span class="logo">
        <img src="../static/zybt.png" alt="">
      </span>
      <span class="card"><img src="../static/wzz.png" alt=""></span>
    </div>
    <div class="login-form">
      <ul class="input-box">
        <li><p>财智系统登录</p></li>
        <li>
        <input type="text" autocomplete="on" 
        placeholder="请输入手机号码/MSS账号/EIP账号"
        v-model="userCode"
        >
        </li>
        <li>
          <input type="password" autocomplete="on" 
          v-model="userPassword"
          placeholder="请输入密码">
        </li>
        <li>
          <input class="verify-code" v-model="verifyCode" type="text" placeholder="请输入验证码">
          <input class="verify-code-text" type="button" :value="verifyText" @click="countDown()">
        </li>
        <li><button class="login-action" @click="loginAction()">登录</button></li>
        <li><font size="2">忘记密码？</font></li>
      </ul>
      <div class="form-footer">
        <div class="more-login">
          <hr>
          <span><font size="2">更多登陆方式</font></span>
          <hr class="after">
        </div>
        <div class="circle-button">
          <span class="button">EIP</span>
          <span class="button">MSS</span>
        </div>
        <div class="text">
          <font class="eip">EIP账号</font>
          <font class="mss">MSS账号</font>
        </div>
      </div>
    </div>
    <div class="auth">
      <font size="5">金晓晖&nbsp;&nbsp;摄</font>
    </div>
  </div>
 
</template>
<script>
import { JSEncrypt } from 'jsencrypt'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      mheight: '',
      userCode: '',
      userPassword: '',
      publicKey: '',
      verifyCode: '',
      status: 'empty',
      count: 60,
      timer: ''
    }
  },

  components: {

  },

  computed: {
    ...mapGetters([
      'ip',
      'project'
    ]),
    verifyText () {
      return this.status !== 'count' ? '获取验证码' : this.count + 's'
    }
  },
  created () {
    this.getPublickey()
  },
  mounted () {
    this.setLeyout()
    let timer = ''
    window.onresize = () => {
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        this.setLeyout()
      }, 500)
    }
  },

  methods: {
    async getPublickey () {
      const resdata = await this.$http.get(this.project + 'pages/getRSAPublicKey.do')
      this.publicKey = resdata.data.publicKey[0]
      return resdata.data.publicKey[0]
    },
    setLeyout () {
      // this.$nextTick(()=>{
      let h = document.body.clientHeight
      let sh = document.body.scrollHeight;
      (h <= sh) && (this.mheight = sh + 'px')
      // });
    },

    async countDown () {
      console.log(this.count)
      if (this.count > 1 && this.count < 60) return
      if (!this.userCode || !this.userPassword) {
        this.$message({
          type: 'warning',
          showClose: true,
          center: true,
          duration: 2500, // 配置为0不会自动关闭
          message: '用户名和密码是必填项目'
        })
      } else {
        this.status = 'count'
        this.timer = setInterval(() => {
          if (this.count < 1) {
            clearInterval(this.timer)
            this.status = 'empty'
            this.count = 60
          }
          this.count -= 1
        }, 1000)
        const resdata = await this.$http.get(this.project + 'pages/getRSAPublicKey.do')
        this.publicKey = resdata.data.publicKey[0]
        const encrypt = new JSEncrypt()
        encrypt.setPublicKey(this.publicKey)
        const user = encrypt.encrypt(this.userCode)
        const pass = encrypt.encrypt(this.userPassword)
        const data = {
          inUserCode: user,
          inPassword: pass
        }
        const code = await this.$http.post(this.project + 'pages/getCode.do', data)
        code.data.status[0] == '1' && this.$message.error(code.data.msg[0])
      }
    },
    async loginAction () {
      if (!this.userCode || !this.userPassword || !this.verifyCode) {
        this.$message({
          type: 'error',
          showClose: true,
          center: true,
          duration: 2500,
          message: '用户名、密码和验证码为必填项'
        })
        return
      }
      this.timer && clearInterval(this.timer)
      const encrypt = new JSEncrypt()
      encrypt.setPublicKey(this.publicKey)
      const data = {
        inUserCode: encrypt.encrypt(this.userCode),
        inPassword: encrypt.encrypt(this.userPassword),
        inVerifyCode: encrypt.encrypt(this.verifyCode)
      }
      const res = await this.$http.post(this.project + 'pages/logining.do', data)
      if (~res.data.slice(-50).indexOf('success')) {
        this.$router.push({ name: 'Index' })
        this.$message({
          message: '登录成功，财智系统欢迎您！',
          type: 'success'
        })
      } else {
        // this.$message.error('登录失败！')
        // this.$alert('<iframe>' + res.data + '</iframe>', 'HTML 片段', {
        //   dangerouslyUseHTMLString: true
        // })
        const a = document.createElement('div')
        a.innerHTML = res.data
        const targetVal = a.querySelector('#divErrorMessage')
        targetVal && this.$message({
          type: 'error',
          dangerouslyUseHTMLString: true,
          message: targetVal.innerHTML
        })
        !targetVal && this.$message.error('登录失败！')
      }
    }
  }
}
</script>
