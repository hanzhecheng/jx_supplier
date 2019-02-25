<template>
  <div class="hb_layout">

    <Head></Head>
    <div class="layout_container">
      <div class="layout_aside">
        <el-menu :default-active="this.$route.path" router unique-opened textColor="#666" activeTextColor="#999" backgroundColor="#fff">
          <Aside :routers="routers"></Aside>
        </el-menu>
      </div>
      <div class="layout_main">
        <div class="layout_main_bread">
          <!-- <BreadCrumb :matchRouter="matchRouter"></BreadCrumb> -->
          <MenuTag></MenuTag>
        </div>
        <keep-alive>
          <nuxt/>
        </keep-alive>

      </div>
    </div>

  </div>
</template>

<script>
const Head = () => import('@/layouts/Base/Head')
const Aside = () => import('@/layouts/Base/Aside')
const BreadCrumb = () => import('@/layouts/Base/BreadCrumb')
const MenuTag = () => import('@/layouts/Base/MenuTag')
export default {
  name: 'Layout',
  data() {
    return {
      centerDialogVisible: false
    }
  },
  components: {
    Head,
    Aside,
    BreadCrumb,
    MenuTag
  },
  computed: {
    routers() {
      let router = this.$router.options.routes.filter(item => {
        if (item.children && item.children.length) {
          item.children = item.children.filter(item => {
            return !item.hidden
          })
        }
        return !item.hidden
      })
      return router
    },
    matchRouter() {
      let matched = this.$route.matched.filter(item => {
        return item.path !== ''
      })
      return matched
    },
    cacheView() {
      return this.$store.getters.cacheView
    }
  }
}
</script>
<style lang="scss" scoped>
.layout_container {
  display: flex;
  padding: 0 80px;
  margin-top: -10px;
  .layout_aside {
    width: 250px;
    background-color: #fff;
    max-height: 80vh;
    margin: 30px 20px 0 20px;
    border-radius: 5px;
    overflow-x: hidden;
    overflow-y: auto;
    box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.1);
    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .layout_main {
    flex: 1;
    width: 1140px;
    background-color: #999;
    height: 80vh;
    margin: 30px 20px 0 0;
    background-color: #f3f5fb;
    border-radius: 5px;
    box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.1);
    .layout_main_bread {
      background-color: #fff;
      padding: 0 10px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f3f3f3;
    }
  }
}
/deep/ .el-menu {
  width: 250px;
}
</style>




