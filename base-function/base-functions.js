const {client} = require('nightwatch-api');
const timeOut = 30000;

export const waitElementVisible = async (elementSelector) => {
    await client.waitForElementVisible(elementSelector, timeOut);
};

export const clickElement = async (elementSelector) => {
    await waitElementVisible(elementSelector);
    await client.click(elementSelector);
};

export const clickElementViaInject = async (elementSelector) => {
    await client.execute(function(selector){
        document.querySelector(selector).click();
    }, [elementSelector])
};

export const elementIsVisible = async (elementSelector) => {
    let cekIsVisible;
    await client.isVisible(elementSelector, (result) => {
        cekIsVisible = result.value;
    });
    return cekIsVisible;
};

export const clickElementViaXpath = async (elementSelector) => {
    client.useXpath();
    await waitElementVisible(elementSelector);
    await client.click(elementSelector);
    client.useCss();
};

export const setValueElement = async (elementSelector, value) => {
    await waitElementVisible(elementSelector);
    await client.clearValue(elementSelector);
    await client.setValue(elementSelector, value);
};

export const setValueElementThenEnter = async (elementSelector, value) => {
    await waitElementVisible(elementSelector);
    await client.clearValue(elementSelector);
    await client.setValue(elementSelector,[value, client.Keys.ENTER]);
};

export const expectElementEqualText = async (elementSelector, expectedText) => {
    await waitElementVisible(elementSelector);
    await client.expect.element(elementSelector).text.to.equal(expectedText);
};

export const expectElementEqualTextXpath = async (elementSelector, expectedText) => {
    client.useXpath();
    await waitElementVisible(elementSelector);
    await client.expect.element(elementSelector).text.to.equal(expectedText);
    client.useCss();
};

export const asserUrlEquals = async (urlText) => client.assert.urlEquals(urlText);

export const getAttributeValue = async (elementSelector , attibuteName) => {
    let text;
    await waitElementVisible(elementSelector);
    await client.getAttribute(elementSelector, attibuteName ,(result) => {
        text = result.value;
    });
    return text;
};


export const getStringText = async (elementSelector) => {
    let text;
    await waitElementVisible(elementSelector);
    await client.getText(elementSelector ,(result) => {
        text = result.value;
    });
    return text;
};

export const expectAttributeEquals = async (elementSelector, attibuteName , value) => client.expect.element(elementSelector).to.have.attribute(attibuteName)
        .equals(value);

export const scrolltoElement = async (elementSelector) => client.moveToElement(elementSelector,0,0);

export const getElementLength = async (using, locator) => {
    let getLength;
    await client.elements(using, locator, (result) => {
        getLength = result.value.length;
    });
    return getLength;
};