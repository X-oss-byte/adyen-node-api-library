/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { ShippingLocation } from './shippingLocation';

export class ShippingLocationsResponse {
    /**
    * Physical locations where orders can be shipped to.
    */
    'data'?: Array<ShippingLocation>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<ShippingLocation>"
        }    ];

    static getAttributeTypeMap() {
        return ShippingLocationsResponse.attributeTypeMap;
    }
}
