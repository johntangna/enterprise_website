// // import Swiper bundle with all modules installed
// import Swiper from "Swiper.js";

// // import styles bundle
// import "Swiper.css";
import VueAMap from "vue-amap";
export default ({ Vue, options, router, siteData, isServer }) => {
    if (!isServer) {
        Vue.use(VueAMap)
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