import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function deleteMessageForEveryone(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const id = this.getNodeParameter('id', index) as string;
	const remoteJid = this.getNodeParameter('remoteJid', index) as string;
	const fromMe = this.getNodeParameter('fromMe', index) as boolean;
	const participant = this.getNodeParameter('participant', index, '') as string;

	const body: IDataObject = {
		id,
		remoteJid,
		fromMe,
	};
	if (participant) {
		body.participant = participant;
	}

	const response = await apiRequest.call(this, 'DELETE', `/chat/deleteMessageForEveryone/${instanceName}`, body);

	return response;
}
