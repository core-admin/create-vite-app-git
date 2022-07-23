<template>
  <div class="space-x-4 flex">
    <div class="w-[100px] h-[100px] bg-orange-400"></div>
    <div class="w-[100px] h-[100px] bg-orange-400"></div>
    <div class="w-[100px] h-[100px] bg-orange-400"></div>
  </div>

  <div class="mt-4">
    <a-button type="primary">
      <template #icon>
        <SearchOutlined />
      </template>
      Search
    </a-button>
  </div>

  <!-- eslint-disable-next-line vue/valid-v-model -->
  <Modal v-model:visible="visible">
    <a-button type="primay">哈哈</a-button>
  </Modal>
</template>

<script setup lang="ts">
  import { Modal } from 'ant-design-vue';
  import { SearchOutlined } from '@ant-design/icons-vue';
  import { ref } from 'vue';
  const visible = ref(true);
</script>
