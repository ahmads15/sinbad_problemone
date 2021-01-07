import { Given, When, Then } from 'cucumber';
import * as checkout from '../pages/checkout';

Given(/^a web browser is midtrans.com page$/, async () => {
    await checkout.goToWebsite();
});

When(/^User click button buy now$/, async () => {
    await checkout.clickBtnBuyNow();
});

When(/^User click button checkout/, async () => {
    await checkout.clickBtnCheckout();
});

When(/^User click continue on pop up order summary$/, async () => {
    await checkout.clickContinue();
});

When(/^User choose Credit or Debit Card as payment method$/, async () => {
    await checkout.chooseCreditorDebitCard();
});

When(/^User click pay now for '([^"]*)' checkout$/, async (type) => {
    await checkout.clickPayNow(type);
});

When(/^User input OTP$/, async () => {
    await checkout.inputOTP();
});

Then(/User '([^"]*)' credit card payment$/, async (result) => {
    await checkout.verifyPayment(result);
});
