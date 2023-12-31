/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
/* tslint:disable:no-unused-locals */
import { CreateMerchantUserRequest } from '../../typings/management/models';
import { CreateUserResponse } from '../../typings/management/models';
import { ListMerchantUsersResponse } from '../../typings/management/models';
import { UpdateMerchantUserRequest } from '../../typings/management/models';
import { User } from '../../typings/management/models';
import { IRequest } from "../../typings/requestOptions";
import ManagementResource from "../resource/management/managementResource";
import { ObjectSerializer } from "../../typings/management/models";


export default class UsersMerchantLevelApi extends Service {
    /**
     * @summary Get a list of users
     * @param merchantId Unique identifier of the merchant.
     * @param pageNumber The number of the page to fetch.
     * @param pageSize The number of items to have on a page. Maximum value is **100**. The default is **10** items on a page.
     */
    public async listUsers(merchantId: string, requestOptions?: IRequest.Options): Promise<ListMerchantUsersResponse> {
        const localVarPath = "/merchants/{merchantId}/users"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, ListMerchantUsersResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ListMerchantUsersResponse");
    }
    /**
     * @summary Get user details
     * @param merchantId Unique identifier of the merchant.
     * @param userId Unique identifier of the user.
     */
    public async getUserDetails(merchantId: string, userId: string, requestOptions?: IRequest.Options): Promise<User> {
        const localVarPath = "/merchants/{merchantId}/users/{userId}"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        const resource = new ManagementResource(this, localVarPath);
        const response = await getJsonResponse<string, User>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "User");
    }
    /**
     * @summary Update a user
     * @param merchantId Unique identifier of the merchant.
     * @param userId Unique identifier of the user.
     * @param updateMerchantUserRequest 
     */
    public async updateUser(merchantId: string, userId: string, updateMerchantUserRequest: UpdateMerchantUserRequest, requestOptions?: IRequest.Options): Promise<User> {
        const localVarPath = "/merchants/{merchantId}/users/{userId}"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)))
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));
        const resource = new ManagementResource(this, localVarPath);
        const request: UpdateMerchantUserRequest = ObjectSerializer.serialize(updateMerchantUserRequest, "UpdateMerchantUserRequest");
        const response = await getJsonResponse<UpdateMerchantUserRequest, User>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "User");
    }
    /**
     * @summary Create a new user
     * @param merchantId Unique identifier of the merchant.
     * @param createMerchantUserRequest 
     */
    public async createNewUser(merchantId: string, createMerchantUserRequest: CreateMerchantUserRequest, requestOptions?: IRequest.Options): Promise<CreateUserResponse> {
        const localVarPath = "/merchants/{merchantId}/users"
            .replace('{' + 'merchantId' + '}', encodeURIComponent(String(merchantId)));
        const resource = new ManagementResource(this, localVarPath);
        const request: CreateMerchantUserRequest = ObjectSerializer.serialize(createMerchantUserRequest, "CreateMerchantUserRequest");
        const response = await getJsonResponse<CreateMerchantUserRequest, CreateUserResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "CreateUserResponse");
    }
}
