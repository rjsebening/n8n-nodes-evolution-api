import { IExecuteFunctions } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function inviteInfo(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const inviteCode = this.getNodeParameter('inviteCode', index) as string;

	const response = await apiRequest.call(this, 'GET', `/group/inviteInfo/${instanceName}`, {}, { inviteCode });

	return response;
}
