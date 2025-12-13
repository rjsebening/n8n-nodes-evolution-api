import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { IChatCheckNumbers } from '../../types/api';

export async function whatsappNumbers(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const numbersString = this.getNodeParameter('numbers', index) as string;

	const numbers = numbersString
		.split(',')
		.map((n) => n.trim())
		.filter((n) => n.length > 0);

	const body: IChatCheckNumbers = {
		numbers,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/chat/whatsappNumbers/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
