const express = require("express")
const route = express.Router()
const axios = require("axios")
const User = require("../model/user")

route.get("/payment", (req, res)=>{
    res.status(200).json({data: "hello"})
})
const amount = 25000
const callback_url = "http://localhost:5173/invoice" || "https://nuesa-tufb.onrender.com/invoice"
const url = "https://api.paystack.co/transaction"
const token = process.env.PAYSTACK_SECRET_KEY
const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }
  // GETTING THE TRANSACTION REDIRECT ROUTE
route.post("/payment", async (req, res)=>{
    const {email, reference} = req.body
    const data = {email, amount: amount * 100, callback_url,reference}
    const user = await User.findOneAndUpdate({username: email},{ref: reference})
    console.log(user)
    await user.save()
    const response = await fetch(`${url}/initialize`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        const content = await response.json();
        res.status(200).json({data: content})
        console.log(content, data);
    /*      SAMPLE RESPONSE
    {
    "data": {
        "status": true,
        "message": "Authorization URL created",
        "data": {
            "authorization_url": "https://checkout.paystack.com/nim14paa646fvz0",
            "access_code": "nim14paa646fvz0",
            "reference": "0p9bkm0928"
        }
    }
} */
})
// verify payment
route.get("/payment/:id", async (req, res) => {
    const ref = req.params.id
    const response = await axios.get(`${url}/verify/${ref}`, options)

    if(response.data){
        res.status(200).json({
            data: response.data.data.gateway_response, 
            status:response.data.data.status
        })
    }else{
        res.status(400).json({data: "No such Reference number found"})
    }

    /*      SAMPLE RESPONSE
    {
    "data": { 
        "status": true,
        "message": "Verification successful",
        "data": {
            "id": 3139649196,
            "domain": "test",
            "status": "success",
            "reference": "0p9bkm0928",
            "receipt_number": null,
            "amount": 30000,
            "message": null,
            "gateway_response": "Successful",
            "paid_at": "2023-09-25T15:02:46.000Z",
            "created_at": "2023-09-25T14:54:34.000Z",
            "channel": "card",
            "currency": "NGN",
            "ip_address": "105.112.212.5",
            "metadata": "",
            "log": {
                "start_time": 1695654159,
                "time_spent": 8,
                "attempts": 1,
                "errors": 0,
                "success": true,
                "mobile": false,
                "input": [],
                "history": [
                    {
                        "type": "action",
                        "message": "Attempted to pay with card",
                        "time": 7
                    },
                    {
                        "type": "success",
                        "message": "Successfully paid with card",
                        "time": 8
                    }
                ]
            },
            "fees": 450,
            "fees_split": null,
            "authorization": {
                "authorization_code": "AUTH_w510iypjoa",
                "bin": "408408",
                "last4": "4081",
                "exp_month": "12",
                "exp_year": "2030",
                "channel": "card",
                "card_type": "visa ",
                "bank": "TEST BANK",
                "country_code": "NG",
                "brand": "visa",
                "reusable": true,
                "signature": "SIG_fydq3FkIr6awGcIoBIUD",
                "account_name": null
            },
            "customer": {
                "id": 141949363,
                "first_name": null,
                "last_name": null,
                "email": "anaguchidiebere@gmail.com",
                "customer_code": "CUS_i9srqstk593cqsz",
                "phone": null,
                "metadata": null,
                "risk_action": "default",
                "international_format_phone": null
            },
            "plan": null,
            "split": {},
            "order_id": null,
            "paidAt": "2023-09-25T15:02:46.000Z",
            "createdAt": "2023-09-25T14:54:34.000Z",
            "requested_amount": 30000,
            "pos_transaction_data": null,
            "source": null,
            "fees_breakdown": null,
            "transaction_date": "2023-09-25T14:54:34.000Z",
            "plan_object": {},
            "subaccount": {}
        }
    }
}
    */
})
module.exports = route

