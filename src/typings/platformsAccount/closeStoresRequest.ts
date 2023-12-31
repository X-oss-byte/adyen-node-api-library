/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class CloseStoresRequest {
    /**
    * The code of the account holder.
    */
    'accountHolderCode': string;
    /**
    * List of stores to be closed.
    */
    'stores': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderCode",
            "baseName": "accountHolderCode",
            "type": "string"
        },
        {
            "name": "stores",
            "baseName": "stores",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return CloseStoresRequest.attributeTypeMap;
    }
}

