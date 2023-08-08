/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { ReportNotificationData } from './reportNotificationData';

export class ReportNotificationRequest {
    'data': ReportNotificationData;
    /**
    * The environment from which the webhook originated.  Possible values: **test**, **live**.
    */
    'environment': string;
    /**
    * Type of webhook.
    */
    'type': ReportNotificationRequest.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "ReportNotificationData"
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ReportNotificationRequest.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return ReportNotificationRequest.attributeTypeMap;
    }
}

export namespace ReportNotificationRequest {
    export enum TypeEnum {
        BalancePlatformReportCreated = 'balancePlatform.report.created'
    }
}