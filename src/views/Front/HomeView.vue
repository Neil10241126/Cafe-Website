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
      <div class="row gy-5">

        <!-- image-group -->
        <div class="col-12 col-lg-6">
          <div class="image-group h-100">
            <div class="row g-2 h-100">
              <div class="col">
                <div class="img-item h-100">
                  <img src="../../assets/img/index-about-left-1.webp" alt="index-about-left-1"
                  class="object-fit-cover mb-2" style="height: calc((100% - 8px) * 2 / 3)">
                  <img src="../../assets/img/index-about-left-3.webp" alt="index-about-left-3"
                  class="object-fit-cover w-100"
                  style="height: calc((100% - 8px) * 1 / 3)">
                </div>
              </div>
              <div class="col">
                <div class="img-item h-100">
                  <img src="../../assets/img/index-about-left-2.webp" alt="index-about-left-2"
                  class="w-100 object-fit-cover mb-2"
                  style="height: calc((100% - 8px) * 1 / 3)">
                  <img src="../../assets/img/index-about-left-4.webp" alt="index-about-left-4"
                  class="object-fit-cover" style="height: calc((100% - 8px) * 2 / 3)">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- about-content -->
        <div class="col-12 col-lg-6">
          <div class="about-content d-flex flex-column">

            <!-- about text -->
            <div class="mb-5 text-md-center text-lg-start">
              <p class="mb-1">關於我們</p>
              <h2 class="fs-4">新創領導品牌，放心照顧你的味蕾。</h2>
            </div>

            <!-- about card -->
            <div class="card border-0">
              <div class="row g-0 align-items-center">
                <div class="col-sm-5">
                  <img src="../../assets/img/index-about-right-1-sm.webp"
                   class="img-fluid h-100 object-fit-cover" alt="index-about-right-1"
                   >
                </div>
                <div class="col-sm-7">
                  <div class="card-body pe-sm-0 py-sm-0">
                    <p class="card-text fs-md-7">我們是來自一群熱情的咖啡夥伴，不僅是咖啡師，更像是藝術家，從生豆挑選、
                到熟豆烘焙、最後風味提煉，享受著調製的每個過程，讓不同的咖啡豆都有著不同的特色。</p>
                  </div>
                </div>
              </div>
            </div>
            <hr class="my-5 my-md-3">
            <div class="card border-0">
              <div class="row g-0 flex-sm-row-reverse align-items-center">
                <div class="col-sm-5">
                  <img src="../../assets/img/index-about-right-2-sm.webp"
                   class="img-fluid h-100 object-fit-cover" alt="index-about-right-2"
                   >
                </div>
                <div class="col-sm-7">
                  <div class="card-body ps-sm-0 py-sm-0">
                    <p class="card-text fs-md-7">彼恩斯提供優質的咖啡豆給每一位顧客，生豆產地來自各地
                      ，包含斯里蘭卡、衣索比亞、非洲、巴拿馬等，我們也提供專門的配方豆，從淺烘焙、中烘焙、到重烘焙，滿足不同口味需求。</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mx-auto mt-3 mt-sm-5">
              <RouterLink to="#" class="btn btn-primary rounded-0">了解更多</RouterLink>
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
