<template>
    <div id="main">
        <Hesder />
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainApp",
        components: {Header}
    }
</script>

<style scoped>

</style>