<template>
  <div class="about">
    <h1>This is an about page</h1>
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>
<script>
/* eslint-disable */
import { Header } from 'mint-ui'

export default {
    name: 'Hi',
    components: {
        'mt-header': Header
    },
    data () {
        return {
        }
    }
}
</script>

<style scoped>
</style>
