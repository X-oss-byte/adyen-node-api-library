/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { KYCCheckStatusData } from './kYCCheckStatusData';

export class KYCShareholderCheckResult {
    /**
    * A list of the checks and their statuses.
    */
    'checks'?: Array<KYCCheckStatusData>;
    /**
    * The unique ID of the legal arrangement to which the shareholder belongs, if applicable.
    */
    'legalArrangementCode'?: string;
    /**
    * The unique ID of the legal arrangement entity to which the shareholder belongs, if applicable.
    */
    'legalArrangementEntityCode'?: string;
    /**
    * The code of the shareholder to which the check applies.
    */
    'shareholderCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checks",
            "baseName": "checks",
            "type": "Array<KYCCheckStatusData>"
        },
        {
            "name": "legalArrangementCode",
            "baseName": "legalArrangementCode",
            "type": "string"
        },
        {
            "name": "legalArrangementEntityCode",
            "baseName": "legalArrangementEntityCode",
            "type": "string"
        },
        {
            "name": "shareholderCode",
            "baseName": "shareholderCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return KYCShareholderCheckResult.attributeTypeMap;
    }
}

