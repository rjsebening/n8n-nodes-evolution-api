import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function findStatusMessage(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const page = this.getNodeParameter('page', index, 1) as number;
	const offset = this.getNodeParameter('offset', index, 0) as number;
	const remoteJid = this.getNodeParameter('remoteJid', index, '') as string;
	const messageId = this.getNodeParameter('messageId', index, '') as string;

	const body: IDataObject = {
		page,
		offset,
		where: {},
	};

	if (remoteJid) (body.where as IDataObject).remoteJid = remoteJid;
	if (messageId) (body.where as IDataObject).id = messageId;

	const response = await apiRequest.call(this, 'POST', `/chat/findStatusMessage/${instanceName}`, body);

	return response;
}
