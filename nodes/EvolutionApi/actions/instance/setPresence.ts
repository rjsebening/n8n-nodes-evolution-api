import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { ISetPresence } from '../../types/api';

export async function setPresence(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const presence = this.getNodeParameter('presence', index) as ISetPresence['presence'];
	const delay = this.getNodeParameter('delay', index) as number;
	const number = this.getNodeParameter('number', index, '') as string;

	const body: ISetPresence = {
		presence,
		delay,
	};
	if (number) body.number = number;

	const response = await apiRequest.call(
		this,
		'POST',
		`/instance/setPresence/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
