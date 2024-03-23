<template>
  <div class="vh-100 bg-gray d-flex justify-content-center align-items-center">
    <div class="border rounded-4 shadow mb-5 bg-body rounded">
     <div class="login px-5 py-4 rounded-4 d-flex flex-column align-items-center">
       <h2 class="mb-3 fs-3 text-db-dark">
        <i class="bi bi-microsoft me-3"></i>
        <span>後台登入</span>
       </h2>
       <!-- Form -->
       <form action="#" class="form">
         <div class="mb-3">
           <label for="email" class="form-label">帳號</label>
           <div class="border position-relative rounded-2">
             <i class="bi bi-envelope position-absolute top-50 start-0 translate-middle-y ms-3"></i>
             <input type="email" class="form-control border-0 ps-6" id="email"
              placeholder="請輸入 Email"
              v-model="user.username">
           </div>
         </div>
         <div class="">
           <label for="password" class="form-label">密碼</label>
           <div class="border position-relative rounded-2">
            <i class="bi bi-key position-absolute top-50 start-0 translate-middle-y ms-3"></i>
             <input type="password" class="form-control border-0 ps-6" id="password"
              placeholder="請輸入密碼" autocomplete="true"
              v-model="user.password"
              @keyup.enter="login()">
           </div>
         </div>
         <div class="d-grid gap-2 mt-4 mb-2">
            <button class="btn btn-primary mb-1" type="button"
              @click="login()">
              <span>登入帳戶</span>
              <i class="bi bi-box-arrow-in-right ms-2"></i>
            </button>
            <RouterLink to="/" class="link-primary fs-7 text-center">忘記密碼 ?</RouterLink>
          </div>
       </form>
       <!-- Under Line -->
       <div class="w-100 position-relative">
        <hr class="w-100">
        <span class="fs-7 text-db-gray bg-body px-3 position-absolute top-50
         start-50 translate-middle">或者</span>
       </div>
       <!-- Other Auther -->
       <div class="d-grid gap-2 mt-2 mb-3 w-100" style="background: #FBFCFF;">
          <button class="btn border d-flex justify-content-center align-items-center" type="button">
            <img src="../../assets/Google-icon.png" class="d-inline rounded-circle me-2 "
             alt="google" width="20">
            <span>使用 Google</span>
          </button>
        </div>
       <div class="d-grid gap-2 w-100">
          <button class="btn border d-flex justify-content-center align-items-center" type="button">
            <img src="../../assets/FB-icon.png" class="d-inline rounded-circle me-2 "
             alt="google" width="20s">
            <span>使用 Facebook</span>
          </button>
        </div>
     </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const { VITE_APP_API_URL } = import.meta.env;
const router = useRouter();

const user = ref({
  username: '',
  password: '',
});

function login() {
  axios.post(`${VITE_APP_API_URL}/v2/admin/signin`, user.value)
    .then((res) => {
      // 取出 token expired 並存入至 cookie
      const { token, expired: expires } = res.data;
      document.cookie = `token=${token}; expires=${expires}; path=/`;

      alert(res.data.message);
      router.push('/admin/products');
    }).catch((err) => alert(err.response.data.message));
}
</script>

<style lang="scss" scoped>
// .login-input:focus {
//   border-color: #86b7fe;
//   outline: 0;
//   box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
// }

// .form-control:focus {
//   box-shadow: 0 0 0 0.25 rgba(0, 0, 0) !important;
// }
// .login .form input {
// }
</style>
