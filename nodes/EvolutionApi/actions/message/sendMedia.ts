import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { ISendMedia } from '../../types/api';

export async function sendMedia(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const number = this.getNodeParameter('number', index) as string;
	const mediatype = this.getNodeParameter('mediatype', index) as ISendMedia['mediatype'];
	const media = this.getNodeParameter('media', index) as string;
	const caption = this.getNodeParameter('caption', index) as string;
	const fileName = this.getNodeParameter('fileName', index) as string;

	const body: ISendMedia = {
		number,
		mediatype,
		media,
		caption,
		fileName,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/message/sendMedia/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
