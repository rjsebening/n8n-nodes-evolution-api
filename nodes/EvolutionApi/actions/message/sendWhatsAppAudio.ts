import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { ISendAudio } from '../../types/api';

export async function sendWhatsAppAudio(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const number = this.getNodeParameter('number', index) as string;
	const audio = this.getNodeParameter('audio', index) as string;

	const body: ISendAudio = {
		number,
		audio,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/message/sendWhatsAppAudio/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
