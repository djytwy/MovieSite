<template>
    <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="400px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1']" @open="getMovieContent" router>
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>电影</template>
                <el-menu-item-group>
                    <el-menu-item v-for="movie in movie_data" :key="movie.id" :index="'/movie/' + movie.title" @select="mytest">{{ movie.title }}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>游戏</template>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-setting"></i>旅游</template>
            </el-submenu>
            </el-menu>
        </el-aside>
        
        <el-container>
            <el-header style="text-align: left; font-size: 12px; background-color: #3c9bec">
                <span></span>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container> 
</template>

<script>
// import movieArticle from '../components/movieArticle'
import api from '../axios.js'

export default {
    name:'movie',
    // components:{
    //     'movie-article':movieArticle
    // },
    data(){
        return {
            type:"电影",
            movie_data:[{
                id:2,
                title:"这是标题！！",
                content:"这是内容！！！！",
                image:"图片路径",
                content_type:"内容类型"
            },{
                id:3,
                title:"这是标题！！",
                content:"这是内容！！！！",
                image:"图片路径",
                content_type:"内容类型"
            }],
            test:"这是测试的数据！！！ ！"
        }
    },
    methods: {
        getMovieContent(key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath)
        },
        mytest() {
            console.log("test !!!")
        }
    },
    mounted: function() {
        api.get_movie('title')
        .then( response => {
            this.movie_data = response.data
        })
        .catch( err => {
            console.log(err)
        })
    }
}
</script>

<style scoped>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }
  
  .el-aside {
    color: #333;
  }
</style>
