/*
 * The version of the OpenAPI document: v3
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import { AcceptTermsOfServiceRequest } from "../../typings/legalEntityManagement/models";
import { AcceptTermsOfServiceResponse } from "../../typings/legalEntityManagement/models";
import { GetTermsOfServiceAcceptanceInfosResponse } from "../../typings/legalEntityManagement/models";
import { GetTermsOfServiceDocumentRequest } from "../../typings/legalEntityManagement/models";
import { GetTermsOfServiceDocumentResponse } from "../../typings/legalEntityManagement/models";
import { IRequest } from "../../typings/requestOptions";
import LegalEntityManagementResource from "../resource/legalEntityManagementResource";
import { ObjectSerializer } from "../../typings/legalEntityManagement/models";

export class TermsOfServiceApi extends Service {

    /**
    * @summary Get Terms of Service information for a legal entity
    * @param id {@link string } The unique identifier of the legal entity.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link GetTermsOfServiceAcceptanceInfosResponse }
    */
    public async getTermsOfServiceInformationForLegalEntity(id: string, requestOptions?: IRequest.Options): Promise<GetTermsOfServiceAcceptanceInfosResponse> {
        const localVarPath = "/legalEntities/{id}/termsOfServiceAcceptanceInfos"
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new LegalEntityManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, GetTermsOfServiceAcceptanceInfosResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "GetTermsOfServiceAcceptanceInfosResponse");
    }

    /**
    * @summary Accept Terms of Service
    * @param id {@link string } The unique identifier of the legal entity.
    * @param termsofservicedocumentid {@link string } The unique identifier of the Terms of Service document.
    * @param acceptTermsOfServiceRequest {@link AcceptTermsOfServiceRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link AcceptTermsOfServiceResponse }
    */
    public async acceptTermsOfService(id: string, termsofservicedocumentid: string, acceptTermsOfServiceRequest: AcceptTermsOfServiceRequest, requestOptions?: IRequest.Options): Promise<AcceptTermsOfServiceResponse> {
        const localVarPath = "/legalEntities/{id}/termsOfService/{termsofservicedocumentid}"
            .replace("{" + "id" + "}", encodeURIComponent(String(id)))
            .replace("{" + "termsofservicedocumentid" + "}", encodeURIComponent(String(termsofservicedocumentid)));
        const resource = new LegalEntityManagementResource(this, localVarPath);
        const request: AcceptTermsOfServiceRequest = ObjectSerializer.serialize(acceptTermsOfServiceRequest, "AcceptTermsOfServiceRequest");
        const response = await getJsonResponse<AcceptTermsOfServiceRequest, AcceptTermsOfServiceResponse>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "AcceptTermsOfServiceResponse");
    }

    /**
    * @summary Get Terms of Service document
    * @param id {@link string } The unique identifier of the legal entity.
    * @param getTermsOfServiceDocumentRequest {@link GetTermsOfServiceDocumentRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link GetTermsOfServiceDocumentResponse }
    */
    public async getTermsOfServiceDocument(id: string, getTermsOfServiceDocumentRequest: GetTermsOfServiceDocumentRequest, requestOptions?: IRequest.Options): Promise<GetTermsOfServiceDocumentResponse> {
        const localVarPath = "/legalEntities/{id}/termsOfService"
            .replace("{" + "id" + "}", encodeURIComponent(String(id)));
        const resource = new LegalEntityManagementResource(this, localVarPath);
        const request: GetTermsOfServiceDocumentRequest = ObjectSerializer.serialize(getTermsOfServiceDocumentRequest, "GetTermsOfServiceDocumentRequest");
        const response = await getJsonResponse<GetTermsOfServiceDocumentRequest, GetTermsOfServiceDocumentResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "GetTermsOfServiceDocumentResponse");
    }
}
