<template>
    <div @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" ref="outer" class="outer-container">
        <div :style="imagePosition" ref="inner" class="inner-container">
            <ImgLoading @load="showWords" :midImg="item.midImg" :bigImg="item.bigImg"></ImgLoading>
        </div>
        <div ref="title" class="title">{{ item.title }}</div>
        <div ref="desc" class="desc">{{ item.description }}</div>
    </div>
</template>

<script>
import ImgLoading from "@/components/ImgLoading";
export default {
    components: {
        ImgLoading,
    },
    props: ['item', 'start'],
    data() {
        return {
            outer: null,
            inner: null,
            mouseX: 0,
            mouseY: 0,
            titleWidth: 0,
            descWidth: 0,
        }
    },
    computed: {
        imagePosition() {
            if (!this.inner || !this.outer) {
                return;
            }
            const extraWidth = this.inner.width - this.outer.width; // 多出的宽度
            const extraHeight = this.inner.height - this.outer.height; //多出的高度
            const left = (-extraWidth / this.outer.width) * this.mouseX;
            const top = (-extraHeight / this.outer.height) * this.mouseY;
            return {
                transform: `translate(${left}px, ${top}px)`,
            };
        },
        center() {
            return {
                x: this.outer.width / 2,
                y: this.outer.height / 2,
            };
        },
    },
    methods: {
        handleResize() {
            this.outer = {
                width: this.$refs.outer.clientWidth,
                height: this.$refs.outer.clientHeight
            };
            this.inner = {
                width: this.$refs.inner.clientWidth,
                height: this.$refs.inner.clientHeight
            };
            this.titleWidth = this.$refs.title.clientWidth;
            this.descWidth = this.$refs.desc.clientWidth;
        },
        // 调用该方法，显示文字
        showWords() {
            this.$refs.title.style.opacity = 1;
            this.$refs.title.style.width = 0;
            // 强制让浏览器渲染一次
            this.$refs.title.clientWidth; // reflow
            this.$refs.title.style.transition = "2s ease-out 1s";
            this.$refs.title.style.width = this.titleWidth + "px";

            // 描述也是一样
            this.$refs.desc.style.opacity = 1;
            this.$refs.desc.style.width = 0;
            // 强制让浏览器渲染一次
            this.$refs.desc.clientWidth; // reflow
            this.$refs.desc.style.transition = "3s ease-out 3s";
            this.$refs.desc.style.width = this.descWidth + "px";
        },
        handleMouseMove(e) {
            const rect = this.$refs.outer.getBoundingClientRect();
            this.mouseX = e.clientX - rect.left;
            this.mouseY = e.clientY - rect.top;
        },
        handleMouseLeave() {
            this.mouseX = this.center.x;
            this.mouseY = this.center.y;
        }
    },
    watch: {
        start(newVal, oldVal) {
            if (!newVal) {
                this.$refs.outer.style.filter = `blur(0)`;
                this.showWords();
                return;
            }
            this.$refs.title.style.opacity = 0;
            this.$refs.title.style.width = 1;
            this.$refs.title.clientWidth; // reflow
            this.$refs.title.style.transition = "";
            this.$refs.desc.style.opacity = 0;
            this.$refs.desc.style.width = 1;
            this.$refs.desc.clientWidth; // reflow
            this.$refs.desc.style.transition = "";

            this.$refs.outer.style.filter = `blur(2vw)`;
            this.$refs.outer.style.transition = "1s ease-in-out";
        }
    },
    mounted() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.outer-container {
    width: 100%;
    height: 100%;
    position: relative;


    .inner-container {
        width: 110%;
        height: 110%;
    }

    .title,
    .desc {
        position: absolute;
        letter-spacing: 3px;
        color: #fff;
        text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
            0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
        white-space: nowrap;
        left: 30px;
        opacity: 0;
        overflow: hidden;
    }

    .title {
        top: 35%;
        font-size: 3em;
    }

    .desc {
        top: 50%;
        font-size: 1.8em;
        color: lighten(@gray, 20%);
    }
}
</style>