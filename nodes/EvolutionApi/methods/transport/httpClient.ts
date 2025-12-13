import {
	IExecuteFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
	JsonObject,
	NodeApiError,
	IDataObject,
	IHttpRequestMethods,
} from 'n8n-workflow';
import { EvolutionApiCredentials } from '../../types/api';

export async function apiRequest(
	this: IExecuteFunctions | ILoadOptionsFunctions | IHookFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	query: IDataObject = {},
): Promise<any> {
	const credentials = (await this.getCredentials('evolutionApi')) as EvolutionApiCredentials;

	// Ensure Base URL doesn't end with slash and endpoint starts with slash
	const baseUrl = credentials.baseUrl.replace(/\/$/, '');
	const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;

	const options = {
		method,
		uri: `${baseUrl}${path}`,
		qs: query,
		body,
		json: true,
	};

	try {
		return await this.helpers.requestWithAuthentication.call(this, 'evolutionApi', options);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}

export async function apiRequestAllItems(
	this: IExecuteFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	query: IDataObject = {},
): Promise<any> {
	return apiRequest.call(this, method, endpoint, body, query);
}
