/**
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 *
 * Adyen for Platforms: Notifications
 * The Notification API sends notifications to the endpoints specified in a given subscription. Subscriptions are managed through the Notification Configuration API. The API specifications listed here detail the format of each notification.  For more information, refer to our [documentation](https://docs.adyen.com/platforms/notifications).
 *
 * The version of the OpenAPI document: 6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AccountHolderDetails } from './accountHolderDetails';
import { AccountHolderStatus } from './accountHolderStatus';
import { ErrorFieldType } from './errorFieldType';
import { KYCVerificationResult2 } from './kYCVerificationResult2';

export class CreateAccountHolderResponse {
    /**
    * The code of a new account created for the account holder.
    */
    'accountCode'?: string;
    /**
    * The code of the new account holder.
    */
    'accountHolderCode': string;
    'accountHolderDetails': AccountHolderDetails;
    'accountHolderStatus': AccountHolderStatus;
    /**
    * The description of the new account holder.
    */
    'description'?: string;
    /**
    * A list of fields that caused the `/createAccountHolder` request to fail.
    */
    'invalidFields'?: Array<ErrorFieldType>;
    /**
    * The type of legal entity of the new account holder.
    */
    'legalEntity': CreateAccountHolderResponse.LegalEntityEnum;
    /**
    * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.
    */
    'primaryCurrency'?: string;
    /**
    * The reference of a request. Can be used to uniquely identify the request.
    */
    'pspReference'?: string;
    /**
    * The result code.
    */
    'resultCode'?: string;
    'verification': KYCVerificationResult2;
    /**
    * The identifier of the profile that applies to this entity.
    */
    'verificationProfile'?: string;
}

export namespace CreateAccountHolderResponse {
    export enum LegalEntityEnum {
        Business = <any> 'Business',
        Individual = <any> 'Individual',
        NonProfit = <any> 'NonProfit',
        Partnership = <any> 'Partnership',
        PublicCompany = <any> 'PublicCompany'
    }
}