import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function findMessages(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const remoteJid = this.getNodeParameter('remoteJid', index) as string;

	const page = this.getNodeParameter('page', index, 1) as number;
	const offset = this.getNodeParameter('offset', index, 10) as number;

	const body: IDataObject = {
		where: {
			key: {
				remoteJid,
			},
		},
		page,
		offset,
	};

	return apiRequest.call(this, 'POST', `/chat/findMessages/${instanceName}`, body);
}
