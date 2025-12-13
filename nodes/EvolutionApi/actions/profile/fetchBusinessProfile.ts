import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { IProfileFetch } from '../../types/api';

export async function fetchBusinessProfile(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;

	const body: IProfileFetch = {
		number: this.getNodeParameter('number', index) as string,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/chat/fetchBusinessProfile/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
