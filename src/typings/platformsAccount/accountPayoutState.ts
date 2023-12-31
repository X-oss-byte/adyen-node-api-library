/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';

export class AccountPayoutState {
    /**
    * Indicates whether payouts are allowed. This field is the overarching payout status, and is the aggregate of multiple conditions (e.g., KYC status, disabled flag, etc). If this field is false, no payouts will be permitted for any of the account holder\'s accounts. If this field is true, payouts will be permitted for any of the account holder\'s accounts.
    */
    'allowPayout'?: boolean;
    /**
    * The reason why payouts (to all of the account holder\'s accounts) have been disabled (by the platform). If the `disabled` field is true, this field can be used to explain why.
    */
    'disableReason'?: string;
    /**
    * Indicates whether payouts have been disabled (by the platform) for all of the account holder\'s accounts. A platform may enable and disable this field at their discretion. If this field is true, `allowPayout` will be false and no payouts will be permitted for any of the account holder\'s accounts. If this field is false, `allowPayout` may or may not be enabled, depending on other factors.
    */
    'disabled'?: boolean;
    /**
    * The reason why payouts (to all of the account holder\'s accounts) have been disabled (by Adyen). If payouts have been disabled by Adyen, this field will explain why. If this field is blank, payouts have not been disabled by Adyen.
    */
    'notAllowedReason'?: string;
    'payoutLimit'?: Amount;
    /**
    * The payout tier that the account holder occupies.
    */
    'tierNumber'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowPayout",
            "baseName": "allowPayout",
            "type": "boolean"
        },
        {
            "name": "disableReason",
            "baseName": "disableReason",
            "type": "string"
        },
        {
            "name": "disabled",
            "baseName": "disabled",
            "type": "boolean"
        },
        {
            "name": "notAllowedReason",
            "baseName": "notAllowedReason",
            "type": "string"
        },
        {
            "name": "payoutLimit",
            "baseName": "payoutLimit",
            "type": "Amount"
        },
        {
            "name": "tierNumber",
            "baseName": "tierNumber",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AccountPayoutState.attributeTypeMap;
    }
}

