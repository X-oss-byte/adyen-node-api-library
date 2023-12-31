/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class DocumentReference {
    /**
    * Identifies whether the document is active and used for checks.
    */
    'active'?: boolean;
    /**
    * Your description for the document.
    */
    'description'?: string;
    /**
    * Document name.
    */
    'fileName'?: string;
    /**
    * The unique identifier of the resource.
    */
    'id'?: string;
    /**
    * The modification date of the document.
    */
    'modificationDate'?: Date;
    /**
    * Type of document, used when providing an ID number or uploading a document.
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "fileName",
            "baseName": "fileName",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "modificationDate",
            "baseName": "modificationDate",
            "type": "Date"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DocumentReference.attributeTypeMap;
    }
}

