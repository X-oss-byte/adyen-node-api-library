/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Transaction } from './transaction';

export class AccountTransactionList {
    /**
    * The code of the account.
    */
    'accountCode'?: string;
    /**
    * Indicates whether there is a next page of transactions available.
    */
    'hasNextPage'?: boolean;
    /**
    * The list of transactions.
    */
    'transactions'?: Array<Transaction>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountCode",
            "baseName": "accountCode",
            "type": "string"
        },
        {
            "name": "hasNextPage",
            "baseName": "hasNextPage",
            "type": "boolean"
        },
        {
            "name": "transactions",
            "baseName": "transactions",
            "type": "Array<Transaction>"
        }    ];

    static getAttributeTypeMap() {
        return AccountTransactionList.attributeTypeMap;
    }
}

