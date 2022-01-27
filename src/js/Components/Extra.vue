<template>
    <div>

        <el-card class="matrix-card" shadow="never">

        <!-- You can delete this sample data -->
       <el-container>
            <el-header>
                <h2>Thank you for trying the plugin</h2>
               
            </el-header>
            <el-main>
                Here is a list of few animation class you can use :
                <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                    <el-table-column
                            prop="Fading_entrances"
                            label="Fading entrances"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="Fading_exits"
                            label="Fading exits"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="Flippers_In"
                            label="Flippers In"
                            width="180">
                    </el-table-column>

                    <el-table-column
                            prop="Flippers_Out"
                            label="Flippers Out">
                    </el-table-column>
                    <el-table-column
                            prop="Sliding_entrances"
                            label="Sliding entrances">
                    </el-table-column><el-table-column
                            prop="Sliding_exits"
                            label="Sliding exits">
                    </el-table-column>

                </el-table>

                <el-row style="padding: 20px;">
                    <a target="_blank" href="https://animate.style/"> Thanks to animate.style css, for more animation class visit this link</a>

                </el-row>
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
                Fading_entrances:'fadeIn',
                Fading_exits:'fadeOut',
                Flippers_In:"flipInX",
                Flippers_Out:"flipOutX",
                Sliding_entrances:"slideInRight",
                Sliding_exits:"slideOutLeft",
            }, {
                    Fading_entrances:'fadeInLeft',
                    Fading_exits:'fadeOutRight',
                    Flippers_In:"flipInY",
                    Flippers_Out:"flipOutY",
                    Sliding_entrances:"slideInUp",
                    Sliding_exits:"slideOutUp",

            }]

        }
    },
    methods:{
        redirrestUrl() {
            window.open(this.Author, "_blank");
        }
    }
}
</script>

