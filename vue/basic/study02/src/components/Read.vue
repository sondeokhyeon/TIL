<template>
<div>
    <table>
        <tr>
            <td>글쓴이</td>
            <td>제목</td>
            <td>내용</td>
        </tr>
        <tr v-for="(value, index) in data" :key="index" @click="detail(index)">
            <td>{{value.writer}}<td>
            <td>{{value.title}}</td>
            <td>{{value.content}}</td>
        </tr>
    </table>
    <button @click="writer">글쓰기</button>
    </div>
</template>


<script>
import data from '@/data'
    export default {
        name:'Read',
        data() {
            return {
                data : data
            }
        },
        methods : {
            writer() {
                this.$router.push({
                    path : 'create'
                })
            }, 
            detail(idx) {
                this.$router.push({
                    name:'Detail',
                    params: {
                        contentId:idx
                    }
                })
            }
        }
    }
</script>