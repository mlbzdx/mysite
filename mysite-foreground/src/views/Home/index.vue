<template>
    <div v-loading="isLoading" @wheel="handleWheel" class="home-container">
        <ul @transitionend="handleTransitionEnd" ref="container" :style="marginTop" class="switch-page-wrapper">
            <li v-for="(item, i) in data" :key="i">
                <ImgMove :start="switching" :item="item"></ImgMove>
            </li>
        </ul>
        <div v-show="index > 0" class="arrowUp" @click="switchTo(--index)">
            <Icon :size="3" type="arrowUp"></Icon>
        </div>
        <div v-show="index < data.length - 1" class="arrowDown" @click="switchTo(++index)">
            <Icon :size="3" type="arrowDown"></Icon>
        </div>
        <ul class="page-point">
            <li :class="index === i ? 'active' : ''" v-for="(item, i) in data" :key="i" @click="switchTo(i)"></li>
        </ul>
    </div>
</template>

<script>
import ImgMove from "./ImgMove.vue";
import Icon from "@/components/Icon";
import fetchData from "@/mixins/fetchData.js";
export default {
    mixins: [fetchData('banner')],
    components: {
        Icon,
        ImgMove,
    },
    data() {
        return {
            containerHeight: 0,
            index: 0,
            switching: false,
        }
    },
    computed: {
        marginTop() {
            return {
                'margin-top': `${-this.index * this.containerHeight}px`
            }
        }
    },
    methods: {
        handleReSize() {
            this.containerHeight = this.$refs.container.clientHeight;
        },
        switchTo(i) {
            this.switching = true;
            this.index = i;
        },
        handleWheel(e) {
            if (this.switching) {
                return;
            }
            if (e.deltaY < -5 && this.index > 0) {
                // 往上滚动
                this.switching = true;
                this.index--;
            } else if (e.deltaY > 5 && this.index < this.data.length - 1) {
                // 往下滚动
                this.switching = true;
                this.index++;
            }
        },
        handleTransitionEnd() {
            this.switching = false;
        },
    },
    mounted() {
        this.handleReSize();
        window.addEventListener("resize", this.handleReSize);
    },
    destroyed() {
        window.removeEventListener("resize", this.handleReSize);
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
@jump: 5px;
@gap: 25px;

@keyframes jump-up {
    0% {
        transform: translate(-50%, @jump);
    }

    50% {
        transform: translate(-50%, -@jump);
    }

    100% {
        transform: translate(-50%, @jump);
    }
}

@keyframes jump-down {
    0% {
        transform: translate(-50%, -@jump);
    }

    50% {
        transform: translate(-50%, @jump);
    }

    100% {
        transform: translate(-50%, -@jump);
    }
}



.home-container {
    width: 100%;
    height: 100%;
    position: relative;
    transition: 500ms;

    .switch-page-wrapper {
        width: 100%;
        height: 100%;
        transition: 500ms;
        position: absolute;
        padding: 0;

        li {
            width: 100%;
            height: 100%;
            color: #fff;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .arrowUp,
    .arrowDown {
        color: @gray;
        cursor: pointer;
        text-shadow: -2px -2px #fff, -2px 2px #fff, 2px -2px #fff, 2px 2px #fff;
    }

    .arrowUp {
        position: absolute;
        left: 50%;
        top: @gap;
        transform: translateX(-50%);
        animation: jump-up 2s infinite;
    }

    .arrowDown {
        position: absolute;
        left: 50%;
        bottom: @gap;
        transform: translateX(-50%);
        animation: jump-down 2s infinite;
    }

    .page-point {
        position: absolute;
        right: @gap;
        top: 50%;
        transform: translateY(-50%);

        li {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            border: 1px solid #fff;
            margin: 10px 0;

            &.active {
                background: #fff;
            }
        }
    }

}
</style>