/*
 * The version of the OpenAPI document: v68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AdditionalDataLodging {
    /**
    * The arrival date. * Date format: **yyyyMmDd**. For example, for 2023 April 22, **20230422**.
    */
    'lodging_checkInDate'?: string;
    /**
    * The departure date. * Date format: **yyyyMmDd**. For example, for 2023 April 22, **20230422**.
    */
    'lodging_checkOutDate'?: string;
    /**
    * The toll-free phone number for the lodging. * Format: alphanumeric. * Max length: 17 characters. * For US numbers: must start with 3 digits and be at least 10 characters in length. Otherwise, the capture can fail.
    */
    'lodging_customerServiceTollFreeNumber'?: string;
    /**
    * Identifies that the facility complies with the Hotel and Motel Fire Safety Act of 1990. Values can be: \'Y\' or \'N\'. * Format: alphabetic. * Max length: 1 character.
    */
    'lodging_fireSafetyActIndicator'?: string;
    /**
    * The folio cash advances. * Format: numeric. * Max length: 12 characters.
    */
    'lodging_folioCashAdvances'?: string;
    /**
    * The card acceptor’s internal invoice or billing ID reference number. * Format: alphanumeric. * Max length: 25 characters.
    */
    'lodging_folioNumber'?: string;
    /**
    * The additional charges for food and beverages associated with the booking. * Format: numeric. * Max length: 12 characters.
    */
    'lodging_foodBeverageCharges'?: string;
    /**
    * Indicates if the customer didn\'t check in for their booking.  Possible values:   * **Y**: the customer didn\'t check in.   **N**: the customer checked in.
    */
    'lodging_noShowIndicator'?: string;
    /**
    * The prepaid expenses for the booking. * Format: numeric. * Max length: 12 characters.
    */
    'lodging_prepaidExpenses'?: string;
    /**
    * Identifies the location of the lodging by its local phone number. * Format: alphanumeric. * Max length: 17 characters. * For US numbers: must start with 3 digits and be at least 10 characters in length. Otherwise, the capture can fail.
    */
    'lodging_propertyPhoneNumber'?: string;
    /**
    * The total number of nights the room is booked for. * Format: numeric. * Max length: 4 characters.
    */
    'lodging_room1_numberOfNights'?: string;
    /**
    * The rate of the room. * Format: numeric. * Max length: 12 characters. * Must be in [minor units](https://docs.adyen.com/development-resources/currency-codes).
    */
    'lodging_room1_rate'?: string;
    /**
    * The total amount of tax to be paid. * Format: numeric. * Max length: 12 chracters. * Must be in [minor units](https://docs.adyen.com/development-resources/currency-codes).
    */
    'lodging_room1_tax'?: string;
    /**
    * The total room tax amount. * Format: numeric. * Max length: 12 characters. * Must be in [minor units](https://docs.adyen.com/development-resources/currency-codes).
    */
    'lodging_totalRoomTax'?: string;
    /**
    * The total tax amount. * Format: numeric. * Max length: 12 characters. * Must be in [minor units](https://docs.adyen.com/development-resources/currency-codes).
    */
    'lodging_totalTax'?: string;
    /**
    * The number of nights. This should be included in the auth message. * Format: numeric. * Max length: 2 characters.
    */
    'travelEntertainmentAuthData_duration'?: string;
    /**
    * Indicates what market-specific dataset will be submitted or is being submitted. Value should be \"H\" for Hotel. This should be included in the auth message.  * Format: alphanumeric. * Max length: 1 character.
    */
    'travelEntertainmentAuthData_market'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "lodging_checkInDate",
            "baseName": "lodging.checkInDate",
            "type": "string"
        },
        {
            "name": "lodging_checkOutDate",
            "baseName": "lodging.checkOutDate",
            "type": "string"
        },
        {
            "name": "lodging_customerServiceTollFreeNumber",
            "baseName": "lodging.customerServiceTollFreeNumber",
            "type": "string"
        },
        {
            "name": "lodging_fireSafetyActIndicator",
            "baseName": "lodging.fireSafetyActIndicator",
            "type": "string"
        },
        {
            "name": "lodging_folioCashAdvances",
            "baseName": "lodging.folioCashAdvances",
            "type": "string"
        },
        {
            "name": "lodging_folioNumber",
            "baseName": "lodging.folioNumber",
            "type": "string"
        },
        {
            "name": "lodging_foodBeverageCharges",
            "baseName": "lodging.foodBeverageCharges",
            "type": "string"
        },
        {
            "name": "lodging_noShowIndicator",
            "baseName": "lodging.noShowIndicator",
            "type": "string"
        },
        {
            "name": "lodging_prepaidExpenses",
            "baseName": "lodging.prepaidExpenses",
            "type": "string"
        },
        {
            "name": "lodging_propertyPhoneNumber",
            "baseName": "lodging.propertyPhoneNumber",
            "type": "string"
        },
        {
            "name": "lodging_room1_numberOfNights",
            "baseName": "lodging.room1.numberOfNights",
            "type": "string"
        },
        {
            "name": "lodging_room1_rate",
            "baseName": "lodging.room1.rate",
            "type": "string"
        },
        {
            "name": "lodging_room1_tax",
            "baseName": "lodging.room1.tax",
            "type": "string"
        },
        {
            "name": "lodging_totalRoomTax",
            "baseName": "lodging.totalRoomTax",
            "type": "string"
        },
        {
            "name": "lodging_totalTax",
            "baseName": "lodging.totalTax",
            "type": "string"
        },
        {
            "name": "travelEntertainmentAuthData_duration",
            "baseName": "travelEntertainmentAuthData.duration",
            "type": "string"
        },
        {
            "name": "travelEntertainmentAuthData_market",
            "baseName": "travelEntertainmentAuthData.market",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AdditionalDataLodging.attributeTypeMap;
    }
}

