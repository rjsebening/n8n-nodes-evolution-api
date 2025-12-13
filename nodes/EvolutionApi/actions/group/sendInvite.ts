import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function sendInvite(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const groupJid = this.getNodeParameter('groupJid', index) as string;
	const description = this.getNodeParameter('description', index) as string;
	const numbersString = this.getNodeParameter('numbers', index) as string;

	const numbers = numbersString
		.split(',')
		.map((n) => n.trim())
		.filter((n) => n.length > 0);

	const body = {
		groupJid,
		description,
		numbers,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/group/sendInvite/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
