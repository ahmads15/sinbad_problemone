import * as base from '../base-function/base-functions';
import { client } from 'nightwatch-api';

const elements = {
  btnBuyNow:'.btn.buy',
  chooseDonasi: "//div[@class='style__Container-bkurlc-0 gjquVt']/div[@class='style__TileWrapper-bkurlc-1 jNIJRT']/div[.='Donasi']",
  labelShopingCart: "//span[contains(.,'Shopping Cart')]",
  labelName: "//td[.='Name']",
  labelMidtransPillow: "//td[.='Midtrans Pillow']",
  labelEmail: "//td[.='Email']",
  labelPhoneNo: "//td[.='Phone no']",
  labelCity: "//td[.='City']",
  labelAddress: "//td[.='Address']",
  labelPostalCode: "//td[.='Postal Code']",
  btnCheckout: "//div[@class='cart-checkout']",
  labelOrderSummary: '.text-page-title-content',
  amount: '.text-amount-amount',
  btnContinue: "//div[@class='text-button-main']",
  labelCreditDebitCard: "//div[.='Credit/Debit Card']",
  valuePhoneNumber: "[placeholder='+6281234567890']",
  checkBoxDisc20persen: "//div[@class='input-row']/div[2]//input[@name='promo']",
  cardNumber: '.cardnumber',
  expDate: "[placeholder='MM / YY']",
  cvvNumber: "[placeholder='123']",
  btnPayNow: "//a[.='Pay Now']",
  fieldOTP: "[placeholder='112233']",
  btnOK: '.btn.btn-sm.btn-success',
  totalAmount: '.text-success.large',
  disclaimerSuccess: '.text-success.text-bold',
  disclaimerFailed:'.text-failed.text-bold',
  disclaimerFailed2: "//span[.='Your card got declined by the bank']",
};

export const goToWebsite = async () => {
    client.url('https://demo.midtrans.com/');
};

export const clickBtnBuyNow = async () => {
   await base.waitElementVisible(elements.btnBuyNow);
   await base.clickElement(elements.btnBuyNow);
};

export const clickBtnCheckout = async () => {
  await client.useXpath();
  await base.waitElementVisible(elements.labelMidtransPillow);
  await base.waitElementVisible(elements.labelName);
  await base.waitElementVisible(elements.labelEmail);    
  await base.waitElementVisible(elements.labelPhoneNo);
  await base.waitElementVisible(elements.labelCity);
  await base.waitElementVisible(elements.labelAddress);
  await base.waitElementVisible(elements.labelPostalCode);
  await base.clickElement(elements.btnCheckout);
  await client.useCss();
};

export const clickContinue = async () => {
  await base.clickElementViaXpath(elements.btnContinue);
};


export const chooseCreditorDebitCard = async () => {
  await client.useXpath();
  await base.waitElementVisible(elements.labelCreditDebitCard);
  await base.clickElement(elements.labelCreditDebitCard);
  await client.useCss();
};

export const clickPayNow = async (type) => {
  await base.waitElementVisible(elements.amount);
  if(type === 'success'){
    await base.setValueElement(elements.cardNumber,'4811 1111 1111 1114');
    await base.setValueElement(elements.expDate,'0221');
    await base.setValueElement(elements.cvvNumber,'123');
    await base.clickElementViaXpath(elements.btnPayNow);
  }else {
    await base.setValueElement(elements.cardNumber,'4911 1111 1111 1113');
    await base.setValueElement(elements.expDate,'0221');
    await base.setValueElement(elements.cvvNumber,'123');
    await base.clickElementViaXpath(elements.btnPayNow);
  }
};

export const inputOTP = async () => {
  await base.waitElementVisible(elements.fieldOTP);
  await base.clickElement(elements.fieldOTP);
  await base.setValueElement(elements.fieldOTP,'112233');
  await base.clickElement(elements.btnOK);
};

export const verifyPayment = async (result) => {
  if(result === 'success'){
    await base.expectElementEqualText(elements.totalAmount, 'Rp 18,000');
    await base.expectElementEqualText(elements.disclaimerSuccess, 'Transaction successful');
  }else{
    await base.expectElementEqualText(elements.disclaimerFailed, 'Transaction failed');
    await base.expectElementEqualTextXpath(elements.disclaimerFailed2, 'Your card got declined by the bank');
  }
};
