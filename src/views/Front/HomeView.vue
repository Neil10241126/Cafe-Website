<template>
  <!-- Index-Banner -->
  <div class="index-banner d-flex align-items-center">
    <div class="container">
      <div>
        <p class="fs-7 fs-lg-4 text-light mb-1">喚醒你的能量</p>
        <h2 class="fs-5 fs-lg-1 text-light mb-1">享受一杯美好的時光</h2>
        <p class="fs-lg-2 text-light mb-4 mb-lg-6">你所需要的，都在這裡</p>
        <button class="btn btn-light fs-lg-5 px-lg-4">立刻選購</button>
      </div>
    </div>
  </div>

  <!-- Index-About -->
  <div class="index-about py-7">
    <div class="container">
      <div class="row">

        <div class="col-12">
          <div class="about-img"></div>
        </div>

        <div class="col-12">
          <div class="about-content">
            <div class="mb-5">
              <p class="mb-1">關於我們</p>
              <h2 class="fs-4">新創領導品牌，放心照顧你的味蕾。</h2>
            </div>
            <div class="d-flex">
              <img src="../../assets/img/index-about-right-1-sm.webp" alt="index-about-right-1"
                >
              <p class="fs-7">我們是來自一群熱情的咖啡夥伴，不僅是咖啡師，更像是藝術家，從生豆挑選、
                到熟豆烘焙、最後風味提煉，享受著調製的每個過程，讓不同的咖啡豆都有著不同的特色。</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- Index-Service -->

  <!-- Index-Recommend -->
</template>

<script setup>
</script>

<style lang="scss" scoped>

// <=== Banner CSS Start ===>
.index-banner{
  min-height: 280px;
  background-image: url(../../assets/img/index-banner-sm.webp);
  background-position: center center;
  background-repeat: no-repeat;
  object-fit: cover;
}
@media (min-width: 576px) {
  .index-banner{
    min-height: 350px;
    background-image: url(../../assets/img/index-banner-md.webp);
  }
}

@media (min-width: 992px) {
  .index-banner{
    min-height: 530px;
    background-image: url(../../assets/img/index-banner.webp);
  }
}
// <=== Banner CSS End ===>
</style>
