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


import { OutputResult } from './outputResult';

export class DisplayResponse {
    'OutputResult': Array<OutputResult>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "OutputResult",
            "baseName": "OutputResult",
            "type": "Array<OutputResult>"
        }    ];

    static getAttributeTypeMap() {
        return DisplayResponse.attributeTypeMap;
    }
}

