import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function findContacts(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const contactId = this.getNodeParameter('contactId', index, '') as string;

	const body: IDataObject = {};
	if (contactId) {
		body.where = {
			id: contactId,
		};
	}

	const response = await apiRequest.call(this, 'POST', `/chat/findContacts/${instanceName}`, body);

	return response;
}
