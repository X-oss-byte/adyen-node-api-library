/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class BalanceAccountBase {
    /**
    * The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/accountHolders__resParam_id) associated with the balance account.
    */
    'accountHolderId': string;
    /**
    * The default three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance account. The default value is **EUR**.
    */
    'defaultCurrencyCode'?: string;
    /**
    * A human-readable description of the balance account, maximum 300 characters. You can use this parameter to distinguish between multiple balance accounts under an account holder.
    */
    'description'?: string;
    /**
    * The unique identifier of the balance account.
    */
    'id': string;
    /**
    * Your reference for the balance account, maximum 150 characters.
    */
    'reference'?: string;
    /**
    * The status of the balance account, set to **active** by default.  
    */
    'status'?: BalanceAccountBase.StatusEnum;
    /**
    * The [time zone](https://www.iana.org/time-zones) of the balance account. For example, **Europe/Amsterdam**. Defaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
    */
    'timeZone'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderId",
            "baseName": "accountHolderId",
            "type": "string"
        },
        {
            "name": "defaultCurrencyCode",
            "baseName": "defaultCurrencyCode",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "BalanceAccountBase.StatusEnum"
        },
        {
            "name": "timeZone",
            "baseName": "timeZone",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BalanceAccountBase.attributeTypeMap;
    }
}

export namespace BalanceAccountBase {
    export enum StatusEnum {
        Active = 'active',
        Closed = 'closed',
        Inactive = 'inactive',
        Suspended = 'suspended'
    }
}
