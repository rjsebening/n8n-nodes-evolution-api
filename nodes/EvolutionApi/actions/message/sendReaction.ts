import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { ISendReaction } from '../../types/api';

export async function sendReaction(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const reaction = this.getNodeParameter('reaction', index) as string;
	const messageId = this.getNodeParameter('reactionMessageId', index) as string;
	const remoteJid = this.getNodeParameter('reactionRemoteJid', index) as string;
	const fromMe = this.getNodeParameter('reactionFromMe', index) as boolean;

	const body: ISendReaction = {
		reaction,
		key: {
			id: messageId,
			remoteJid,
			fromMe,
		},
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/message/sendReaction/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
