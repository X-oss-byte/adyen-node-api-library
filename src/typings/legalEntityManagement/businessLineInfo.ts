/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { SourceOfFunds } from './sourceOfFunds';
import { WebData } from './webData';
import { WebDataExemption } from './webDataExemption';

export class BusinessLineInfo {
    /**
    * The capability for which you are creating the business line. For example, **receivePayments**.
    */
    'capability': string;
    /**
    * A code that represents the industry of the legal entity. For example, **4431A** for computer software stores.
    */
    'industryCode': string;
    /**
    * Unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) that owns the business line.
    */
    'legalEntityId': string;
    /**
    * A list of channels where goods or services are sold. You cannot combine point of sale and ecommerce in one business line.  Possible values and combinations:  - For point of sale: **pos** and **posMoto**  - For ecommerce: **eCommerce** and **ecomMoto**  - For Pay by Link: **payByLink**  Required only in combination with the `capability` to **receivePayments** or **receiveFromPlatformPayments**.
    */
    'salesChannels'?: Array<string>;
    'sourceOfFunds'?: SourceOfFunds;
    /**
    * List of website URLs where your user\'s goods or services are sold. When this is required for a capability but your user does not have an online presence, provide the reason in the `webDataExemption` object.
    */
    'webData'?: Array<WebData>;
    'webDataExemption'?: WebDataExemption;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "capability",
            "baseName": "capability",
            "type": "string"
        },
        {
            "name": "industryCode",
            "baseName": "industryCode",
            "type": "string"
        },
        {
            "name": "legalEntityId",
            "baseName": "legalEntityId",
            "type": "string"
        },
        {
            "name": "salesChannels",
            "baseName": "salesChannels",
            "type": "Array<string>"
        },
        {
            "name": "sourceOfFunds",
            "baseName": "sourceOfFunds",
            "type": "SourceOfFunds"
        },
        {
            "name": "webData",
            "baseName": "webData",
            "type": "Array<WebData>"
        },
        {
            "name": "webDataExemption",
            "baseName": "webDataExemption",
            "type": "WebDataExemption"
        }    ];

    static getAttributeTypeMap() {
        return BusinessLineInfo.attributeTypeMap;
    }
}
