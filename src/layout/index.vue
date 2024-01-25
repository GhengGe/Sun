<script lang="ts">
// import AsideCont from './aside/index.vue';
import HeaderCont from './header/index.vue';
</script>
<template>
    <el-container>
        <el-aside width="200px">
            AsideCont
            <!-- <AsideCont /> -->
        </el-aside>
        <el-container>
            <el-header>
                <HeaderCont />
                <!-- <slot name="header"></slot> -->
            </el-header>
            <el-main>
                <slot name="main"></slot>
            </el-main>
        </el-container>
    </el-container>
</template>