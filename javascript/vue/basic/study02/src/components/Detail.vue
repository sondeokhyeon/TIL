<template>
    <div>
        <div>{{data.writer}}</div>
        <div>{{data.title}}</div>
        <div>{{data.content}}</div> 
        <button @click="updateData">수정</button>
        <button @click="deleteData">삭제</button>
    </div>
</template>

<script>
import data from '@/data'
export default {
    name : 'Detail',
    data()  {
        const index = this.$route.params.contentId
        return {
            data: data[index],
            index : index,
        }
    },
    methods: {
        updateData() {
            this.$router.push({
                name:'Create',
                params : {
                    contentId:this.index
                }
            })
        },
        deleteData() {
            data.splice(this.index, 1)
            this.$router.push({
                path:'/'
            })
        }
    }
}
</script>