<template>
    <div id="movie-article">
        <p v-for=" each in content" :key="each.id" >{{ each.data }}</p>
        <div v-for=" each in images_list" :key="each.id+'20'">
            <img :src="each.data" alt="">
        </div>
    </div>
</template>

<script>
import api from '../axios.js'

export default {
    name:'movieArticle',
    data: function() {
        return {
            movieContent:null
        }
    },
    watch: {
        title: async function() {
            await this.getMovieTime()
        }
    },
    computed: {
        title: function() {
            return this.$route.params.title
        },
        content: function() {
            if (this.$store.state.movieContent) {
                const content = this.$store.state.movieContent.content_text.split('。')
                let data = []
                for (let each in content) {
                    data.push({id:each,data:content[each]})
                }
                return data
            } else 
                return '暂无内容'
        },
        images_list: function() {
            if (this.$store.state.movieContent) {
                const images_list = this.$store.state.movieContent.images_path.split('|')
                let data = []
                for (let each in images_list) {
                    data.push({id:each,data:images_list[each]})
                }
                return data
            } else
                return '暂无图片'
        }
    },
    methods: {
        getMovie: function() {
            api.get_movie('content', this.$route.params.title)
            .then( response => {
                this.$store.dispatch('MovieContent', response.data[0]);
            })
            .catch( err => {
                console.log(err)
            })
        },

        // 服务器的带宽比较垃圾，延时50毫秒，保证数据的稳定
        getMovieTime: function() {
            const self = this
            return new Promise( resolve => {
                setTimeout(() => {
                    self.getMovie()
                    resolve(true)
                }, 50)
            })
        }
    },
    mounted: async function () {
        await this.getMovieTime()
    }
}
</script>

<style scoped>

</style>
