<template>
  paypal
  <div id="paypal-button-container"></div>
</template>

<script>
import { loadScript } from "@paypal/paypal-js";

export default {
  name: "PaymentPage",
  created() {
    loadScript({
      "client-id": 'ASSekI5oIma6ysxWN3j3UfqPFIy_TL_lHc1ZHjY-68xIc1PTOZcj7ZrKyBSBukIj187kS0ZAgAqW2EB8',
      "buyer-country": "KR",
      'locale': 'ko_KR',
      'debug': true
    })
        .then((paypal) => {
          console.log(paypal)
          paypal.Buttons({
            style: {
              layout: 'vertical',
              color:  'blue',
              shape:  'rect',
              label:  'paypal'
            },
            createOrder: function (data, actions) {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: '100.01'
                  }
                }]
              });
            },
            onApprove: function(data, actions) {
              // This function captures the funds from the transaction.
              return actions.order.capture().then(function (details) {
                // This function shows a transaction success message to your buyer.
                alert('Transaction completed by ' + details.payer.name.given_name);
              });
            },
            onCancel: function (data) {
              console.log(data)
            },
            onError: function (err) {
              console.error(err)
            }
          }).render('#paypal-button-container');
        })
        .catch((err) => {
          console.error(err)
        });
  }
}
</script>

<style scoped>

</style>