<template>
  <!-- Nav 導覽列 -->
  <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary border-bottom">
    <div class="container">
      <!-- LOGO -->
      <RouterLink class="navbar-brand" to="/home">彼恩斯咖啡</RouterLink>

      <!-- 漢堡選單 -->
      <div class="d-flex align-items-center">
        <i class="bi bi-cart3 fs-4 me-3 d-lg-none"></i>
        <button class="navbar-toggler my-1" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <!-- 左側 Search 按鈕 -->
        <button type="button" class="btn btn-outline-primary rounded-1 ps-2 pe-5 d-none d-lg-block"
          data-bs-toggle="modal" data-bs-target="#searchModal">
          <i class="bi bi-search me-2"></i>
          <span>搜尋</span>
        </button>

        <!-- 右側功能選單 -->
        <div class="ms-auto d-flex flex-column flex-lg-row align-items-center">
          <ul class="navbar-nav mb-2 mb-lg-0 w-100">
            <li class="nav-item">
              <RouterLink to="/home" class="nav-link px-3 active border" aria-current="page">
                <i class="bi bi-house-fill me-2 d-lg-none"></i>
                <span>首頁</span></RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/" class="nav-link px-3 border" aria-current="page">
                <i class="bi bi-cup-fill me-2 d-lg-none"></i>
                <span>商品</span>
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/" class="nav-link px-3 border" aria-current="page">
                <i class="bi bi-lightbulb-fill me-2 d-lg-none"></i>
                <span>關於我們</span>
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/" class="nav-link px-3 border" aria-current="page">
                <i class="bi bi-question-circle-fill me-2 d-lg-none"></i>
                <span>FQA</span>
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/" class="nav-link px-3 border" aria-current="page">
                <i class="bi bi-telephone-fill me-2 d-lg-none"></i>
                <span>聯絡我們</span>
              </RouterLink>
            </li>
          </ul>
          <span class="px-3 d-none d-lg-block">|</span>
          <div class="d-none d-lg-block">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink to="/" class="nav-link px-3 active" aria-current="page">
                  <i class="bi bi-suit-heart fs-5"></i>
                </RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/" class="nav-link px-3 active" aria-current="page">
                  <i class="bi bi-cart3 fs-5"></i>
                </RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/login" class="nav-link px-3 active" aria-current="page">
                  <i class="bi bi-person-circle fs-5"></i>
                </RouterLink>
              </li>
            </ul>
          </div>
          <RouterLink to="/login" class="btn btn-primary w-100 d-lg-none mt-4
            d-flex align-items-center justify-content-center">
            <i class="bi bi-person-circle fs-4 me-3"></i>
            <span class="fs-5">用戶登入</span>
          </RouterLink>
        </div>

      </div>
    </div>
  </nav>

  <!-- 內容 -->
  <main class="main">
    <RouterView></RouterView>
  </main>

  <!-- Footer 表尾 -->
  <footer class="footer bg-primary py-5">
    <div class="container">
      <div class="row align-items-center">
        <!-- 社群分享 -->
        <div class="col-12 col-lg-4 order-lg-last">
          <div class="footer-community d-flex flex-column align-items-center mb-5 mb-lg-0">
            <h3 class="fs-4 text-light mb-1">社群分享</h3>
            <p class="text-light mb-4">分享您的消息並告訴我們</p>
            <ul class="d-flex">
              <li class="mx-1"><a href="#"><i class="bi bi-github icon"></i></a></li>
              <li class="mx-1"><a href="#"><i class="bi bi-twitter icon"></i></a></li>
              <li class="mx-1"><a href="#"><i class="bi bi-instagram icon"></i></a></li>
              <li class="mx-1"><a href="#"><i class="bi bi-youtube icon"></i></a></li>
            </ul>
          </div>
        </div>
        <!-- 聯絡資訊 -->
        <div class="col-12 col-lg-4">
          <div class="footer-contact order-lg-first py-5 py-lg-0 border-top border-bottom
          border-lg-0">
            <ul>
              <li class="item d-flex align-items-center mb-3 mx-auto mx-lg-0">
                <i class="bi bi-telephone text-light me-2"></i>
                <a href="tel:+123-456-789" class="text-light">電話 : (+886) 123-456-789</a>
              </li>
              <li class="item d-flex align-items-center mx-auto mx-lg-0">
                <i class="bi bi-geo-alt text-light me-2"></i>
                <p class="text-light">地址 : 台北市萬里區長山路2130號</p>
              </li>
            </ul>
          </div>
        </div>
        <!-- © Copyright -->
        <div class="col-12 col-lg-4">
          <div class="footer-copy px-4 pt-5 p-lg-0 text-center">
            <h2 class="fs-2 text-light d-none d-lg-block mb-2">彼恩斯咖啡</h2>
            <p class="text-light fs-7">© Copyright 2023 本網站僅個人練習作品，非商業用途</p>
          </div>
        </div>

      </div>
    </div>
  </footer>

  <!-- Search Modal -->
  <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body bg-body-tertiary shadow-sm rounded">
          <form class="d-flex position-relative" role="search">
            <img src="../assets/search-icon.svg" alt="search" width="24" class="ms-3 fs-4
              text-primary position-absolute top-50 start-0 translate-middle-y">
            <input class="form-control ps-6 fs-4 py-3 border border-primary border-2"
             type="search" placeholder="Search Products..." aria-label="Search">
          </form>
        </div>
        <div class="modal-footer py-2">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chance</button>
          <button type="button" class="btn btn-primary">Search</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style lang="scss" scoped>

$primary: #5d4037;

// <=== Main CSS Start ===>

.main {
  margin-top: 64px;
}

// <=== Main CSS End ===>

// <=== Footer CSS Start ===>

.footer {
  &-community .icon {
    width: 40px;
    height: 40px;
    border: 2px solid #fff;
    border-radius: 50%;
    color: #fff;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-contact .item {
    max-width: 270px;
  }
}

// <=== Footer CSS End ===>

</style>
