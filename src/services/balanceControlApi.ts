/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import Service from "../service";
import { BalanceTransferRequest } from "../typings/balanceControl/models";
import { BalanceTransferResponse } from "../typings/balanceControl/models";
import { IRequest } from "../typings/requestOptions";
import BalanceControlResource from "./resource/balanceControlResource";
import { ObjectSerializer } from "../typings/balanceControl/models";

export class BalanceControlAPI extends Service {
    public constructor(client: Client) {
        super(client);
    }

    /**
    * @summary Start a balance transfer
    * @param balanceTransferRequest {@link BalanceTransferRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link BalanceTransferResponse }
    */
    public async balanceTransfer(balanceTransferRequest: BalanceTransferRequest, requestOptions?: IRequest.Options): Promise<BalanceTransferResponse> {
        const localVarPath = "/balanceTransfer";
        const resource = new BalanceControlResource(this, localVarPath);
        const request: BalanceTransferRequest = ObjectSerializer.serialize(balanceTransferRequest, "BalanceTransferRequest");
        const response = await getJsonResponse<BalanceTransferRequest, BalanceTransferResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "BalanceTransferResponse");
    }
}

export default BalanceControlAPI;
