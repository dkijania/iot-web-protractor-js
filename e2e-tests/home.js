var HomePage = require('../ui/page/HomePage')
var windowsUtils = require('../utils/windowUtils')

describe('navigate to Pricing by toolbar button', function () {

    it('should navigate to home', function () {
        browser.get('/')
    });

    it('should redirect to pricing section', function () {
        var homePage = new HomePage();
        homePage.pricingToolbarButton.click()
            .then(function () {
                let { y } = homePage.pricingHeader.getLocation()
                var bottomY = windowsUtils.getWindowBottomY()
                var topY = windowsUtils.getWindowTopY()
                expect(y < bottomY && y > topY).toBeTruthy
            })
    });
});