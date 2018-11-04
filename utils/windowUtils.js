module.exports = {
    
    getWindowTopY: function () {
        return browser.executeScript("return window.pageYOffset;")
    },

    getWindowBottomY: function () {
        return browser.executeScript("return window.innerWidth;")
    }
}