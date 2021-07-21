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


import { CustomerOrder } from './customerOrder';
import { LoyaltyAccount } from './loyaltyAccount';
import { POIData } from './pOIData';
import { PaymentInstrumentData } from './paymentInstrumentData';
import { Response } from './response';
import { SaleData } from './saleData';

export class CardAcquisitionResponse {
    'CustomerOrder'?: Array<CustomerOrder>;
    'LoyaltyAccount'?: Array<LoyaltyAccount>;
    'PaymentBrand'?: Array<string>;
    'PaymentInstrumentData'?: PaymentInstrumentData;
    'POIData': POIData;
    'Response': Response;
    'SaleData': SaleData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "CustomerOrder",
            "baseName": "CustomerOrder",
            "type": "Array<CustomerOrder>"
        },
        {
            "name": "LoyaltyAccount",
            "baseName": "LoyaltyAccount",
            "type": "Array<LoyaltyAccount>"
        },
        {
            "name": "PaymentBrand",
            "baseName": "PaymentBrand",
            "type": "Array<string>"
        },
        {
            "name": "PaymentInstrumentData",
            "baseName": "PaymentInstrumentData",
            "type": "PaymentInstrumentData"
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
        return CardAcquisitionResponse.attributeTypeMap;
    }
}

