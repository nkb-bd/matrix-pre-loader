<template>
    <div id="matrixloader_app">
        <div class="matrixloader_main_nav">
            <div class="topnav">
                <router-link v-for="menuItem in topMenus" :key="menuItem.route" active-class="ninja-tab-active" exact :class="['ninja-tab']" :to="{ name: menuItem.route }">
                    {{ menuItem.title }}
                </router-link>
            </div>

        </div>
       <router-view></router-view>
    </div>
</template>

<script>
  export default {
      name: 'AdminApp',
      data() {
          return {
              topMenus: []
          }
      },
      methods: {
          setTopmenu() {
              this.topMenus = this.applyFilters('matrixloader_top_level_menu', [
                  {
                      route: 'dashboard',
                      title: 'Matrix Pre Loader Setting'
                  },
                  {
                      route: 'extra',
                      title: 'Extra'
                  }
              ])
          }
      },
      mounted() {
          this.setTopmenu();
      }
  }
</script>
<style>
    .topnav a.ninja-tab-active {
        color: #fff!important;
        background-color: #0172aa!important;
        border-bottom: 2px solid #0172aa!important;
    }
</style>
