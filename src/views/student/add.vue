<el-calendar v-model="value">
</el-calendar>

<script>
export default {
    data() {
        return {
            value: new Date()
        }
    }
}
</script>