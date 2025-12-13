import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { IChatMarkUnread } from '../../types/api';

export async function markChatUnread(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const chat = this.getNodeParameter('chat', index) as string;

	const body: IChatMarkUnread = {
		chat,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/chat/markChatUnread/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
