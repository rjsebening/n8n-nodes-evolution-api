import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { ISendSticker } from '../../types/api';

export async function sendSticker(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const number = this.getNodeParameter('number', index) as string;
	const sticker = this.getNodeParameter('sticker', index) as string;

	const body: ISendSticker = {
		number,
		sticker,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/message/sendSticker/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
