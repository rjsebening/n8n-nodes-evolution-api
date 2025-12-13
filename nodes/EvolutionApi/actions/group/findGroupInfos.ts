import { IExecuteFunctions } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function findGroupInfos(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const groupJid = this.getNodeParameter('groupJid', index) as string;

	const response = await apiRequest.call(this, 'GET', `/group/findGroupInfos/${instanceName}`, {}, { groupJid });

	return response;
}
