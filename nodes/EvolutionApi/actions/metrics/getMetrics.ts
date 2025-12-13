import { IExecuteFunctions } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function getMetrics(this: IExecuteFunctions, index: number): Promise<any> {
	const response = await apiRequest.call(this, 'GET', '/metrics');

	return response;
}
