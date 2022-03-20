// // import Swiper bundle with all modules installed
// import Swiper from "Swiper.js";

// // import styles bundle
// import "Swiper.css";
import VueAMap from "vue-amap";
import { getJsonContent } from "../request.js"
export default async({ Vue, options, router, siteData, isServer }) => {
    if (!isServer) {
        getJsonContent()
        Vue.use(VueAMap)
        let obj = (new Function("return " + JSON.parse(window.localStorage.getItem("pageData"))[0].jsonContent))()
        Vue.mixin({
            data() {
                return {
                    pageData: obj,
                    currentOperateObj: {}
                }
            }
        })
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