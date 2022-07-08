/*
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class InstallmentsNumber {
    /**
    * Maximum number of installments
    */
    'maxNumberOfInstallments': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "maxNumberOfInstallments",
            "baseName": "maxNumberOfInstallments",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return InstallmentsNumber.attributeTypeMap;
    }
}

