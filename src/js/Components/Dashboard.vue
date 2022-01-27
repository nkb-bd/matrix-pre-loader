<template>
    <div>


        <el-card class="matrix-card" shadow="never">
            <el-container :class="formData.active== false?'matrix-admin-form inactive-pluign-matrixloader':'' ">

                    <el-col :span="13">
                        <div class="grid-content ">
                            <el-header>
                                <h2>Setup Your Preloader</h2>
                                    <el-switch @change="submitForm()"   v-model="formData.active"></el-switch>

                                     <span :class=" formData.active ==true ? 'active-matrix-preloader' :'inactive'">
                                        <span  v-if="!formData.active">In</span> Active
                                      </span>

                            </el-header>
                            <el-main>
                                <el-row>
                                    <el-form  hide-required-asterisk :model="formData"  ref="formData" class="matrix-admin-form" >
                                        <!-- tab start -->
                                        <!--                                        display location-->
                                        <el-tabs class="el-menu-vertical-demo" tabPosition="left" type="border-card">

                                            <el-tab-pane label="Location">
                                                <div class="tab-content">
                                                    <div class="tab-title">
                                                        Display Location
                                                    </div>
                                                    <div class="tab-body">
                                                       <!-- loader location -->
                                                        <el-form-item label="Location" prop="region">
                                                            <el-select v-model="formData.location" placeholder="Pre Loader Location">
                                                                <el-option  label="Full Webiste" value="full"></el-option>
                                                                <el-option label="Home Page" value="home"></el-option>
                                                                <el-option label="Front Page" value="front"></el-option>
                                                                <el-option label="Posts" value="post"></el-option>
                                                                <el-option label="Pages" value="page"></el-option>
                                                                <el-option label="Categories" value="category"></el-option>
                                                                <el-option label="Attachment" value="attachment"></el-option>
                                                                <el-option label="Error Page" value="error"></el-option>
                                                            </el-select>
                                                        </el-form-item>

                                                        <!-- loader show once per session -->
                                                         <el-form-item label="Show" prop="region">
                                                             <el-select v-model="formData.show_per_session" placeholder="">
                                                                 <el-option  label="Always" value="false"></el-option>
                                                                 <el-option label="Once Per Session" value="true"></el-option>

                                                             </el-select>
                                                         </el-form-item>

                                                        <!-- loader location exclude -->
                                                        <el-form-item label="Exclude Page/Post">
                                                            <el-switch v-model="excludeSwitch"></el-switch>

                                                            <el-select v-if="excludeSwitch==true" multiple v-model="formData.exclude" placeholder="Select">
                                                                <el-option-group
                                                                        v-for="group in options"
                                                                        :key="group.ID"
                                                                        :label="group.label">
                                                                    <el-option
                                                                            v-for="item in group.options"
                                                                            :key="item.ID"
                                                                            :label="item.post_title"
                                                                            :value="item.ID">
                                                                    </el-option>
                                                                </el-option-group>
                                                            </el-select>
                                                        </el-form-item>

                                                        <!-- loader close button-->
                                                        <el-form-item label="Show Close Button">
                                                            <el-switch v-model="formData.close_button_on"></el-switch>
                                                        </el-form-item>



                                                    </div>
                                                </div>
                                            </el-tab-pane>
                                            <el-tab-pane label="Icon">
                                                <div class="tab-content">
                                                    <div class="tab-title">
                                                        Loader Icon
                                                    </div>
                                                    <div class="tab-body">

                                                        <el-row>
                                                            <!--matrix style -->
                                                            <el-col :span="12">
                                                                <el-form-item label="Enable Matrix Style">
                                                                    <el-switch v-model="formData.matrix_style"></el-switch>
                                                                </el-form-item>
                                                            </el-col>
                                                            <!--loader delay -->

                                                            <el-col :span="12">
                                                                <el-form-item label="Delay Millisecond(s)">
                                                                    <el-input placeholder="20" type="number" v-model.number="formData.loader_delay">
                                                                        <template slot="append">ms</template>
                                                                    </el-input>
                                                                </el-form-item>
                                                            </el-col>

                                                        </el-row>



                                                        <!-- loader image or icon  -->
                                                        <el-form-item class="matrix-pre-loader-img-container" label="Pre Loader Image"  v-if="!this.formData.matrix_style">

                                                            <el-radio  v-model="formData.image" :key="img" :label="img" v-for="img in image_list" v-if=" img!='none' " @change="formData.custom_img=false">
                                                                <img class="img-holder-option" :class="{blurDiv:formData.custom_img}"   :src="img" alt="">
                                                            </el-radio>
                                                            <el-radio v-else   v-model="formData.image" :key="img" :label="img"" @change="formData.custom_img=false">
                                                               None
                                                            </el-radio>

                                                            <el-radio v-model="formData.custom_img" :label="true" @change="setCustomImg()" border>
                                                                Custom
                                                            </el-radio>

                                                            <div class="upload-box" v-if="formData.custom_img==true">
                                                                <el-button type="primary"
                                                                           plain
                                                                           size="small"
                                                                           @click="fileUpload()"
                                                                >Upload<i class="el-icon-upload"></i></el-button>
                                                                <div  v-if="dialogImageUrl!=''">

                                                                    <img class="img-holder"  :src="dialogImageUrl" alt="">

                                                                </div>
                                                            </div>
                                                        </el-form-item>

                                                        <!-- loader width and height -->
                                                        <el-row>
                                                            <el-col :span="12">
                                                                <el-form-item label="Image Width">
                                                                    <el-input  type="number" placeholder="100" v-model.number="formData.width">
                                                                        <template slot="append">px</template>
                                                                    </el-input>
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :span="12">
                                                                <div >
                                                                    <el-form-item label="Image Hight">

                                                                    <el-input placeholder="100" type="number" v-model.number="formData.height">
                                                                        <template slot="append">px</template>
                                                                    </el-input>
                                                                    </el-form-item>

                                                                </div>
                                                            </el-col>
                                                        </el-row>

                                                        <!-- loader BG Opacity -->

                                                        <el-col :span="24">

                                                        </el-col>







                                                    </div>
                                                </div>
                                            </el-tab-pane>
                                            <el-tab-pane label="Background">
                                                <div class="tab-content">
                                                    <div class="tab-title">
                                                        Loading Background
                                                    </div>
                                                    <div class="tab-body">


                                                        <!-- loader opacity -->
                                                        <el-form-item label="Background Opacity">
                                                            <div class="block">
                                                                <el-slider show-input :step="0.1" :max="1"  v-model.number="formData.opacity" :format-tooltip="formatTooltip">

                                                                </el-slider>
                                                            </div>
                                                        </el-form-item>


                                                        <!-- loader background color -->
                                                        <el-form-item class="" label="Background Color" v-if="!this.formData.matrix_style">
                                                            <el-color-picker v-model="formData.bgcolor"></el-color-picker>
                                                        </el-form-item>


                                                        <!-- loader background image -->

                                                        <el-form-item prop="bg_image" label="Background Image Url(click outside after inserting the link)" >
                                                            <el-input @change="checkImage()" @paste="checkImage()" v-model="formData.bg_image">
                                                                <template slot="append">
                                                                    <el-popover
                                                                            placement="top-start"
                                                                            title="Background Image"
                                                                            width="240"
                                                                            trigger="hover"
                                                                            content="You can add background image or keep it empty, if no image found this  will be skipped">
                                                                        <el-button slot="reference"> <i class="el-icon-info"></i></el-button>
                                                                    </el-popover>

                                                                </template>
                                                            </el-input>
                                                        </el-form-item>
                                                        <el-form-item v-if="validImage" label=" Image Preview" >
                                                            <img  style="max-height: 400px;"  :src="formData.bg_image" @error="invalidImage()">

                                                        </el-form-item>
                                                        <div v-else-if="formData.bg_image!==''">
                                                            <el-form-item>
                                                                <el-alert
                                                                        title="Please insert a valid image url or keep it empty"
                                                                        type="error">
                                                                </el-alert>
                                                            </el-form-item>
                                                        </div>


                                                    </div>
                                                </div>
                                            </el-tab-pane>
                                            <el-tab-pane label="Text">
                                                <div class="tab-content">
                                                    <div class="tab-title">
                                                       Loader Text
                                                    </div>
                                                    <div class="tab-body">
                                                        <!-- loader text -->

                                                        <el-form-item label="Loading text" prop="name">
                                                            <el-input v-model="formData.text"></el-input>
                                                        </el-form-item>

                                                        <!-- loader text size -->
                                                        <el-row>
                                                            <el-col :span="14">
                                                                <el-form-item label="Font Size">
                                                                    <el-input placeholder="20" type="number" v-model.number="formData.font_size">
                                                                        <template slot="append">px</template>
                                                                    </el-input>
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :span="10">
                                                                <el-form-item label="Font Color" >
                                                                    <el-color-picker v-model="formData.font_color"></el-color-picker>
                                                                </el-form-item>
                                                            </el-col>
                                                        </el-row>

                                                        <!-- loader text offset -->

                                                        <el-form-item label="Text Offset" >
                                                            <el-input  type="number" placeholder="45" v-model.number="formData.image_offset">
                                                                <template slot="append">px</template>
                                                            </el-input>
                                                        </el-form-item>






                                                    </div>
                                                </div>
                                            </el-tab-pane>

                                            <el-tab-pane label="Animation">
                                                <div class="tab-content">
                                                    <div class="tab-title">
                                                        Loading Animation
                                                    </div>
                                                    <div class="tab-body">
                                                        <!-- loader animation -->

                                                        <el-row>
                                                            <!--                                            animation-->
                                                            <el-col :span="24">
                                                                <el-form-item label="Loader Animate In">
                                                                    <el-select filterable clearable placeholder="none" type="text" v-model="formData.loader_animation_in">

                                                                          <el-option
                                                                                  v-for="item in animate_class_list_array"
                                                                                  :key="item"
                                                                                  :label="item"
                                                                                  :value="item">
                                                                          </el-option>

                                                                  </el-select>
                                                                </el-form-item>
                                                            </el-col>
                                                            <el-col :span="24">
                                                                <el-form-item label="Loader Animate Out">

                                                                  <el-select filterable clearable placeholder="none" type="text" v-model="formData.loader_animation_out">

                                                                          <el-option
                                                                                  v-for="item in animate_class_list_array"
                                                                                  :key="item"
                                                                                  :label="item"
                                                                                  :value="item">
                                                                          </el-option>

                                                                    </el-select>
                                                                </el-form-item>
                                                            </el-col>


                                                        </el-row>
                                                        <el-row>

                                                              <el-col :span="12">
                                                                  <el-form-item label="Text Animation">
                                                                      <el-select filterable clearable v-model="formData.text_animation_in" placeholder="Select">

                                                                              <el-option
                                                                                      v-for="item in animate_class_list_array"
                                                                                      :key="item"
                                                                                      :label="item"
                                                                                      :value="item">
                                                                              </el-option>

                                                                      </el-select>
                                                                  </el-form-item>
                                                              </el-col>

                                                              <el-col :span="12">
                                                                  <el-form-item label="Text Animation Type">
                                                                      <el-select filterable clearable v-model="formData.text_animation_in_type" placeholder="Select">

                                                                              <el-option  label="Reverse" value="reverse"></el-option>
                                                                              <el-option  label="Shuffle" value="shuffle"></el-option>
                                                                              <el-option  label="Sync" value="Sync"></el-option>
                                                                              <el-option  label="Sequence" value="sequence"></el-option>

                                                                      </el-select>
                                                                  </el-form-item>
                                                              </el-col>
                                                              <el-col>
                                                                  <el-form-item label="Text Animation Loop">
                                                                        <el-switch v-model="formData.text_animation_in_loop"></el-switch>
                                                                  </el-form-item>
                                                              </el-col>

                                                        </el-row>


                                                    </div>
                                                </div>
                                            </el-tab-pane>

                                        </el-tabs>





                                        <el-form-item style="padding: 10px 0px;">
                                            <el-button class="pull-right" type="primary"   @click="submitForm('formData')">Save</el-button>

                                        </el-form-item>
                                    </el-form>


                                </el-row>
                            </el-main>
                        </div>
                    </el-col>
                    <el-col :span="11">
                        <div class="grid-content matrix-preloader-preview-area">
                            <el-header>
                                <h2>Preview</h2>

                                <el-button @click="refreshFrame()"> Refresh</el-button>
                            </el-header>
                            <el-main>
                                <el-row>
                                    <el-card shadow="always">
                                        <iframe class="frame" width="100%" height="500rem" :src="iframe"></iframe>
                                    </el-card>
                                </el-row>
                            </el-main>
                        </div>
                    </el-col>



            </el-container>
        </el-card>

        <!-- example content end -->
    </div>
</template>
<script>
export default {
    name: 'Dashboard',
    data(){

        return {
            loaderActive: true,
            excludeSwitch: false,
            submitDisable:false,
            validImage : true,
            options: [],
            dialogVisible:false,
            dialogImageUrl:'',
            iframe:'',
            customImg:false,
            image_list:[],
            animate_class_list_array:[],
            animate_class_list:'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut',
            formData: {
                active:true,
                text: '',
                font_color:'',
                font_size: '',
                matrix_style: false,
                location: '',
                exclude:[],
                bgcolor: '',
                bg_image:'',
                opacity:0,
                image: '',
                width: '',
                height: '',
                loader_delay: '',
                wait_image: '',
                custom_img: '',
                image_offset: '',
                loader_animation_in: '',
                loader_animation_out: '',
                text_animation_in: '',
                text_animation_in_type: '',
                close_button_on:false,
                show_per_session:'',
                text_animation_in_loop:false,

            },


        }
    },
    methods: {
        checkImage(){
            this.validImage = true;

        },
        invalidImage(){
            this.validImage = false;
            return true;

        },

        setCustomImg(){
            this.formData.custom_img=true ;
            this.formData.image=this.dialogImageUrl;
        },
        formatTooltip(val) {
            return val ;
        },
        fileUpload(){
            if ( typeof wp !== 'undefined' && wp.media && wp.media.editor) {

                    wp.media.editor.send.attachment  = (props, attachment) =>   {
                        this.dialogImageUrl = wp.media.attachment(attachment.id).get("url");
                        if(this.dialogImageUrl!=''){
                            this.dialogVisible=true;
                            this.formData.image = this.dialogImageUrl;
                        }
                    };
                    wp.media.editor.open();
                    return false;
            }
        },
        refreshFrame(){

            var temp = this.iframe;
            this.iframe = '';
            setTimeout(()=>{
                this.iframe = temp;
            },5)
        },
        getData(){
            // loader settings data and image array
            this.$adminGet({
                route: "get_settings_data"
            }).then((data)=>{

                    this.formData.text = data.data.text;
                    this.formData.active = data.data.active;
                    this.loaderActive =  data.data.active;
                    this.formData.location = data.data.location;
                    this.formData.font_size = data.data.font_size;
                    this.formData.font_color = data.data.font_color;
                    this.formData.height = data.data.height;
                    this.formData.width = data.data.width;
                    this.formData.bgcolor = data.data.bgcolor;
                    this.formData.bg_image = data.data.bg_image;
                    if(data.data.bg_image!=''){
                        this.checkImage()
                    }
                    this.formData.opacity = parseFloat(data.data.opacity);


                this.options= [{
                    label: 'Pages',
                    options: data.data.pages_posts.pages
                },{
                    label: 'Posts',
                    options: data.data.pages_posts.posts
                }];
                this.formData.exclude = data.data.exclude
                if( data.data.exclude.length > 0){
                    this.excludeSwitch = true;
                }
                    this.formData.loader_delay = data.data.loader_delay;
                    this.formData.matrix_style =  (data.data.matrix_style == 'true') ? true : false;
                    this.formData.wait_image =  (data.data.wait_image == 'true') ? true : false;
                    this.image_list =data.data.image_list;
                    this.formData.image = data.data.image
                    this.formData.image_offset = data.data.image_offset
                    this.formData.custom_img= false;
                    this.formData.loader_animation_in=  data.data.loader_animation_in;
                    this.formData.loader_animation_out=  data.data.loader_animation_out;
                    this.formData.text_animation_in =  data.data.text_animation_in;
                    this.formData.text_animation_in_type =  data.data.text_animation_in_type;
                    this.formData.text_animation_in_loop =  data.data.text_animation_in_loop;
                    this.formData.close_button_on =  data.data.close_button_on;
                    this.formData.show_per_session =  data.data.show_per_session;


                if(data.data.custom_img=='true'){

                        this.formData.custom_img= true;

                        this.dialogVisible = true;
                        this.dialogImageUrl = data.data.image;

                    }
                    if(data.success != true){
                        this.$notify({
                            title: 'Error',
                            message: 'Something went wrong !',
                            type: 'error',
                            offset: 20
                        });


                    }

                }
            )

        },
        submitForm() {

            this.$adminPost({
                data: this.formData,
                route: "settings_data_submit"
            }).then((status)=>{

                    if(status.success == true){
                        this.$notify({
                            title: 'Success',
                            message: 'Setting Saved !',
                            type: 'success',
                            offset: 20
                        });
                    }else{
                        this.$notify({
                            title: 'Error',
                            message: 'Something went wrong !',
                            type: 'error',
                            offset: 20
                        });
                        console.log(status)

                    }
                }
            )

        },
    },
    mounted() {
        this.getData();
        this.iframe = window.matrixloaderAdmin.base_url;

        this.animate_class_list_array = this.animate_class_list.split(' ');

        this.$router.beforeEach((to, from, next) => {
            var self = this;
            if(from.name !='dashboard'){
                next();

            }else{
                this.$confirm('Click save to save changes or cancel ?')
                    .then(function () {

                        self.submitForm();
                         next();
                    })
                    .catch(function () {
                         next();

                    });
            }



        });

    }
}
</script>
<style>
    .el-slider__runway {
        width: 100%;
        height: 6px;
        margin: 16px 0;
        background-color: #e4e7ed;
        border-radius: 3px;
        position: relative;
        cursor: pointer;
        vertical-align: middle;
    }
    .el-slider:after, .el-slider:before {
        display: table;
        content: "";
    }
    .el-slider__button-wrapper .el-tooltip, .el-slider__button-wrapper:after {
        display: inline-block;
        vertical-align: middle;
    }
    .el-slider__bar {
        height: 6px;
        background-color: #409eff;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        position: absolute;
    }
    .el-slider__button-wrapper {
        height: 36px;
        width: 36px;
        position: absolute;
        z-index: 1001;
        top: -15px;
        transform: translateX(-50%);
        background-color: transparent;
        text-align: center;
        user-select: none;
        line-height: normal;
    }
    .el-slider__button {
        width: 16px;
        height: 16px;
        border: 2px solid #409eff;
        background-color: #fff;
        border-radius: 50%;
        transition: .2s;
        user-select: none;
    }
    .el-slider__button-wrapper:after {
        content: "";
        height: 100%;
    }
    .el-card  {
        border-radius: 0px!important;
    }
    .matrix-card .el-card__body{
        padding: 0px!important;
    }
    .matrix-admin-form .el-select{
        width: 100%;
    }.matrix-admin-form .el-select .el-input__inner{
       background-color: #fff;
    }
     .matrix-admin-form .img-holder{
         max-width: 70px;
         padding: 5px;
         background-color: #dddddd;
     }
    .bg-dark{
        background: #99a9bf;
    }
    .grid-content{
        border: 1px solid #eee;
    }
    .matrix-admin-form .el-input-group__append, .el-input-group__prepend{
        border-color: #7e8993;
    }
    .matrix-admin-form .el-radio__input{
        vertical-align: top;
    }
    .img-holder-option{
        padding : 10px;
        width: 2rem;
        height:2em;
    }
    .blurDiv{
        opacity: .4;
    }
    .pull-right{
        float: right;
    }

    .matrix-pre-loader-img-container label:nth-child(1)  img {
            background-color: #1ABC9C;

    }
    .matrix-pre-loader-img-container label:nth-child(2) img{
        background-color: #34495E;
    }
   .matrix-pre-loader-img-container label:nth-child(3) img{
        background-color: #F39C12;
    }
    .matrix-pre-loader-img-container label:nth-child(4) img{
        background-color: #9B59B6;
    }
    .matrix-pre-loader-img-container label:nth-child(5) img{
        background-color: #3498DB;
    }
    .matrix-pre-loader-img-container label:nth-child(6) img{
        background-color: #E74C3C;
    }
    .matrix-pre-loader-img-container label:nth-child(7) img{
        background-color: #2ECC71;
    }
    .matrix-pre-loader-img-container label:nth-child(8) img{
        background-color: #2C3E50;
    }
    .matrix-pre-loader-img-container label:nth-child(9) img{
        background-color: #F1C40F;
    }
    .matrix-pre-loader-img-container label:nth-child(10) img{
        background-color: #8E44AD;
    }
    .matrix-pre-loader-img-container label:nth-child(11) img{
        background-color: #2980B9;
    }
    .matrix-pre-loader-img-container label:nth-child(12) img{
        background-color: #E74C3C;
    }
    .matrix-pre-loader-img-container label:nth-child(13) img{
        background-color: #2C3E50;
    }.matrix-pre-loader-img-container label:nth-child(14) img{
        background-color: #F1C40F;
    }
    .matrix-pre-loader-img-container label:nth-child(15) img{
        background-color: #2980B9;
    }
    .el-header{
        padding: 0 5px;
        margin: 10px 0px;
    }
    #matrixloader_app .el-tabs--left .el-tabs__header.is-left{
        margin-right: 0px;
    }
    #matrixloader_app .el-tabs--border-card{
        box-shadow: none!important;
    }
    /*sub menu*/
    .el-tabs--left .el-tabs__header.is-left {

    }
    .el-tabs__content .tab-title{
        background: #f1f1f1;
        padding:10px 15px;
    }
    .el-tabs--border-card .el-tabs__content {
        padding: 0px!important;
    }
    .el-form-item__label-wrap, .el-form-item__content{
        margin: 0px!important;
    }
    .el-form-item {
        padding: 0px 20px;
    }
    .el-form-item__label-wrap{
        float: none!important;
    }
    .is-disabled,.el-tabs__nav-next {
        display: none;
    }
    .el-tabs--left.el-tabs--border-card .el-tabs__item.is-left {
        color:     #5c5b59;
    }
    .el-input-number__decrease {
        left: 3px!important;
    }
    .el-tabs--left .el-tabs__nav-wrap.is-left.is-scrollable, .el-tabs--left .el-tabs__nav-wrap.is-right.is-scrollable, .el-tabs--right .el-tabs__nav-wrap.is-left.is-scrollable, .el-tabs--right .el-tabs__nav-wrap.is-right.is-scrollable {
        padding: 38px 0!important;
    }

    .el-tabs--left .el-tabs__nav.is-left{
        min-height: 450px;
    }

    .el-form-item__label{
        float: none!important;
    }
    .active-matrix-preloader{
      color: #409EFF;
      font-weight:500;
      font-size:14px;
      height: 20px;
    }
    .inactive{
      color:red;
      font-weight:500;
      font-size:14px;
      height: 20px;
    }
    .inactive-pluign-matrixloader .matrix-admin-form,.inactive-pluign-matrixloader .matrix-preloader-preview-area{
        opacity:.5;
        pointer-events:none;
    }
</style>
