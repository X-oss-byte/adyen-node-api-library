/**
 * Terminal API
 * Definition of Terminal API Schema
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Response } from './response';
import { TransactionTotals } from './transactionTotals';

export class GetTotalsResponse {
    'POIReconciliationID': string;
    'Response': Response;
    'TransactionTotals'?: Array<TransactionTotals>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "POIReconciliationID",
            "baseName": "POIReconciliationID",
            "type": "string"
        },
        {
            "name": "Response",
            "baseName": "Response",
            "type": "Response"
        },
        {
            "name": "TransactionTotals",
            "baseName": "TransactionTotals",
            "type": "Array<TransactionTotals>"
        }    ];

    static getAttributeTypeMap() {
        return GetTotalsResponse.attributeTypeMap;
    }
}

