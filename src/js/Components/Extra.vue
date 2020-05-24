<template>
    <div>

        <el-card class="matrix-card" shadow="never">

        <!-- You can delete this sample data -->
       <el-container>
            <el-header>
                <h2>Thank you for trying the plugin</h2>
                <p>Do not forget leave review <a href="https://wordpress.org/plugins/matrix-pre-loader/#reviews" target="_blank" class="is-success" type="primary">here</a> if you like it.</p>

            </el-header>
            <el-main>
                Here is the list of animation class you can use :
                <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                    <el-table-column
                            prop="MAGIC_EFFECTS"
                            label="MAGIC EFFECTS"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="BLING"
                            label="BLING"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="STATIC_EFFECTS"
                            label="STATIC EFFECTS"
                            width="180">
                    </el-table-column>

                    <el-table-column
                            prop="STATIC_EFFECTS_OUT"
                            label="STATIC EFFECTS OUT">
                    </el-table-column>
                    <el-table-column
                            prop="PERSPECTIVE"
                            label="PERSPECTIVE">
                    </el-table-column><el-table-column
                            prop="ROTATE"
                            label="ROTATE">
                    </el-table-column>

                </el-table>

                <el-row style="padding: 20px;">
                    <a target="_blank" href="https://github.com/miniMAC/magic"> Thanks to magic animation css, for more animation class visit this link</a>

                </el-row>
                <el-button type="info" plain @click="redirrestUrl()">For support you may knock me</el-button>
            </el-main>
        </el-container>
        </el-card>
        <!-- end sample data -->
<!--        https://twitter.com/mr_mihi-->
    </div>
</template>
<script>
export default {
    name: 'Extra',
    data() {
        return {
            Author: 'https://www.github.com/nkb-bd',
            tableData: [{
                MAGIC_EFFECTS:'magic',
                BLING:'puffIn',
                STATIC_EFFECTS:"openDownLeft",
                STATIC_EFFECTS_OUT:"openDownLeftOut",
                PERSPECTIVE:"openDownRightOut",
                ROTATE:"rotateDown",
            },{

                MAGIC_EFFECTS:'twisterInDown',
                BLING:'puffOut',
                STATIC_EFFECTS:"openDownRight",
                STATIC_EFFECTS_OUT:"openDownRightOut",
                PERSPECTIVE:"perspectiveUp",
                ROTATE:"rotateUp",
            },]

        }
    },
    methods:{
        redirrestUrl() {
            window.open(this.Author, "_blank");
        }
    }
}
</script>

