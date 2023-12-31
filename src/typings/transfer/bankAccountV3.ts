/*
 * The version of the OpenAPI document: v3
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AULocalAccountIdentification } from './aULocalAccountIdentification';
import { BRLocalAccountIdentification } from './bRLocalAccountIdentification';
import { CALocalAccountIdentification } from './cALocalAccountIdentification';
import { CZLocalAccountIdentification } from './cZLocalAccountIdentification';
import { DKLocalAccountIdentification } from './dKLocalAccountIdentification';
import { HULocalAccountIdentification } from './hULocalAccountIdentification';
import { IbanAccountIdentification } from './ibanAccountIdentification';
import { NOLocalAccountIdentification } from './nOLocalAccountIdentification';
import { NumberAndBicAccountIdentification } from './numberAndBicAccountIdentification';
import { PLLocalAccountIdentification } from './pLLocalAccountIdentification';
import { PartyIdentification2 } from './partyIdentification2';
import { SELocalAccountIdentification } from './sELocalAccountIdentification';
import { SGLocalAccountIdentification } from './sGLocalAccountIdentification';
import { UKLocalAccountIdentification } from './uKLocalAccountIdentification';
import { USLocalAccountIdentification } from './uSLocalAccountIdentification';

export class BankAccountV3 {
    'accountHolder': PartyIdentification2;
    /**
    * Contains the bank account details. The fields required in this object depend on the country of the bank account and the currency of the transfer.
    */
    'accountIdentification': AULocalAccountIdentification | BRLocalAccountIdentification | CALocalAccountIdentification | CZLocalAccountIdentification | DKLocalAccountIdentification | HULocalAccountIdentification | IbanAccountIdentification | NOLocalAccountIdentification | NumberAndBicAccountIdentification | PLLocalAccountIdentification | SELocalAccountIdentification | SGLocalAccountIdentification | UKLocalAccountIdentification | USLocalAccountIdentification;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolder",
            "baseName": "accountHolder",
            "type": "PartyIdentification2"
        },
        {
            "name": "accountIdentification",
            "baseName": "accountIdentification",
            "type": "AULocalAccountIdentification | BRLocalAccountIdentification | CALocalAccountIdentification | CZLocalAccountIdentification | DKLocalAccountIdentification | HULocalAccountIdentification | IbanAccountIdentification | NOLocalAccountIdentification | NumberAndBicAccountIdentification | PLLocalAccountIdentification | SELocalAccountIdentification | SGLocalAccountIdentification | UKLocalAccountIdentification | USLocalAccountIdentification"
        }    ];

    static getAttributeTypeMap() {
        return BankAccountV3.attributeTypeMap;
    }
}

