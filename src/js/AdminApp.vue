<template>
    <div id="matrixloader_app">
        <div class="matrixloader_main_nav">
            <div class="topnav">
                <router-link v-for="menuItem in topMenus" :key="menuItem.route" active-class="ninja-tab-active" exact :class="['ninja-tab']" :to="{ name: menuItem.route }">
                    {{ menuItem.title }}
                </router-link>
                <el-popover
                        placement="top-start"
                        title="Let us know what you think"
                        width="200"
                        trigger="hover"
                        content="Do leave a review if you liked it or you can help me to improve the plugin">
                    <el-button slot="reference" @click="redirectTo" href="https://wordpress.org/plugins/matrix-pre-loader/#reviews" style="padding:2px;float:right;margin-right: 20px" >
                        <img style="max-width: 40px" :src="mainLogo">
                    </el-button>
                </el-popover>


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
              topMenus: [],
              mainLogo:'',
              pluginLink:'https://wordpress.org/plugins/matrix-pre-loader/#reviews'
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


          },
          redirectTo(){
              window.open(this.pluginLink, "_blank");
          }
      },
      mounted() {
          this.setTopmenu();
          this.$adminGet({
              route: "get_main_icon_svg"
          }).then((data)=>{

              console.log(data)
              console.log(data.data)
              this.mainLogo = data.data;

              }
          )
      }
  }
</script>
<style>
    .topnav a.ninja-tab-active {
        color: #fff!important;
        background-color: #0172aa!important;
        border-bottom: 2px solid #0172aa!important;
    }
    .matrixloader_main_nav{
        width: 100%;
    }
    #matrixloader_app{
        margin-left: -20px;
    }
    .matrix-card{
        margin: 20px;
    }
</style>
