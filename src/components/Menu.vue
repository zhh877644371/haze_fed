<template>
    <div>
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>数据存储</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">图片数据</template>
                    <el-menu-item index="1-1">
                        <router-link to="/dataStorage1">直方图数据存储</router-link>
                    </el-menu-item>
                    <el-menu-item index="1-2">散点图数据存储</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="文本数据">
                    <el-menu-item index="1-3">文本数据存储</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">数据可视化</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <router-link to="/">Home</router-link>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <router-link to="/about">About</router-link>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
