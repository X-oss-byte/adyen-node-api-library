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



export class HostStatus {
    'AcquirerID': string;
    'IsReachableFlag'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AcquirerID",
            "baseName": "AcquirerID",
            "type": "string"
        },
        {
            "name": "IsReachableFlag",
            "baseName": "IsReachableFlag",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return HostStatus.attributeTypeMap;
    }
}

