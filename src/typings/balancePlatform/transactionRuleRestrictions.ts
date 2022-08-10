/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { ActiveNetworkTokensRestriction } from './activeNetworkTokensRestriction';
import { BrandVariantsRestriction } from './brandVariantsRestriction';
import { CountriesRestriction } from './countriesRestriction';
import { DifferentCurrenciesRestriction } from './differentCurrenciesRestriction';
import { EntryModesRestriction } from './entryModesRestriction';
import { InternationalTransactionRestriction } from './internationalTransactionRestriction';
import { MatchingTransactionsRestriction } from './matchingTransactionsRestriction';
import { MccsRestriction } from './mccsRestriction';
import { MerchantsRestriction } from './merchantsRestriction';
import { ProcessingTypesRestriction } from './processingTypesRestriction';
import { TimeOfDayRestriction } from './timeOfDayRestriction';
import { TotalAmountRestriction } from './totalAmountRestriction';

export class TransactionRuleRestrictions {
    'activeNetworkTokens'?: ActiveNetworkTokensRestriction;
    'brandVariants'?: BrandVariantsRestriction;
    'countries'?: CountriesRestriction;
    'differentCurrencies'?: DifferentCurrenciesRestriction;
    'entryModes'?: EntryModesRestriction;
    'internationalTransaction'?: InternationalTransactionRestriction;
    'matchingTransactions'?: MatchingTransactionsRestriction;
    'mccs'?: MccsRestriction;
    'merchants'?: MerchantsRestriction;
    'processingTypes'?: ProcessingTypesRestriction;
    'timeOfDay'?: TimeOfDayRestriction;
    'totalAmount'?: TotalAmountRestriction;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "activeNetworkTokens",
            "baseName": "activeNetworkTokens",
            "type": "ActiveNetworkTokensRestriction"
        },
        {
            "name": "brandVariants",
            "baseName": "brandVariants",
            "type": "BrandVariantsRestriction"
        },
        {
            "name": "countries",
            "baseName": "countries",
            "type": "CountriesRestriction"
        },
        {
            "name": "differentCurrencies",
            "baseName": "differentCurrencies",
            "type": "DifferentCurrenciesRestriction"
        },
        {
            "name": "entryModes",
            "baseName": "entryModes",
            "type": "EntryModesRestriction"
        },
        {
            "name": "internationalTransaction",
            "baseName": "internationalTransaction",
            "type": "InternationalTransactionRestriction"
        },
        {
            "name": "matchingTransactions",
            "baseName": "matchingTransactions",
            "type": "MatchingTransactionsRestriction"
        },
        {
            "name": "mccs",
            "baseName": "mccs",
            "type": "MccsRestriction"
        },
        {
            "name": "merchants",
            "baseName": "merchants",
            "type": "MerchantsRestriction"
        },
        {
            "name": "processingTypes",
            "baseName": "processingTypes",
            "type": "ProcessingTypesRestriction"
        },
        {
            "name": "timeOfDay",
            "baseName": "timeOfDay",
            "type": "TimeOfDayRestriction"
        },
        {
            "name": "totalAmount",
            "baseName": "totalAmount",
            "type": "TotalAmountRestriction"
        }    ];

    static getAttributeTypeMap() {
        return TransactionRuleRestrictions.attributeTypeMap;
    }
}
