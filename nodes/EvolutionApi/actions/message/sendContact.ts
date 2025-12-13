import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { ISendContact } from '../../types/api';

export async function sendContact(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const number = this.getNodeParameter('number', index) as string;
	const contacts = this.getNodeParameter('contact', index) as any[];

	const body: ISendContact = {
		number,
		contact: contacts,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/message/sendContact/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
