<script>
  import axios from 'axios'
  import {login} from './request.js'
  
  export default {
    data(){
      return {
        username: "",
        password: "",
        loading: false,
        setIt: null,
        disabled: false
      }
    },
    methods: {
      loginFn(){
        this.disabled = true
        if(!this.username && !this.password){
          this.disabled = false
          alert("请填写用户名和密码!")
          return
        }
        login(this.username, this.password).finally(() => {
          this.disabled = false
        })
      }
    },
    mounted(){
      this.setIt = setInterval(() => {
        if(window.localStorage.getItem("default-admin")){
          this.loading = true
          document.getElementsByClassName("navbar")[0].style.display = "none"
          clearInterval(this.setIt)
        } 
      }, 500)
    },
    beforeDestory(){
      clearInterval(this.setIt)
    }
  }
</script>

<image-com :src="'/logo.png'" :headerImg="'/header.png'" :width="137" :height="84" :bgWidth="'1920'" :bgHeight="'896'"></image-com>

<div class="login_content" v-if="!loading">
  <div>
    <div>
      <span>用户名:</span><input class="login_username" type="text" v-model="username" placeholder="用户名"/>
    </div>
    <div>
      <span>密码:</span><input class="login_password" type="password" v-model="password" placeholder="密码"/>
    </div>
    <div>
      <Button @click="loginFn" :disabled="disabled">登录</Button>
    </div>
  </div>
</div>
<div class="admin_content" v-else>
  <admin></admin>
</div>>
