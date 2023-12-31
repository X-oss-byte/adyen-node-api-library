/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class GetUploadedDocumentsRequest {
    /**
    * The code of the Account Holder for which to retrieve the documents.
    */
    'accountHolderCode': string;
    /**
    * The code of the Bank Account for which to retrieve the documents.
    */
    'bankAccountUUID'?: string;
    /**
    * The code of the Shareholder for which to retrieve the documents.
    */
    'shareholderCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderCode",
            "baseName": "accountHolderCode",
            "type": "string"
        },
        {
            "name": "bankAccountUUID",
            "baseName": "bankAccountUUID",
            "type": "string"
        },
        {
            "name": "shareholderCode",
            "baseName": "shareholderCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetUploadedDocumentsRequest.attributeTypeMap;
    }
}

