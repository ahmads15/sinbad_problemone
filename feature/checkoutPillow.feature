Feature: Checkout Pillow

Background: Open Web browser https://demo.midtrans.com/

Scenario Outline: User can success Checkout <checkout> pillow with price 18 000 after discount 10%
Given a web browser is midtrans.com page
When User click button buy now
And User click button checkout
And User click continue on pop up order summary
And User choose Credit or Debit Card as payment method
And User click pay now for '<checkout>' checkout
And User input OTP
Then User '<checkout>' credit card payment

Examples:
    | checkout |
    | success  |
    | failed   |