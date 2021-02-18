const assert = require('assert');

describe('Homepage', function() {
    it('should load properly', function(){
        browser.url('./')
        expect(browser).toHaveTitle('Conduit')
        $('=Sign in').click()
        expect(browser).toHaveUrl('/login', {containing : true})
    })
})