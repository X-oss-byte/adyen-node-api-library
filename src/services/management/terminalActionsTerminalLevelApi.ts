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
import { ScheduleTerminalActionsRequest } from '../../typings/management/models';
import { ScheduleTerminalActionsResponse } from '../../typings/management/models';
import { IRequest } from "../../typings/requestOptions";
import ManagementResource from "../resource/management/managementResource";
import { ObjectSerializer } from "../../typings/management/models";


export default class TerminalActionsTerminalLevelApi extends Service {
    /**
     * @summary Create a terminal action
     * @param scheduleTerminalActionsRequest 
     */
    public async createTerminalAction(scheduleTerminalActionsRequest: ScheduleTerminalActionsRequest, requestOptions?: IRequest.Options): Promise<ScheduleTerminalActionsResponse> {
        const localVarPath = "/terminals/scheduleActions";
        const resource = new ManagementResource(this, localVarPath);
        const request: ScheduleTerminalActionsRequest = ObjectSerializer.serialize(scheduleTerminalActionsRequest, "ScheduleTerminalActionsRequest");
        const response = await getJsonResponse<ScheduleTerminalActionsRequest, ScheduleTerminalActionsResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "ScheduleTerminalActionsResponse");
    }
}
