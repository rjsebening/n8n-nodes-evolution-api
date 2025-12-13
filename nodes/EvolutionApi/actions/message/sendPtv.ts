import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { ISendPtv } from '../../types/api';

export async function sendPtv(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const number = this.getNodeParameter('number', index) as string;
	const video = this.getNodeParameter('video', index) as string;

	const body: ISendPtv = {
		number,
		video,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/message/sendPtv/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
