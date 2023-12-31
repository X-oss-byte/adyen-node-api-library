/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import { PaymentSetupRequest } from "../../typings/checkout/models";
import { PaymentSetupResponse } from "../../typings/checkout/models";
import { PaymentVerificationRequest } from "../../typings/checkout/models";
import { PaymentVerificationResponse } from "../../typings/checkout/models";
import { IRequest } from "../../typings/requestOptions";
import CheckoutResource from "../resource/checkoutResource";
import { ObjectSerializer } from "../../typings/checkout/models";

export class ClassicCheckoutSDKApi extends Service {

    /**
     * @summary Create a payment session
     * @param idempotencyKey A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     * @param paymentSetupRequest 
     */
    public async paymentSession(paymentSetupRequest: PaymentSetupRequest, requestOptions?: IRequest.Options): Promise<PaymentSetupResponse> {
        const localVarPath = "/paymentSession";
        const resource = new CheckoutResource(this, localVarPath);
        const request: PaymentSetupRequest = ObjectSerializer.serialize(paymentSetupRequest, "PaymentSetupRequest");
        const response = await getJsonResponse<PaymentSetupRequest, PaymentSetupResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PaymentSetupResponse");
    }

    /**
     * @summary Verify a payment result
     * @param idempotencyKey A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     * @param paymentVerificationRequest 
     */
    public async verifyPaymentResult(paymentVerificationRequest: PaymentVerificationRequest, requestOptions?: IRequest.Options): Promise<PaymentVerificationResponse> {
        const localVarPath = "/payments/result";
        const resource = new CheckoutResource(this, localVarPath);
        const request: PaymentVerificationRequest = ObjectSerializer.serialize(paymentVerificationRequest, "PaymentVerificationRequest");
        const response = await getJsonResponse<PaymentVerificationRequest, PaymentVerificationResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PaymentVerificationResponse");
    }
}
