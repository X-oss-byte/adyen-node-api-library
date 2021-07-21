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


import { LoyaltyResult } from './loyaltyResult';
import { POIData } from './pOIData';
import { PaymentReceipt } from './paymentReceipt';
import { Response } from './response';
import { SaleData } from './saleData';

export class LoyaltyResponse {
    'LoyaltyResult'?: Array<LoyaltyResult>;
    'PaymentReceipt'?: Array<PaymentReceipt>;
    'POIData': POIData;
    'Response': Response;
    'SaleData': SaleData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "LoyaltyResult",
            "baseName": "LoyaltyResult",
            "type": "Array<LoyaltyResult>"
        },
        {
            "name": "PaymentReceipt",
            "baseName": "PaymentReceipt",
            "type": "Array<PaymentReceipt>"
        },
        {
            "name": "POIData",
            "baseName": "POIData",
            "type": "POIData"
        },
        {
            "name": "Response",
            "baseName": "Response",
            "type": "Response"
        },
        {
            "name": "SaleData",
            "baseName": "SaleData",
            "type": "SaleData"
        }    ];

    static getAttributeTypeMap() {
        return LoyaltyResponse.attributeTypeMap;
    }
}

