/*
 * The version of the OpenAPI document: v68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class ThreeDS1Result {
    /**
    * The cardholder authentication value (base64 encoded).
    */
    'cavv'?: string;
    /**
    * The CAVV algorithm used.
    */
    'cavvAlgorithm'?: string;
    /**
    * 3D Secure Electronic Commerce Indicator (ECI).
    */
    'eci'?: string;
    /**
    * The authentication response from the ACS.
    */
    'threeDAuthenticatedResponse'?: string;
    /**
    * Whether 3D Secure was offered or not.
    */
    'threeDOfferedResponse'?: string;
    /**
    * A unique transaction identifier generated by the MPI on behalf of the merchant to identify the 3D Secure transaction, in `Base64` encoding.
    */
    'xid'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cavv",
            "baseName": "cavv",
            "type": "string"
        },
        {
            "name": "cavvAlgorithm",
            "baseName": "cavvAlgorithm",
            "type": "string"
        },
        {
            "name": "eci",
            "baseName": "eci",
            "type": "string"
        },
        {
            "name": "threeDAuthenticatedResponse",
            "baseName": "threeDAuthenticatedResponse",
            "type": "string"
        },
        {
            "name": "threeDOfferedResponse",
            "baseName": "threeDOfferedResponse",
            "type": "string"
        },
        {
            "name": "xid",
            "baseName": "xid",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ThreeDS1Result.attributeTypeMap;
    }
}

