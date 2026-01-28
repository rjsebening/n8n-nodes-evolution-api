import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function findStatusMessage(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;

	const page = this.getNodeParameter('page', index, 1) as number;
	const offset = this.getNodeParameter('offset', index, 10) as number;

	const remoteJid = this.getNodeParameter('remoteJid', index, '') as string;
	const messageId = this.getNodeParameter('messageId', index, '') as string;

	if (!remoteJid && !messageId) {
		throw new Error('Either "remoteJid" or "messageId" must be provided');
	}

	const where: IDataObject = {};

	if (remoteJid) {
		where.remoteJid = remoteJid;
	}

	if (messageId) {
		where.id = messageId;
	}

	const body: IDataObject = {
		where,
		page,
		offset,
	};

	return apiRequest.call(this, 'POST', `/chat/findStatusMessage/${instanceName}`, body);
}
