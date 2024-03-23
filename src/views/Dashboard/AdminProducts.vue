<template>
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
            <button type="button" class="btn btn-outline-db-primary py-1 fw-bold me-2 my-1">
              編輯</button>
            <button type="button" class="btn btn-outline-danger py-1 fw-bold">
              刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const { VITE_APP_API_URL, VITE_APP_API_PATH } = import.meta.env;
const router = useRouter();

const products = ref([]);

const getProducts = () => {
  axios.get(`${VITE_APP_API_URL}/v2/api/${VITE_APP_API_PATH}/admin/products`)
    .then((res) => {
      products.value = res.data.products;
      console.log(products.value);
    }).catch((err) => alert(err.response.data.message));
};

const checkAdmin = () => {
  axios.post(`${VITE_APP_API_URL}/v2/api/user/check`)
    .then(() => getProducts())
    .catch((err) => {
      alert(err.response.data.message);
      router.push('/login');
    });
};

onMounted(() => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
  axios.defaults.headers.common.Authorization = token;
  checkAdmin();
});
</script>

<style lang="scss" scoped>
</style>
