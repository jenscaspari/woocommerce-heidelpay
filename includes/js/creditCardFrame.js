/**
 *  SUMMARY
 *
 * DESC
 *
 * @license Use of this software requires acceptance of the License Agreement. See LICENSE file.
 * @copyright Copyright © 2016-present heidelpay GmbH. All rights reserved.
 * @link https://dev.heidelpay.de/JTL
 * @author David Owusu
 * @category WOOCOMMERCE
 */

/*var paymentFrameForm;
var targetOrigin;*/


/**
 * Get hostname and protocol from paymentIframe
 */

jQuery(function () {
        paymentFrameForm = document.getElementById('paymentFrameForm');
        if(paymentFrameForm != null) {
            console.log(paymentFrameForm);

            var paymentFrameIframe = document.getElementById('paymentFrameIframe');

            if (paymentFrameForm.addEventListener) {// W3C DOM
                paymentFrameForm.addEventListener('submit', sendMessage);
            }
            else if (paymentFrameForm.attachEvent) { // IE DOM
                paymentFrameForm.attachEvent('onsubmit', sendMessage);
            }
		}
    }
)




/**
 * Get the form element
 */




/**
 * Add an event listener to from submit, which will execute the sendMessage function
 */


/**
 * Define send Message function
 * This function will collect each inpunt inside the form and then submit
 * the iframe to the payment server. Please note that it is not allowed to submit
 * credit or debit card information form your webpage.
 */

function sendMessage(e) {
	
	if(e.preventDefault) { e.preventDefault(); } 
	else { e.returnValue = false; }

	var data = {}; 
	
	/**
	 * Collection form input fields
	 */
	

	/**
	 * Send html postmessage to payment frame
	 */
	targetOrigin = getDomainFromUrl(jQuery('#paymentFrameIframe').attr('src'));
	paymentFrameIframe.contentWindow.postMessage(JSON.stringify(data), targetOrigin);
}


/**
 * Function to get the domain from a given url 
 */
function getDomainFromUrl(url) { 
	var arr = url.split("/"); 
	return arr[0] + "//" + arr[2]; 
	}


/**
 * Add an listener to your webpage, which will recieve the response message
 * from payment server.
 */
if (window.addEventListener) { // W3C DOM
	window.addEventListener('message', receiveMessage);
		
	} 
else if (window.attachEvent) { // IE DOM 
	window.attachEvent('onmessage', receiveMessage); 
	}

/**
 * Define receiveMessage function
 *
 * This function will recieve the response message form the payment server.
 */
function receiveMessage(e) { 
	
	if (e.origin !== targetOrigin) {
		return; 
	}
	
	var antwort = JSON.parse(e.data);
	console.log(antwort);
}


