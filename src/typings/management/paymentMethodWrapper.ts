/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { PaymentMethod } from './paymentMethod';

export class PaymentMethodWrapper {
    'PaymentMethod'?: PaymentMethod;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "PaymentMethod",
            "baseName": "PaymentMethod",
            "type": "PaymentMethod"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodWrapper.attributeTypeMap;
    }
}
