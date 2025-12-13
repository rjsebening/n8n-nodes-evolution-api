import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function updateMessage(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const number = this.getNodeParameter('number', index) as string;
	const text = this.getNodeParameter('text', index) as string;
	const messageId = this.getNodeParameter('messageId', index) as string;

	const body = {
		number,
		text,
		key: {
			id: messageId,
		},
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/chat/updateMessage/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
