import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function updateMessage(
	this: IExecuteFunctions,
	index: number,
): Promise<any> {

	const instanceName = this.getNodeParameter('instanceName', index) as string;

	const remoteJid = this.getNodeParameter('remoteJid', index) as string;
	const fromMe = this.getNodeParameter('fromMe', index, true) as boolean;
	const messageId = this.getNodeParameter('messageId', index) as string;
	const text = this.getNodeParameter('text', index) as string;

	const body: IDataObject = {
		number: remoteJid,
		text,
		key: {
			remoteJid,
			fromMe,
			id: messageId,
		},
	};

	return apiRequest.call(
		this,
		'POST',
		`/chat/updateMessage/${instanceName}`,
		body,
	);
}
