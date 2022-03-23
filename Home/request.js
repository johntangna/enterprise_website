import axios from 'axios'
import qs from 'qs'
export const baseRequestUrl = '/api'

export function login(username, password) {
    let url = baseRequestUrl + '/login'
        // let url = '/login'
    return axios({
        url: url,
        method: "post",
        data: qs.stringify({ username: username, password: password })
    }).then((res) => {
        if (res.data.code == 200) {
            alert("登录成功，欢迎您")
            window.localStorage.setItem("default-admin", "default-admin")
        }
    }).catch((e) => {
        console.log(`登录${e}`)
    })
}

export function getJsonContent() {
    let url = baseRequestUrl + '/jsonContent/getJsonList?jsonContentSourceName=欧美斯官网'
    return axios.get(url, {}).then(async(res) => {
        window.localStorage.setItem("pageData", JSON.stringify(res.data.result.records))
    }).catch((e) => {
        console.log('获取错误' + e)
    })
}

export function updateJsonContent(data) {
    let url = baseRequestUrl + '/jsonContent/updateJson'
    return axios({
        url: url,
        method: "post",
        data: data
    }).then(res => {
        if (res.data.code == 200) alert("更新成功")
    }).catch((e) => {
        console.log('更新错误' + e)
    })
}

export function getFileList(data) {
    let url = `${baseRequestUrl}/omsFile/getOmsFileList?fileName=${data.fileName}&type=${data.type}&pageNo=${data.pageNo}&pageSize=${data.pageSize}`
    return axios({
        url: url,
        method: "get"
    })
}

export function uploadFile(data) {
    let url = baseRequestUrl + '/omsFile/upload'
    return axios({
        url: url,
        method: "post",
        data: data
    })
}