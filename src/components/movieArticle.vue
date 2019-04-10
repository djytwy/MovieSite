<template>
    <div id="movie-article">
        <p v-for=" each in content" :key="each" >{{ each }}</p>
        <div v-for=" each in images_list" :key="each+'2'">
            <img :src="each" alt="">
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
            const content = this.$store.state.movieContent.content_text
            return content.split('。')
        },
        images_list: function() {
            const images_list = this.$store.state.movieContent.images_path
            return images_list.split('|')
        }
    },
    methods: {
        getMovie: function() {
            api.get_movie('content', this.$route.params.title)
            .then( response => {
                this.$store.dispatch('MovieContent', response.data[0]);
                // this.$store.state.movieContent = response.data[0]
            })
            .catch( err => {
                console.log(err)
            })
        },

        // 服务器的带宽比较垃圾，延时400毫秒，保证数据的稳定
        getMovieTime: function() {
            const self = this
            return new Promise( resolve => {
                setTimeout(() => {
                    self.getMovie()
                    resolve(true)
                }, 400)
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
