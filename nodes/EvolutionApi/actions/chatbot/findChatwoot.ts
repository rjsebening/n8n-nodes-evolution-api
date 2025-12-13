import { IExecuteFunctions } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function findChatwoot(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;

	const response = await apiRequest.call(this, 'GET', `/chatwoot/find/${instanceName}`);

	return response;
}
