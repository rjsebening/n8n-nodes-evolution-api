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

type ApiContext = IExecuteFunctions | IHookFunctions | ILoadOptionsFunctions;

export async function apiRequest(
	this: ApiContext,
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
		return await (this.helpers as any).httpRequestWithAuthentication.call(this, 'evolutionApi', options);
	} catch (error) {
		// Every ApiContext variant exposes getNode(), so no runtime guard is needed.
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}
