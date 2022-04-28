// // import Swiper bundle with all modules installed
// import Swiper from "Swiper.js";

// // import styles bundle
// import "Swiper.css";
import VueAMap from "vue-amap";
import { getJsonContent } from "../request.js"
const time = null
export default async({ Vue, options, router, siteData, isServer }) => {
    if (!isServer) {
        getJsonContent().finally(() => {
            let obj = (new Function("return " + JSON.parse(window.localStorage.getItem("pageData"))[0].jsonContent))()
            Vue.mixin({
                data() {
                    return {
                        pageData: obj,
                        currentOperateObj: {}
                    }
                }
            })
        })
        Vue.use(VueAMap)
        let temp = document.querySelectorAll(".nav-link")
        for (let i = 0; i < temp.length; i++) {
            temp[i].addEventListener("click", () => {
                if (time) {
                    clearTimeout(time)
                    time = null
                }
                time = setTimeout(() => {
                    window.location.reload()
                }, 500);
            })
        }
    }
    // Vue.mixin({
    //     mounted() {
    //         try {
    //             import ('vue-amap').then(module => {
    //                 Vue.use(module.default)
    //             })
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    // })
}