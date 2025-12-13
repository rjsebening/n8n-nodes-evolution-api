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

type ThisContext =
	| IExecuteFunctions
	| ILoadOptionsFunctions
	| IHookFunctions;

export async function apiRequest(
	this: ThisContext,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	query: IDataObject = {},
): Promise<any> {
	const credentials = (await this.getCredentials('evolutionApi')) as EvolutionApiCredentials;

	const baseUrl = credentials.baseUrl.replace(/\/$/, '');
	const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;

	const options = {
		method,
		url: `${baseUrl}${path}`,
		qs: query,
		body,
		json: true,
	};

	try {
		return await (this.helpers as any).httpRequestWithAuthentication(
			'evolutionApi',
			options,
		);
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
