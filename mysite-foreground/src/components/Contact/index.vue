<template>
    <ul class="contact-container">
        <li v-for="(item, i) in contact" :key="i">
            <a :href="item.url">
                <Icon :size="1.3" :type="item.type"></Icon>
                <span :class="item.type">{{ item.txt }}</span>
            </a>
            <div v-show="item.src" class="img-cover">
                <img :src="item.src" alt="">
            </div>
        </li>
    </ul>
</template>

<script>
import { mapState } from "vuex";
import Icon from "@/components/Icon";
export default {
    components: {
        Icon,
    },
    computed: {
        ...mapState('setting', ['data']),
        contact() {
            if (!this.data) {
                return;
            }
            const contact = [
                { url: this.data.github, type: "github", txt: `${this.data.githubName}` },
                { url: `mailto:${this.data.mail}`, type: "mail", txt: `邮箱：${this.data.mail}` },
                { url: `tencent://message/?Menu=yes&uin=${this.data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`, type: "qq", txt: `QQ：${this.data.qq}`, src: this.data.qqQrCode },
                { url: "", type: "weixin", txt: `微信：${this.data.weixin}`, src: this.data.weixinQrCode }
            ]
            return contact
        }
    },
}
</script>

<style lang="less" scoped>
.contact-container {
    width: 100%;
    white-space: nowrap;
    margin-top: 20px;
    margin-bottom: 15px;

    li {
        width: 100%;
        height: 40px;
        padding-left: 10%;
        list-style: none;
        line-height: 40px;
        position: relative;

        &:hover .img-cover {
            transform: translateX(-50%) scaleY(1);
            opacity: 1;
        }

        a {
            width: 100%;
            display: flex;
            cursor: pointer;

            span {
                margin-left: 15px;
                align-items: center;
                font-size: 1rem;

                &.mail {
                    font-size: 0.8rem;
                }
            }

        }

        .img-cover {
            position: absolute;
            width: 150px;
            height: 150px;
            padding: 10px;
            left: 50%;
            top: -150px;
            transform: translateX(-50%) scaleY(0);
            background: #fff;
            opacity: 0;
            border-radius: 5%;
            transition: 0.5s ease-in-out;
            transform-origin: center 155px;

            img {
                width: 100%;
                height: 100%;
            }

            &::before {
                content: "";
                display: block;
                position: absolute;
                left: 50%;
                bottom: 0;
                width: 10px;
                height: 10px;
                background: #fff;
                transform: translate(-50%, 50%) rotate(45deg);
            }
        }
    }
}
</style>