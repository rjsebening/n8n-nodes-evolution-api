import { IExecuteFunctions } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function logout(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;

	const response = await apiRequest.call(this, 'DELETE', `/instance/logout/${instanceName}`);

	return response;
}
