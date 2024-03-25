<template>
  <div class="d-flex justify-content-between align-items-center mb-3">
    <!-- Pagination -->
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{'disabled': pages.current_page === 1}">
          <a class="page-link text-bg-db-dark" href="#"
          @click.prevent="getProducts(1)">首頁</a>
        </li>
        <li class="page-item" v-for="page in pages.total_pages" :key="page + 123">
          <a class="page-link text-bg-db-dark" href="#"
            :class="[{'active': pages.current_page === page},
            {'bs-pointer-none': pages.current_page === page}]"
            @click.prevent="getProducts(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{'disabled': pages.current_page === pages.total_pages}">
          <a class="page-link text-bg-db-dark" href="#"
          @click.prevent="getProducts(pages.total_pages)">尾頁</a>
        </li>
      </ul>
    </nav>

    <!-- add BS-Modal-btn -->
    <button type="button" class="btn btn-db-primary px-4 d-flex align-items-center"
      @click="openModal('create')">
      <i class="bi bi-cart-plus me-2"></i>
      <span>新增產品</span>
    </button>
  </div>

  <div class="bg-db-dark rounded-4 px-5 py-4">
    <table class="table table-db-dark table-hover align-middle">
      <thead>
        <tr>
          <th scope="col">項次</th>
          <th scope="col">名稱</th>
          <th scope="col">類別</th>
          <th scope="col">原價</th>
          <th scope="col">售價</th>
          <th scope="col">是否啟用</th>
          <th scope="col" class="text-center">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="product.id">
          <th scope="row" class="ps-3">{{ ++index }}</th>
          <td>{{ product.title }}</td>
          <td>{{ product.category }}</td>
          <td>$ {{ product.origin_price }}</td>
          <td>$ {{ product.price }}</td>
          <td>
            <span v-if="product.is_enabled" class="text-success fw-bold">已啟用</span>
            <span v-else class="text-danger fw-bold">未啟用</span>
          </td>
          <td  class="text-center">
            <button type="button" class="btn btn-outline-db-primary py-1 fw-bold me-2 my-1"
              @click="openModal('edit', product)">編輯</button>
            <button type="button" class="btn btn-outline-danger py-1 fw-bold"
            @click="delProduct(product.id)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Modal HTML -->
  <div class="modal fade" id="productModal" tabindex="-1"
      aria-labelledby="exampleModalLabel" aria-hidden="true" ref="refProductModal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">

          <div class="modal-header bg-db-dark text-db-secondary">
            <h5 class="modal-title" id="exampleModalLabel">新增產品</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
            aria-label="Close"></button>
          </div>

          <div class="modal-body py-4">
            <div>

              <div class="list-group flex-row border-bottom" id="list-tab" role="tablist">
                <a class="list-group-item border rounded-1 active"
                  id="list-content-list" data-bs-toggle="list" href="#list-content" role="tab"
                  aria-controls="list-content" @click.prevent="changeModControl('modContent')">
                  <div class="d-flex align-items-center"
                    :class="{'text-black-50': modControl[0].status === false}">
                    <i class="bi bi-pencil-square me-1"></i>內容
                  </div>
                </a>
                <a class="list-group-item border rounded-1"
                  id="list-image-list" data-bs-toggle="list" href="#list-image" role="tab"
                  aria-controls="list-image" @click.prevent="changeModControl('modImage')">
                  <div class="d-flex align-items-center"
                    :class="{'text-black-50': modControl[1].status === false}">
                    <i class="bi bi-image me-1"></i>圖片
                  </div>
                </a>
              </div>

              <div class="tab-content py-4" id="nav-tabContent">
                <div class="tab-pane fade show active" id="list-content" role="tabpanel"
                aria-labelledby="list-content-list">
                  <form>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon2"
                      style="width: 90px;"><p class="mx-auto">標題</p></span>
                      <input type="text" class="form-control" placeholder="請輸入產品標題"
                       aria-label="Recipient's username" aria-describedby="basic-addon2"
                       v-model="tempProduct.title">
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="input-group mb-3">
                          <span class="input-group-text" id="basic-addon2"
                          style="width: 90px;"><p class="mx-auto">類別</p></span>
                          <input type="text" class="form-control" placeholder="請輸入產品類別"
                          aria-label="Recipient's username" aria-describedby="basic-addon2"
                          v-model="tempProduct.category">
                        </div>
                      </div>
                      <div class="col">
                        <div class="input-group mb-3">
                          <span class="input-group-text" id="basic-addon2"
                          style="width: 90px;"><p class="mx-auto">單位</p></span>
                          <input type="text" class="form-control" placeholder="請輸入單位"
                          aria-label="Recipient's username" aria-describedby="basic-addon2"
                          v-model="tempProduct.unit">
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="input-group mb-3">
                          <span class="input-group-text" id="basic-addon2"
                          style="width: 90px;"><p class="mx-auto">原價</p></span>
                          <input type="number" class="form-control" placeholder="請輸入原價"
                          aria-label="Recipient's username" aria-describedby="basic-addon2"
                          v-model.number="tempProduct.origin_price">
                        </div>
                      </div>
                      <div class="col">
                        <div class="input-group mb-3">
                          <span class="input-group-text" id="basic-addon2"
                          style="width: 90px;"><p class="mx-auto">售價</p></span>
                          <input type="number" class="form-control" placeholder="請輸入售價"
                          aria-label="Recipient's username" aria-describedby="basic-addon2"
                          v-model.number="tempProduct.price">
                        </div>
                      </div>
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon2"
                      style="width: 90px;"><p class="mx-auto">產品描述</p></span>
                      <textarea class="form-control" aria-label="With textarea" rows="3"
                        placeholder="產品相關描述"
                        v-model="tempProduct.description"></textarea>
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon2"
                      style="width: 90px;"><p class="mx-auto">產品內容</p></span>
                      <textarea class="form-control" aria-label="With textarea" rows="3"
                        v-model="tempProduct.content"></textarea>
                    </div>
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" role="switch"
                        id="flexSwitchCheckDefault" :true-value="1" :false-value="0"
                        v-model="tempProduct.is_enabled">
                      <label class="form-check-label" for="flexSwitchCheckDefault">
                        是否啟用</label>
                    </div>
                  </form>
                </div>

                <div class="tab-pane fade" id="list-image" role="tabpanel"
                  aria-labelledby="list-image-list">
                  <div class="row">
                    <div class="col-6">
                      <h4 class="mb-3">主圖設置🔗</h4>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon2">網址</span>
                        <input type="text" class="form-control" placeholder="請輸入圖片網址"
                          aria-label="Recipient's username" aria-describedby="basic-addon2"
                          v-model="tempProduct.imageUrl"
                          :disabled="modControl[1].edit === false">
                        <button type="button" class="input-group-text d-flex
                          btn btn-sm btn-outline-success rounded-end"
                          v-if="modControl[1].edit === false"
                          @click="modControl[1].edit = true">
                          <i class="bi bi-pen fs-5"></i>
                        </button>
                        <button type="button" class="input-group-text d-flex
                          btn btn-sm btn-outline-success rounded-end"
                          v-else
                          @click="modControl[1].edit = false">
                          <i class="bi bi-floppy fs-5"></i>
                        </button>
                        <img :src="tempProduct.imageUrl" class="mt-3 img-fluid" alt="">
                      </div>
                    </div>
                    <div class="col-6">
                      <h4 class="mb-3">多圖設置🔗</h4>
                      <div class="d-flex flex-column justify-content-center
                        align-items-center h-100">
                        <h2 class="mb-3">(っ °Д °;)っ</h2>
                        <p class="h2">內容建構中...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-outline-db-dark"
              data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-db-primary text-db-dark"
              @click="updateProduct(tempProduct.id)">儲存</button>
          </div>

        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import Modal from 'bootstrap/js/dist/modal';

const { VITE_APP_API_URL, VITE_APP_API_PATH } = import.meta.env;
const router = useRouter();

const products = ref([]);
const tempProduct = ref({});
const pages = ref({
  current_page: null,
  has_next: null,
  has_pre: null,
  total_page: null,
});
const refProductModal = ref(null);
const useModal = ref(null);
const isNew = ref(true);

function getProducts(page = 1) { // 取得產品列表
  axios.get(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_PATH}/admin/products/?page=${page}`)
    .then((res) => {
      products.value = res.data.products;
      pages.value = res.data.pagination;
    }).catch((err) => alert(err.response.data.message));
}

function checkAdmin() { // 驗證登入
  axios.post(`${VITE_APP_API_URL}/v2/api/user/check`)
    .then(() => getProducts())
    .catch((err) => {
      alert(err.response.data.message);
      router.push('/login');
    });
}

function updateProduct(productID) { // 新增、更新產品 POST PUT
  let methods = 'post';
  let url = `${VITE_APP_API_URL}/v2/api/${VITE_APP_API_PATH}/admin/product`;

  if (isNew.value === false) {
    methods = 'put';
    url = `${VITE_APP_API_URL}/v2/api/${VITE_APP_API_PATH}/admin/product/${productID}`;
  }

  axios[methods](url, { data: tempProduct.value })
    .then((res) => {
      alert(res.data.message);
      getProducts();
      useModal.value.hide();
    })
    .catch((err) => alert(err.data.message));
}

function delProduct(productID) { // 刪除產品
  axios.delete(`${VITE_APP_API_URL}/api/${VITE_APP_API_PATH}/admin/product/${productID}`)
    .then((res) => {
      alert(res.data.message);
      getProducts();
    })
    .catch((err) => alert(err.data.message));
}

onMounted(() => { // 存入 Cookie
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
  axios.defaults.headers.common.Authorization = token;
  checkAdmin();

  useModal.value = new Modal(refProductModal.value);
});

const modControl = ref([ // 控制 modal 內的導覽樣式
  {
    id: 'modContent',
    status: true,
  },
  {
    id: 'modImgae',
    status: false,
    edit: false,
    loading: false,
  },
]);

function openModal(status, product) { // Modal 開啟控制
  if (status === 'create') {
    isNew.value = true;
    tempProduct.value = {};
    useModal.value.show();
  } else if (status === 'edit') {
    isNew.value = false;
    tempProduct.value = { ...product };
    useModal.value.show();
  }
}

function changeModControl(mod) { // 內層 modContro 樣式切換
  if (mod === 'modContent') {
    modControl.value[0].status = true;
    modControl.value[1].status = false;
  } else {
    modControl.value[1].status = true;
    modControl.value[0].status = false;
  }
}
</script>

<style lang="scss" scoped>
// === Color Variable ===
$db-primary: #ffcd39;
$dark: #212529;

// === Cover BS-Pagination CSS Style ===
.page-item {
  &.disabled {
    opacity: 0.7;
  }
}
.page-link {
  &:hover, &.active {
    background-color:  $db-primary !important;
    border-color: $db-primary !important;
    color: $dark !important;
  }
}

// === Cover BS-List-Group CSS Style ===
.list-group-item {
  &.active {
    background-color: $db-primary !important;
    color: $dark !important;
  }
}
</style>
