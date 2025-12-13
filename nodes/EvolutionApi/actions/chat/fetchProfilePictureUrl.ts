import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function fetchProfilePictureUrl(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const number = this.getNodeParameter('number', index) as string;

	const body = {
		number,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/chat/fetchProfilePictureUrl/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
