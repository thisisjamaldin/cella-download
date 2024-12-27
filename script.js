const android = document.getElementById("android")
const IOS = document.getElementById("IOS")
const web = document.getElementById("web")

function refresh() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if(userAgent.includes("Android")) {
        android.click()
    }else if(userAgent.includes("iPhone") || userAgent.includes("iPad") || userAgent.includes("iPod")) {
        IOS.click()
    }else {
        web.click()
    }
}

refresh();
