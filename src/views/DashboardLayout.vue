<template>
  <nav class="sidebar bg-db-dark" ref="sidebar">
    <!-- 導覽 LOGO -->
    <div class="header position-relative mb-5">
      <RouterLink to="/admin" class="d-flex align-items-center">
        <div class="image text-center">
          <i class="bi bi-microsoft fs-1 text-light"></i>
        </div>
        <transition name="v-fade">
          <div v-if="show" class="header-text text">
            <p class="name fs-5 fw-semibold text-light">Dashboard</p>
            <p class="fs-5 fw-medium text-light">Web developer</p>
          </div>
        </transition>
      </RouterLink>

      <!-- 摺疊 Button -->
      <button type="button" ref="toggleButton" class="btn btn-db-primary d-flex
        justify-content-center align-items-center rounded-circle position-absolute
        top-50 translate-middle"
        @click="toggleSidebar()">
        <i class="bi bi-arrow-right toggle"></i>
      </button>
    </div>

    <!-- 導覽列 -->
    <div class="menu-bar d-flex flex-column justify-content-between">
      <div class="menu">
        <ul class="nav nav-pills flex-column">
          <li class="nav-item mb-2">
            <RouterLink to="/admin/products" class="nav-link link-light px-0
              d-flex align-items-center">
              <span class="icon text-center">
                <i class="bi bi-bag-check icon fs-5"></i>
              </span>
              <transition name="v-fade">
                <div v-if="show" class="text w-100 d-flex justify-content-between">
                  <span>產品列表</span>
                  <i class="bi bi-chevron-right arrow-right text-dark me-4"></i>
                </div>
              </transition>
            </RouterLink>
          </li>
          <li class="nav-item mb-2">
            <RouterLink to="/admin/orders" class="nav-link px-0 link-light
              d-flex align-items-center">
              <span class="icon text-center">
                <i class="bi bi-card-checklist icon fs-5"></i>
              </span>
              <transition name="v-fade">
                <div v-if="show" class="text w-100 d-flex justify-content-between">
                  <span>訂單列表</span>
                  <i class="bi bi-chevron-right arrow-right text-dark me-4"></i>
                </div>
              </transition>
            </RouterLink>
          </li>
          <li class="nav-item mb-2">
            <RouterLink to="/admin/coupons" class="nav-link px-0 link-light
              d-flex align-items-center">
              <span class="icon text-center">
                <i class="bi bi-ticket-perforated icon fs-5"></i>
              </span>
              <transition name="v-fade">
                <div v-if="show" class="text w-100 d-flex justify-content-between">
                  <span>優惠券列表</span>
                  <i class="bi bi-chevron-right arrow-right text-dark me-4"></i>
                </div>
              </transition>
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="menu-bottom">
        <ul class="nav nav-pills flex-column">
          <li class="nav-item mb-2">
              <a href="#" class="nav-link px-0 link-light d-flex align-items-center"
                @click.prevent="logout()">
                <span class="icon text-center">
                  <i class="bi bi-box-arrow-in-left icon fs-5"></i>
                </span>
                <transition name="v-fade">
                  <div v-if="show" class="text w-100 d-flex justify-content-between">
                    <span>登出</span>
                    <i class="bi bi-chevron-right arrow-right text-dark me-4"></i>
                  </div>
                </transition>
              </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main class="main bg-dark vh-100" ref="main">
    <div class="container-fluid">
      <div class="main-header bg-db-dark py-2 d-flex align-items-center justify-content-between">
        <div class="main-text d-flex align-items-center">
          <span class="fs-5 text-db-gray">後台管理</span>
          <i class="bi bi-chevron-double-right text-db-gray mx-2 fs-7"></i>
          <span v-if="route.name === 'Admin'" class="fs-5 text-light"></span>
          <span v-else-if="route.name === 'AdminProducts'" class="fs-5 text-light">產品列表</span>
          <span v-else-if="route.name === 'AdminOrders'" class="fs-5 text-light">訂單列表</span>
          <span v-else-if="route.name === 'AdminCoupons'" class="fs-5 text-light">優惠券列表</span>
        </div>
        <div class="main-user">
          <div class="dropdown">
            <button class="btn btn-db-dark dropdown-toggle d-flex align-items-center" type="button"
             id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <img class="person-img rounded-circle me-3" src="../assets/person.jpg"
               alt="person" width="40">
              <span>Neil Liu</span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Action</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid px-5 py-5 bg-dark">
      <div class="main-content">
        <RouterView></RouterView>
      </div>
    </div>
  </main>

</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const { VITE_APP_API_URL } = import.meta.env;
const route = useRoute();
const router = useRouter();

// toggle Button use
const sidebar = ref(null); // sidebar DOM
const main = ref(null); // main DOM
const toggleButton = ref(null); // toggleButton DOM
const show = ref(true);

function toggleSidebar() {
  sidebar.value.classList.toggle('close');
  main.value.classList.toggle('close');
  show.value = !show.value;
}

function logout() { // 登出
  axios.post(`${VITE_APP_API_URL}/v2/logout`)
    .then(() => {
      alert('登出成功');
      router.push('/');
    }).catch((err) => alert(err.response.data.message));
}

</script>

<style scoped lang="scss">
// === Color Variable ===
$db-primary: #FFCD39;
$dark: #212529;

// === V-Animation : Fade Toggle start ===
// Vue 動畫組件 : https://cn.vuejs.org/guide/built-ins/transition.html#the-transition-component
.v-fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.3s ease;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
// ===  V-Animation : Fade Toggle end ===

// === Rotate Toggle Start ===
.sidebar .toggle {
  transition: all 0.3s;
}

.sidebar.close .toggle {
  transform: rotate(180deg);
}
// === Rotate Toggle End ===

// === Component CSS ===
.sidebar {
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding: 12px 14px;
  transition: all 0.5s;
  z-index: 2000;

  .image, .icon {
    min-width: 60px;
  }

  .header button {
    width: 30px;
    height: 30px;
    right: -44px;
  }

  .menu-bar {
    height: calc(100% - 108px);
    .menu a, .menu-bottom a {
      // --bs-nav-pills-link-active-bg: #FFCD39;
      .arrow-right {
        transition: all 0.3s;
        opacity: 0;
      }
      &:hover {
        background-color: $db-primary;
        .arrow-right {
          margin-right: 10px !important;
          opacity: 1;
        }
      }
    }
  }
}

.sidebar.close {
  width: 88px;
}

.sidebar .text {
  white-space: nowrap;
}

// === Main CSS ===
.main {
  margin-left: 250px;
  transition: all 0.5s;
}
.main-header {
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100% - 250px);
  z-index: 1000;
  padding: 0 32px;
  transition: all 0.5s;
}

.main.close {
  margin-left: 88px;
  .main-header {
    width: calc(100% - 88px);
  }
}
.main .main-content {
  margin-top: 70px;
  // height: calc(100vh - 102px);
}

// === Cover BS-Nav CSS Style ===
.nav-pills .nav-link.active {
  color: $dark !important;
  background: $db-primary !important;
}

.link-light:hover {
  color: $dark !important;
}

</style>
