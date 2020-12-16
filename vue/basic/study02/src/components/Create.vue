<template>
    <div>
        <input v-model="writer" type="text" placeholder="글쓴이">
        <input v-model="title" type="text" placeholder="제목">
        <textarea  v-model="content" name="" id="" placeholder="내용"></textarea>
        <button @click="index !== undefined ? update() : write()">{{index !== undefined ? '수정' : '작성'}}</button>
    </div>
</template>
<script>
import data from '@/data'
export default {
    data() {
        const index = this.$route.params.contentId;
        return {
            data: data,
            index : index,
            writer : index !== undefined ? data[index].writer : "",
            title : index !== undefined ? data[index].title : "",
            content : index !== undefined ? data[index].content : ""
        }
    },
    methods : {
        write() {
            this.data.push({
                writer : this.writer,
                title : this.title,
                content : this.content,
            })
            this.$router.push({
                path: '/'
            })
        },
        update() {
            data[this.index].wirter = this.write
            data[this.index].title = this.title
            data[this.index].content = this.content
            this.$router.push({
                path: '/'
            })
        }
    }
}
</script>