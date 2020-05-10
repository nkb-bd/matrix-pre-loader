<template>
    <div>
        <!-- example content  start -->

        <el-card class="matrix-card" shadow="never">
            <el-container>

                    <el-col :span="10">
                        <div class="grid-content ">
                            <el-header>
                                <h2>Setup Your Pre Loader</h2>
                            </el-header>
                            <el-main>
                                <el-row>
                                    <el-form hide-required-asterisk :model="formData" :rules="rules" ref="formData" label-width="auto" class="matrix-admin-form">

                                        <el-form-item label="Loading text" prop="name">
                                            <el-input v-model="formData.text"></el-input>
                                        </el-form-item>



                                        <el-row>
                                            <el-col :span="14">
                                                <el-form-item label="Font Size">
                                                    <el-input placeholder="20" type="number" v-model.number="formData.font_size">
                                                        <template slot="append">px</template>
                                                    </el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="10">
                                                <el-form-item label="Font Color" class="pull-right">
                                                    <el-color-picker v-model="formData.font_color"></el-color-picker>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>

                                        <el-form-item label="Delay Millisecond(s)">
                                            <el-input placeholder="20" type="number" v-model.number="formData.loader_delay">
                                                <template slot="append">ms</template>
                                            </el-input>
                                        </el-form-item>

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

                                        <el-form-item label="Enable Matrix Style">
                                            <el-switch v-model="formData.matrix_style"></el-switch>
                                        </el-form-item>

                                        <el-form-item label="Background Color" v-if="!this.formData.matrix_style">
                                            <el-color-picker v-model="formData.bgcolor"></el-color-picker>
                                        </el-form-item>

                                        <el-form-item class="matrix-pre-loader-img-container" label="Pre Loader Image"  v-if="!this.formData.matrix_style">

                                            <el-radio  v-model="formData.image" :key="img" :label="img" v-for="img in image_list" @change="formData.custom_img=false">
                                                <img class="img-holder-option" :class="{blurDiv:formData.custom_img}"   :src="img" alt="">
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

                                        <el-form-item label="Image Width" v-if="!this.formData.matrix_style">
                                            <el-input  type="number" placeholder="100" v-model.number="formData.width">
                                                <template slot="append">px</template>
                                            </el-input>
                                        </el-form-item>

                                        <el-form-item label="Image Height" v-if="!this.formData.matrix_style">
                                            <el-input placeholder="100" type="number" v-model.number="formData.height">
                                                <template slot="append">px</template>
                                            </el-input>
                                        </el-form-item>




                                        <el-form-item>
                                            <el-button type="primary" @click="submitForm('formData')">Save</el-button>
                                        </el-form-item>
                                    </el-form>


                                </el-row>
                            </el-main>
                        </div>
                    </el-col>
                    <el-col :span="14">
                        <div class="grid-content">
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
            dialogVisible:false,
            dialogImageUrl:'',
            iframe:'',
            customImg:false,
            image_list:[],
            formData: {
                text: '',
                font_color:'',
                font_size: '',
                matrix_style: false,
                location: '',
                bgcolor: '',
                image: '',
                width: '',
                height: '',
                loader_delay: '',
                custom_img: '',

            },
            rules: {

            }
        }
    },
    methods: {

        setCustomImg(){
            this.formData.custom_img=true ;
            this.formData.image=this.dialogImageUrl;
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
                    this.formData.location = data.data.location;
                    this.formData.font_size = data.data.font_size;
                    this.formData.font_color = data.data.font_color;
                    this.formData.height = data.data.height;
                    this.formData.width = data.data.width;
                    this.formData.bgcolor = data.data.bgcolor;
                    this.formData.loader_delay = data.data.loader_delay;
                    this.formData.matrix_style =  (data.data.matrix_style == 'true') ? true : false;
                    this.image_list =data.data.image_list;
                    this.formData.image = data.data.image
                    this.formData.custom_img= false;

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
                        console.log(data);

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

    }
}
</script>
<style>
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
</style>

