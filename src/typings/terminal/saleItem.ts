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



export class SaleItem {
    'AdditionalProductInfo'?: string;
    'EanUpc'?: string;
    'ItemAmount': number;
    'ItemID': number;
    'ProductCode': string;
    'ProductLabel'?: string;
    'Quantity'?: number;
    'SaleChannel'?: string;
    'TaxCode'?: string;
    'UnitOfMeasure'?: SaleItem.UnitOfMeasureEnum;
    'UnitPrice'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AdditionalProductInfo",
            "baseName": "AdditionalProductInfo",
            "type": "string"
        },
        {
            "name": "EanUpc",
            "baseName": "EanUpc",
            "type": "string"
        },
        {
            "name": "ItemAmount",
            "baseName": "ItemAmount",
            "type": "number"
        },
        {
            "name": "ItemID",
            "baseName": "ItemID",
            "type": "number"
        },
        {
            "name": "ProductCode",
            "baseName": "ProductCode",
            "type": "string"
        },
        {
            "name": "ProductLabel",
            "baseName": "ProductLabel",
            "type": "string"
        },
        {
            "name": "Quantity",
            "baseName": "Quantity",
            "type": "number"
        },
        {
            "name": "SaleChannel",
            "baseName": "SaleChannel",
            "type": "string"
        },
        {
            "name": "TaxCode",
            "baseName": "TaxCode",
            "type": "string"
        },
        {
            "name": "UnitOfMeasure",
            "baseName": "UnitOfMeasure",
            "type": "SaleItem.UnitOfMeasureEnum"
        },
        {
            "name": "UnitPrice",
            "baseName": "UnitPrice",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SaleItem.attributeTypeMap;
    }
}

export namespace SaleItem {
    export enum UnitOfMeasureEnum {
        Case = <any> 'Case',
        Centilitre = <any> 'Centilitre',
        Centimetre = <any> 'Centimetre',
        Foot = <any> 'Foot',
        Gram = <any> 'Gram',
        Inch = <any> 'Inch',
        Kilogram = <any> 'Kilogram',
        Kilometre = <any> 'Kilometre',
        Litre = <any> 'Litre',
        Meter = <any> 'Meter',
        Mile = <any> 'Mile',
        Other = <any> 'Other',
        Ounce = <any> 'Ounce',
        Pint = <any> 'Pint',
        Pound = <any> 'Pound',
        Quart = <any> 'Quart',
        UkGallon = <any> 'UKGallon',
        UsGallon = <any> 'USGallon',
        Yard = <any> 'Yard'
    }
}
