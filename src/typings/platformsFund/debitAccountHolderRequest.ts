/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { Split } from './split';

export class DebitAccountHolderRequest {
    /**
    * The code of the account holder.
    */
    'accountHolderCode': string;
    'amount': Amount;
    /**
    * The Adyen-generated unique alphanumeric identifier (UUID) of the account holder\'s bank account.
    */
    'bankAccountUUID': string;
    /**
    * A description of the direct debit. Maximum length: 35 characters.  Allowed characters: **a-z**, **A-Z**, **0-9**, and special characters **_/?:().,\'+ \";**.
    */
    'description'?: string;
    /**
    * Your merchant account.
    */
    'merchantAccount': string;
    /**
    * Contains instructions on how to split the funds between the accounts in your platform. The request must have at least one split item.
    */
    'splits': Array<Split>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderCode",
            "baseName": "accountHolderCode",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "bankAccountUUID",
            "baseName": "bankAccountUUID",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "splits",
            "baseName": "splits",
            "type": "Array<Split>"
        }    ];

    static getAttributeTypeMap() {
        return DebitAccountHolderRequest.attributeTypeMap;
    }
}

