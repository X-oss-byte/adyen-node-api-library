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
import { CreatePaymentLinkRequest } from "../../typings/checkout/models";
import { PaymentLinkResponse } from "../../typings/checkout/models";
import { UpdatePaymentLinkRequest } from "../../typings/checkout/models";
import { IRequest } from "../../typings/requestOptions";
import CheckoutResource from "../resource/checkoutResource";
import { ObjectSerializer } from "../../typings/checkout/models";

export class PaymentLinksApi extends Service {

    /**
     * @summary Get a payment link
     * @param linkId Unique identifier of the payment link.
     */
    public async getPaymentLink(linkId: string, requestOptions?: IRequest.Options): Promise<PaymentLinkResponse> {
        const localVarPath = "/paymentLinks/{linkId}"
            .replace("{" + "linkId" + "}", encodeURIComponent(String(linkId)));
        const resource = new CheckoutResource(this, localVarPath);
        const response = await getJsonResponse<string, PaymentLinkResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "PaymentLinkResponse");
    }

    /**
     * @summary Update the status of a payment link
     * @param linkId Unique identifier of the payment link.
     * @param updatePaymentLinkRequest 
     */
    public async updatePaymentLink(linkId: string, updatePaymentLinkRequest: UpdatePaymentLinkRequest, requestOptions?: IRequest.Options): Promise<PaymentLinkResponse> {
        const localVarPath = "/paymentLinks/{linkId}"
            .replace("{" + "linkId" + "}", encodeURIComponent(String(linkId)));
        const resource = new CheckoutResource(this, localVarPath);
        const request: UpdatePaymentLinkRequest = ObjectSerializer.serialize(updatePaymentLinkRequest, "UpdatePaymentLinkRequest");
        const response = await getJsonResponse<UpdatePaymentLinkRequest, PaymentLinkResponse>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "PaymentLinkResponse");
    }

    /**
     * @summary Create a payment link
     * @param idempotencyKey A unique identifier for the message with a maximum of 64 characters (we recommend a UUID).
     * @param createPaymentLinkRequest 
     */
    public async paymentLinks(createPaymentLinkRequest: CreatePaymentLinkRequest, requestOptions?: IRequest.Options): Promise<PaymentLinkResponse> {
        const localVarPath = "/paymentLinks";
        const resource = new CheckoutResource(this, localVarPath);
        const request: CreatePaymentLinkRequest = ObjectSerializer.serialize(createPaymentLinkRequest, "CreatePaymentLinkRequest");
        const response = await getJsonResponse<CreatePaymentLinkRequest, PaymentLinkResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "PaymentLinkResponse");
    }
}