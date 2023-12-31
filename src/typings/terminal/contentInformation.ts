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


import { AuthenticatedData } from './authenticatedData';
import { ContentType } from './contentType';
import { DigestedData } from './digestedData';
import { EnvelopedData } from './envelopedData';
import { NamedKeyEncryptedData } from './namedKeyEncryptedData';
import { SignedData } from './signedData';

export class ContentInformation {
    'AuthenticatedData'?: AuthenticatedData;
    'ContentType': ContentType;
    'DigestedData'?: DigestedData;
    'EnvelopedData'?: EnvelopedData;
    'NamedKeyEncryptedData'?: NamedKeyEncryptedData;
    'SignedData'?: SignedData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AuthenticatedData",
            "baseName": "AuthenticatedData",
            "type": "AuthenticatedData"
        },
        {
            "name": "ContentType",
            "baseName": "ContentType",
            "type": "ContentType"
        },
        {
            "name": "DigestedData",
            "baseName": "DigestedData",
            "type": "DigestedData"
        },
        {
            "name": "EnvelopedData",
            "baseName": "EnvelopedData",
            "type": "EnvelopedData"
        },
        {
            "name": "NamedKeyEncryptedData",
            "baseName": "NamedKeyEncryptedData",
            "type": "NamedKeyEncryptedData"
        },
        {
            "name": "SignedData",
            "baseName": "SignedData",
            "type": "SignedData"
        }    ];

    static getAttributeTypeMap() {
        return ContentInformation.attributeTypeMap;
    }
}

