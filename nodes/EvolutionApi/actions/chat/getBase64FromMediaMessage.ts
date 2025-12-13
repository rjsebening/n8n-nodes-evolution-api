import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function getBase64FromMediaMessage(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const messageId = this.getNodeParameter('messageId', index) as string;
	const convertToMp4 = this.getNodeParameter('convertToMp4', index) as boolean;

	const body = {
		message: {
			key: {
				id: messageId,
			},
		},
		convertToMp4,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/chat/getBase64FromMediaMessage/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
