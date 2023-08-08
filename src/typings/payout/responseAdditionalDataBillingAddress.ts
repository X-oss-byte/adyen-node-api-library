/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class ResponseAdditionalDataBillingAddress {
    /**
    * The billing address city passed in the payment request.
    */
    'billingAddress_city'?: string;
    /**
    * The billing address country passed in the payment request.  Example: NL
    */
    'billingAddress_country'?: string;
    /**
    * The billing address house number or name passed in the payment request.
    */
    'billingAddress_houseNumberOrName'?: string;
    /**
    * The billing address postal code passed in the payment request.  Example: 1011 DJ
    */
    'billingAddress_postalCode'?: string;
    /**
    * The billing address state or province passed in the payment request.  Example: NH
    */
    'billingAddress_stateOrProvince'?: string;
    /**
    * The billing address street passed in the payment request.
    */
    'billingAddress_street'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "billingAddress_city",
            "baseName": "billingAddress.city",
            "type": "string"
        },
        {
            "name": "billingAddress_country",
            "baseName": "billingAddress.country",
            "type": "string"
        },
        {
            "name": "billingAddress_houseNumberOrName",
            "baseName": "billingAddress.houseNumberOrName",
            "type": "string"
        },
        {
            "name": "billingAddress_postalCode",
            "baseName": "billingAddress.postalCode",
            "type": "string"
        },
        {
            "name": "billingAddress_stateOrProvince",
            "baseName": "billingAddress.stateOrProvince",
            "type": "string"
        },
        {
            "name": "billingAddress_street",
            "baseName": "billingAddress.street",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ResponseAdditionalDataBillingAddress.attributeTypeMap;
    }
}
