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


export class AccountHolderUpcomingDeadlineNotificationContent {
    /**
    * The code of the account holder whom the event refers to.
    */
    'accountHolderCode'?: string;
    /**
    * The event name that will be trigger if no action is taken.
    */
    'event'?: AccountHolderUpcomingDeadlineNotificationContent.EventEnum;
    /**
    * The execution date scheduled for the event.
    */
    'executionDate'?: Date;
    /**
    * The reason that leads to scheduling of the event.
    */
    'reason'?: string;
}

export namespace AccountHolderUpcomingDeadlineNotificationContent {
    export enum EventEnum {
        AccessPii = <any> 'AccessPii',
        ApiTierUpdate = <any> 'ApiTierUpdate',
        CloseAccount = <any> 'CloseAccount',
        CloseStores = <any> 'CloseStores',
        DeleteBankAccounts = <any> 'DeleteBankAccounts',
        DeletePayoutMethods = <any> 'DeletePayoutMethods',
        DeleteShareholders = <any> 'DeleteShareholders',
        DeleteSignatories = <any> 'DeleteSignatories',
        InactivateAccount = <any> 'InactivateAccount',
        KycDeadlineExtension = <any> 'KYCDeadlineExtension',
        RecalculateAccountStatusAndProcessingTier = <any> 'RecalculateAccountStatusAndProcessingTier',
        RefundNotPaidOutTransfers = <any> 'RefundNotPaidOutTransfers',
        ResolveEvents = <any> 'ResolveEvents',
        SaveAccountHolder = <any> 'SaveAccountHolder',
        SaveCriminalityAndPepChecks = <any> 'SaveCriminalityAndPEPChecks',
        SaveKycCheckStatus = <any> 'SaveKYCCheckStatus',
        SuspendAccount = <any> 'SuspendAccount',
        UnSuspendAccount = <any> 'UnSuspendAccount',
        UpdateAccountHolderState = <any> 'UpdateAccountHolderState',
        Verification = <any> 'Verification'
    }
}
