/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class GetTaxFormRequest {
    /**
    * The account holder code you provided when you created the account holder.
    */
    'accountHolderCode': string;
    /**
    * Type of the requested tax form. For example, 1099-K.
    */
    'formType': string;
    /**
    * Applicable tax year in the YYYY format.
    */
    'year': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderCode",
            "baseName": "accountHolderCode",
            "type": "string"
        },
        {
            "name": "formType",
            "baseName": "formType",
            "type": "string"
        },
        {
            "name": "year",
            "baseName": "year",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return GetTaxFormRequest.attributeTypeMap;
    }
}

