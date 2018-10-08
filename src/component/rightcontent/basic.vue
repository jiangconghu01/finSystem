<template>
  <div class="basic-page  clearfix">
        <div class="card common">
            <Title-text>常用功能</Title-text>
            <div class="card-list" v-for="(item,index) in basicData['COMMON_FUNCTION']" :key="index">
                <div class="card-item">
                    <Card :url="zjgl">
                        <template slot="title">资金管理</template>
                    </Card>
                </div>
            </div>
        </div>
      <div class="left-box">
        <div class="card infor">
            <Title-text>最近业务通知</Title-text>
            <ul>
                <li v-for="(item,index) in basicData['BUS_Notice']" :key="index">【{{item.title}}】{{item.msg}}</li>
            </ul>
        </div>
        <div class="card wait">
            <Title-text>待办事项</Title-text>
            <div v-for="(item,index) in basicData['TODO_SOMETHING']" :key="index" class="bar">{{item.msgTile}}<span class="num">{{item.bilId}}</span></div>                            
        </div>
        <!-- <div class="card common">
            <Title-text>常用功能</Title-text>
            <div class="card-list">
                <div class="card-item">
                    <Card :url="zjgl">
                        <template slot="title">资金管理</template>
                    </Card>
                </div>
                <div class="card-item">
                    <Card :url="drdc">
                        <template slot="title">导入导出</template>
                    </Card>
                </div>
                <div class="card-item">
                    <Card :url="wdbb">
                        <template slot="title">我的报表</template>
                    </Card>
                </div>
                <div class="card-item">
                    <Card :url="swgl">
                        <template slot="title">税务管理</template>
                    </Card>
                </div>
            </div>
        </div> -->
        <div class="card download-web" id="basic-download-web">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="下载中心" name="first">
                    <el-row :gutter="20">
                        <el-col :span="8" v-for="(item,index) in basicData['Dow_CENTER']" :key="index" @click.native="goDownWeb(item)">
                            <div class="grid-content bg-purple">
                                <span class="content">{{item.msgTitle}}</span>
                            </div>
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="常用网站" name="second">

                </el-tab-pane>
            </el-tabs>
        </div>
      </div>
      <div class="right-box">
        <div class="card common">
            <Title-text2>
                <template slot="title">系统公告</template>
                <template slot="more">查看更多</template>
            </Title-text2>
            <ul>
                <li v-for="(item,index) in basicData['SYS_NOTICE']" :key="index">【{{item.msgTitle}}】{{item.msgText}}</li>
            </ul>
        </div>
        <div class="card question">
            <Title-text2>
                <template slot="title">常见问题</template>
                <template slot="more">查看更多</template>
            </Title-text2>
             <ul>
                <li v-for="(item,index) in basicData['COMMON_PROBLEM']" :key="index">{{item.msg}}</li>
            </ul>
        </div>
        <div class="card handbook">
            <img src="../../static/handbook.png" alt="">
        </div>
      </div>
  </div>
</template>

<script>
import TitleText from '../partcomponent/title.vue';
import TitleText2 from '../partcomponent/titletext.vue';
import Card from '../partcomponent/card.vue';
import zjglimg from '../../static/zjgl.png';
import drdcimg from '../../static/drdc.png';
import wdbbimg from '../../static/wdbb.png';
import swglimg from '../../static/swgl.png';
import { mapGetters } from 'vuex';
export default {
    props: {
        setdata: {
            type: String,
            required: false
        }
    },
    data () {
        return {
            zjgl: zjglimg,
            drdc: drdcimg,
            wdbb: wdbbimg,
            swgl: swglimg,
            activeName: 'first',
            basicData: ''
        };
    },
    computed: {
        ...mapGetters([
            'project'
        ])
    },
    components: {
        TitleText,
        TitleText2,
        Card
    },
    methods: {
        handleClick(tab, event) {
        },
        goDownWeb(item) {
        }
    },
    created() {
        this.$http.get(this.project + 'pagesnew/homePage.do').then(data => {
            const basicObj = data.data[0];
            this.basicData = basicObj;
        });
    },
    mounted() {
    }

};
</script>
<style lang='scss' scoped>
@import '../../css/common.scss';
.basic-page{
    background-color: #F5F5F5;
    border-left: 1px solid #EAEAEA;
    color:#4D4D4D;
    height: 100%;
    padding-top: 1.4%;
    .common{
        margin-left: 1.4%;
        padding-bottom: 20px;
        min-height: 140px;
        width:97%;
        background-color: #fff;
        border: 1px solid #EAEAEA;
        box-shadow: 5px 5px 5px #EAEAEA;
        .card-list{
            font-size: 0;
            min-width: 500px;
            overflow: auto;
        }
        .card-item{
            margin-top: 10px;
            white-space: normal;
            width: 17%;
            height: 51px;
            margin-left:2%;
            display: inline-block;
            vertical-align: top;
            min-width: 135px;
        }
    }    
    .left-box{
        width:70%;
        //float: left;
        display: inline-block;
        vertical-align: top;
        font-size:0;
        .infor{
            height: 265px;
            width: 47%;
            display: inline-block;
            vertical-align: top;
            ul{
                width: 100%;
                padding-left: 5px;
                height: 100%;
                li{
                    text-overflow: ellipsis;
                    width: 100%;
                    line-height: 30px;
                    height: 30px;
                    white-space: nowrap;
                    overflow: hidden;
                    cursor: pointer;
                    &:nth-child(1){
                        color: red;
                    }
                    &:nth-child(2){
                        color: red;
                    }
                }
            }
        }
        .wait{
            height: 265px;
            display: inline-block;
            width: 47%;
            vertical-align: top;
            .bar{
                margin-left: 5px;
                padding:0 10px;
                height: 45px;
                line-height: 45px;
                width: 95%;
                margin-top:15px;
                background-color: #F5F5F5;
                box-sizing: border-box;
                .num{
                    float: right;
                    font-size: 18px;
                }
            }
        }
        // .common{
        //     height: 200px;
        //     width:96%;
        //     .card-list{
        //         font-size: 0;
        //         min-width: 500px;
        //         overflow: auto;
        //         white-space: nowrap;
        //     }
        //     .card-item{
        //         white-space: normal;
        //         width: 20%;
        //         height: 61px;
        //         margin-left:4%;
        //         display: inline-block;
        //         vertical-align: top;
        //         min-width: 135px;
        //     }
        // }
        .download-web{
            height: 230px;
            width:96%;
            margin-bottom:20px;
            .el-row {
                margin-bottom: 13px;
                &:last-child {
                margin-bottom: 0;
                }
            }
            .el-col {
                border-radius: 2px;
                margin-top: 10px;
            }
            .bg-purple {
                background: #F5F6FA;
            }
            .grid-content {
                border-radius: 2px;
                min-height: 36px;
                position: relative;
                cursor: pointer;
                .content{
                    width: 100%;
                    cursor: pointer;
                    font-size: 14px;
                    color: #5C5C5C;
                    text-align:center;
                    letter-spacing: 0.5px;
                    display: inline-block;
                    @include center;
                }
            }
            .row-bg {
                padding: 10px 0;
                background-color: #F5F6FA;
            }
        }
        &>.card{
            font-size: 14px;
            margin-left: 2%;            
            margin-top:2%;
            background-color: #fff;
            padding: 0 10px;
            box-sizing: border-box;
            border: 1px solid #EAEAEA;
            box-shadow: 5px 5px 5px#EAEAEA;
        }
    }
    .right-box{
        width: 28%;;
        //float:left;
        display: inline-block;
        &>.card{
            margin-left: 2%;            
            margin-top:5%;
            background-color: #fff;
            border: 1px solid #EAEAEA;
            box-shadow: 5px 5px 5px#EAEAEA;
        }
        .common{
            height: 245px;
            width:98%;
            font-size: 12px;
            ul{
                margin-top: 10px;
                padding: 0 10px;
                padding-left: 15px;
                height: 100%;
                li{
                    text-overflow: ellipsis;
                    width: 100%;
                    line-height: 22px;
                    height: 22px;
                    white-space: nowrap;
                    overflow: hidden;
                    cursor: pointer;
                }
            }
        }  
        .question{
            height: 270px;
            width: 98%;
            font-size: 12px;
            ul{
                margin-top: 10px;
                padding: 0 10px;
                padding-left: 15px;
                height: 100%;
                li{
                    text-overflow: ellipsis;
                    width: 100%;
                    line-height: 22px;
                    height: 22px;
                    white-space: nowrap;
                    overflow: hidden;
                    cursor: pointer;
                }
            }
        }
        .handbook{
            height: 70px;
            width: 98%;
            // background: url('../../static/handbook.png') no-repeat;
            // background-size: cover;
            cursor: pointer;
            img{
                width: 100%;
                height: 100%;
            }
        }      
    }

}
.clearfix:after {
        visibility: hidden;
        display: block;
        font-size: 0;
        content: " ";
        clear: both;
        height: 0;
}
</style>