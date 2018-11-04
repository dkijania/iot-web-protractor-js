var HomePage = function () {
    this.pricingToolbarButton = element(by.xpath("//button[span[text()='Pricing']]"))
    this.pricingDropDownButton = element(by.xpath("//button[@aria-label='ArrowDropDown']"))
    this.pricingHeader = element(by.xpath("//h1[text()='Pricing']"))
}

module.exports = HomePage;