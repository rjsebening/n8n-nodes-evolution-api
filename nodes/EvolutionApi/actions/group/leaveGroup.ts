import { IExecuteFunctions } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function leaveGroup(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const groupJid = this.getNodeParameter('groupJid', index) as string;

	const response = await apiRequest.call(this, 'DELETE', `/group/leaveGroup/${instanceName}`, {}, { groupJid });

	return response;
}
