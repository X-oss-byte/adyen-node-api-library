/*
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
 */
 
/**
 * Terminal API
 * Definition of Terminal API Schema
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ReconciliationType } from './reconciliationType';

export class ReconciliationRequest {
    'AcquirerID'?: Array<string>;
    'POIReconciliationID'?: string;
    'ReconciliationType': ReconciliationType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AcquirerID",
            "baseName": "AcquirerID",
            "type": "Array<string>"
        },
        {
            "name": "POIReconciliationID",
            "baseName": "POIReconciliationID",
            "type": "string"
        },
        {
            "name": "ReconciliationType",
            "baseName": "ReconciliationType",
            "type": "ReconciliationType"
        }    ];

    static getAttributeTypeMap() {
        return ReconciliationRequest.attributeTypeMap;
    }
}

