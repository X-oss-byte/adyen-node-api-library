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
import { CheckoutBalanceCheckRequest } from "../../typings/checkout/models";
import { CheckoutBalanceCheckResponse } from "../../typings/checkout/models";
import { CheckoutCancelOrderRequest } from "../../typings/checkout/models";
import { CheckoutCancelOrderResponse } from "../../typings/checkout/models";
import { CheckoutCreateOrderRequest } from "../../typings/checkout/models";
import { CheckoutCreateOrderResponse } from "../../typings/checkout/models";
import { IRequest } from "../../typings/requestOptions";
import CheckoutResource from "../resource/checkoutResource";
import { ObjectSerializer } from "../../typings/checkout/models";

export class OrdersApi extends Service {

    /**
     * @summary Create an order
     * @param idempotencyKey A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     * @param checkoutCreateOrderRequest 
     */
    public async orders(checkoutCreateOrderRequest: CheckoutCreateOrderRequest, requestOptions?: IRequest.Options): Promise<CheckoutCreateOrderResponse> {
        const localVarPath = "/orders";
        const resource = new CheckoutResource(this, localVarPath);
        const request: CheckoutCreateOrderRequest = ObjectSerializer.serialize(checkoutCreateOrderRequest, "CheckoutCreateOrderRequest");
        const response = await getJsonResponse<CheckoutCreateOrderRequest, CheckoutCreateOrderResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "CheckoutCreateOrderResponse");
    }

    /**
     * @summary Cancel an order
     * @param idempotencyKey A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     * @param checkoutCancelOrderRequest 
     */
    public async cancelOrder(checkoutCancelOrderRequest: CheckoutCancelOrderRequest, requestOptions?: IRequest.Options): Promise<CheckoutCancelOrderResponse> {
        const localVarPath = "/orders/cancel";
        const resource = new CheckoutResource(this, localVarPath);
        const request: CheckoutCancelOrderRequest = ObjectSerializer.serialize(checkoutCancelOrderRequest, "CheckoutCancelOrderRequest");
        const response = await getJsonResponse<CheckoutCancelOrderRequest, CheckoutCancelOrderResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "CheckoutCancelOrderResponse");
    }

    /**
     * @summary Get the balance of a gift card
     * @param idempotencyKey A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     * @param checkoutBalanceCheckRequest 
     */
    public async getBalanceOfGiftCard(checkoutBalanceCheckRequest: CheckoutBalanceCheckRequest, requestOptions?: IRequest.Options): Promise<CheckoutBalanceCheckResponse> {
        const localVarPath = "/paymentMethods/balance";
        const resource = new CheckoutResource(this, localVarPath);
        const request: CheckoutBalanceCheckRequest = ObjectSerializer.serialize(checkoutBalanceCheckRequest, "CheckoutBalanceCheckRequest");
        const response = await getJsonResponse<CheckoutBalanceCheckRequest, CheckoutBalanceCheckResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "CheckoutBalanceCheckResponse");
    }
}
