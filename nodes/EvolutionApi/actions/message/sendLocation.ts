import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { ISendLocation } from '../../types/api';

export async function sendLocation(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const number = this.getNodeParameter('number', index) as string;
	const latitude = this.getNodeParameter('latitude', index) as number;
	const longitude = this.getNodeParameter('longitude', index) as number;
	const name = this.getNodeParameter('name', index) as string;
	const address = this.getNodeParameter('address', index) as string;

	const body: ISendLocation = {
		number,
		latitude,
		longitude,
		name,
		address,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/message/sendLocation/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
