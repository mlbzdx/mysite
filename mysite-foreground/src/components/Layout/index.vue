<template>
    <div class="layout-container">
        <div v-if="show" class="extend" ref="subSide">
            <SubSiteAside></SubSiteAside>
        </div>
        <div ref="left" class="left" :class="`col-${left} ${left ? 'custom-col' : ''}`">
            <div class="hidden-scoll">
                <slot name="left"></slot>
            </div>
        </div>
        <div class="center col-auto">
            <div ref="mainScroll" class="hidden-scoll" :style="isScroll">
                <slot></slot>
            </div>
        </div>
        <div class="right" :class="right ? `col-${right}` : 'col-auto'">
            <div class="hidden-scoll" :style="isScroll">
                <slot name="right"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import SubSiteAside from "@/components/SubSiteAside"
export default {
    components: {
        SubSiteAside,
    },
    props: {
        left: {
            type: Number,
            default: 2
        },
        right: {
            type: Number,
            default: 0
        },
        scroll: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            show: this.left
        }
    },
    computed: {
        isScroll() {
            return {
                'overflow-y': this.scroll ? 'scroll' : 'hidden',
                'scroll-behavior': 'smooth'
            }
        }
    },
    mounted() {
        this.$refs.mainScroll.addEventListener('scroll', this.handleScroll);
        this.$refs.left.addEventListener("click", this.handleToggleSubSide);
    },
    beforeDestroy() {
        this.$refs.mainScroll.removeEventListener('scroll', this.handleScroll);
        this.$refs.left.removeEventListener("click", this.handleToggleSubSide);
    },
    methods: {
        handleScroll() {
            this.$bus.$emit('mainScroll', this.$refs.mainScroll);
        },
        handleSetMainScroll(scrollTo) {
            this.$refs.mainScroll.scrollTop = scrollTo;
        },
        toggleSide(isOpen) {
            if (this.left === 2) {
                this.$refs.left.style.width = "100%"
                this.show = isOpen;
            }
        },
        handleToggleSubSide() {
            this.show = this.left;
            this.$refs.left.style.width = 0;
            this.$bus.$emit("toggleSubSide", this.show);
        }

    },
    created() {
        this.$bus.$on("setMainScroll", this.handleSetMainScroll);
        this.$bus.$on("toggleSide", this.toggleSide);
    },
    beforeDestroy() {
        this.$bus.$off("setMainScroll", this.handleSetMainScroll);
        this.$bus.$off("toggleSide", this.toggleSide);
    }
}
</script>

<style lang="less" scoped>
.layout-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;

    .left,
    .right {
        height: 100%;
        overflow: hidden;
    }

    .center {
        flex: 1 1 auto;
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }

}

.scollY {
    overflow-y: scroll;
    scroll-behavior: smooth;
}

.hidden-scoll {
    width: calc(~"100% + 17px");
    height: 100%;
}

.custom-col {
    width: 0px;
}

.extend {
    width: 30px;
    height: 100%;
    border: 1px solid;
}

.left {
    transition: 0.5s;
}

@media (min-width: 576px) {
    .custom-col {
        width: 280px !important;
    }


    .extend {
        width: 0px;
        height: 0px;
    }
}
</style>