const base = {
    get() {
        return {
            url : "http://localhost:8080/loveCharity/",
            name: "loveCharity",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/loveCharity/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "爱心公益网站"
        } 
    }
}
export default base
