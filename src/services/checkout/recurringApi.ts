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
import { ListStoredPaymentMethodsResponse } from "../../typings/checkout/models";
import { StoredPaymentMethodResource } from "../../typings/checkout/models";
import { IRequest } from "../../typings/requestOptions";
import CheckoutResource from "../resource/checkoutResource";
import { ObjectSerializer } from "../../typings/checkout/models";

export class RecurringApi extends Service {

    /**
     * @summary Delete a token for stored payment details
     * @param recurringId The unique identifier of the token.
     * @param shopperReference Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters. &gt; Your reference must not include personally identifiable information (PII), for example name or email address.
     * @param merchantAccount Your merchant account.
     */
    public async deleteTokenForStoredPaymentDetails(recurringId: string, requestOptions?: IRequest.Options): Promise<StoredPaymentMethodResource> {
        const localVarPath = "/storedPaymentMethods/{recurringId}"
            .replace("{" + "recurringId" + "}", encodeURIComponent(String(recurringId)));
        const resource = new CheckoutResource(this, localVarPath);
        const response = await getJsonResponse<string, StoredPaymentMethodResource>(
            resource,
            "",
            { ...requestOptions, method: "DELETE" }
        );
        return ObjectSerializer.deserialize(response, "StoredPaymentMethodResource");
    }

    /**
     * @summary Get tokens for stored payment details
     * @param shopperReference Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters. &gt; Your reference must not include personally identifiable information (PII), for example name or email address.
     * @param merchantAccount Your merchant account.
     */
    public async getTokensForStoredPaymentDetails(requestOptions?: IRequest.Options): Promise<ListStoredPaymentMethodsResponse> {
        const localVarPath = "/storedPaymentMethods";
        const resource = new CheckoutResource(this, localVarPath);
        const response = await getJsonResponse<string, ListStoredPaymentMethodsResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ListStoredPaymentMethodsResponse");
    }
}
