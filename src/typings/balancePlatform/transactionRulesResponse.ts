/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { TransactionRule } from './transactionRule';

export class TransactionRulesResponse {
    /**
    * List of transaction rules.
    */
    'transactionRules'?: Array<TransactionRule>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transactionRules",
            "baseName": "transactionRules",
            "type": "Array<TransactionRule>"
        }    ];

    static getAttributeTypeMap() {
        return TransactionRulesResponse.attributeTypeMap;
    }
}
