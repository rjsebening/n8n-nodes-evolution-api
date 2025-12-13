import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function markMessageAsRead(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const readMessages = this.getNodeParameter('readMessages', index) as any[];

	const body = {
		readMessages,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/chat/markMessageAsRead/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
