/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';

export class BalanceTransferRequest {
    'amount': Amount;
    /**
    * A human-readable description for the transfer. You can use alphanumeric characters and hyphens. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.
    */
    'description'?: string;
    /**
    * The unique identifier of the source merchant account from which funds are deducted.
    */
    'fromMerchant': string;
    /**
    * A reference for the balance transfer. If you don\'t provide this in the request, Adyen generates a unique reference. Maximum length: 80 characters.
    */
    'reference'?: string;
    /**
    * The unique identifier of the destination merchant account from which funds are transferred.
    */
    'toMerchant': string;
    /**
    * The type of balance transfer. Possible values: **tax**, **fee**, **terminalSale**, **credit**, **debit**, and **adjustment**.
    */
    'type': BalanceTransferRequest.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "fromMerchant",
            "baseName": "fromMerchant",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "toMerchant",
            "baseName": "toMerchant",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "BalanceTransferRequest.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return BalanceTransferRequest.attributeTypeMap;
    }
}

export namespace BalanceTransferRequest {
    export enum TypeEnum {
        Tax = 'tax',
        Fee = 'fee',
        TerminalSale = 'terminalSale',
        Credit = 'credit',
        Debit = 'debit',
        Adjustment = 'adjustment'
    }
}