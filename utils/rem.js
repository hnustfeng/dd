// 加载完成事件
// window.onload = function() {
setRem(1440);
// };

// 当屏幕尺寸发生大小变化时候事件
window.onresize = function () {
    setRem(1440);
};

function setRem(designSize) {
    // 给html赋值
    const html = document && document.getElementsByTagName("html")[0];
    // 获取html宽度和body的宽度
    const clientW =
        document.documentElement.clientWidth || document.body.clientWidth;
    //html.style.fontSize=clientW/rem*100*2+'px'

    let rem = (clientW * 10) / designSize;

    html.style.fontSize = rem + "px";
}
