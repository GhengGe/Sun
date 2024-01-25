<script setup>
import Layout from './layout/index.vue'
</script>

<template>
  <div>
    侧边栏
  </div>
  <Layout>
    <template v-slot:header>
      <div>
        头部
      </div>
    </template>
    <template v-slot:main>
      主体
    </template>
  </Layout>
</template>

<style scoped>
</style>
