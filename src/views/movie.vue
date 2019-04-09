<template>
    <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="[]" @open="getMovieContent" router>
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>电影</template>
                <el-menu-item-group>
                    <el-menu-item v-for="movie in movie_data" :key="movie.id" :index="'/1-' + movie.id" @select="mytest">{{ movie.title }}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>游戏</template>
                <!-- <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="2-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                </el-submenu> -->
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-setting"></i>旅游</template>
                <!-- <el-menu-item-group title="分组2">
                <el-menu-item index="3-3">选项3</el-menu-item>
                </el-menu-item-group> -->
            </el-submenu>
            </el-menu>
        </el-aside>
        
        <el-container>
            <el-header style="text-align: left; font-size: 12px; background-color: #3c9bec">
                <span></span>
            </el-header>
            <el-main>
                <!-- <router-view></router-view> -->
                <div v-for="movie in movie_data" :key="movie.id">
                    <movie-article :content="movie.title"></movie-article>
                </div>
            </el-main>
        </el-container>
    </el-container> 
</template>

<script>
import movieArticle from '../components/movieArticle'

export default {
    name:'movie',
    components:{
        'movie-article':movieArticle
    },
    data(){
        const item = {
                id:2,
                title:"这是标题！！",
                content:"这是内容！！！！",
                image:"图片路径",
                content_type:"内容类型"
        }
        return {
            type:"电影",
            // movie_data:Array(20).fill(item),
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
    mounted(){

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
