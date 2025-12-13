import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function connect(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const number = this.getNodeParameter('number', index, '') as string;

	const query: IDataObject = {};
	if (number) query.number = number;

	const response = await apiRequest.call(this, 'GET', `/instance/connect/${instanceName}`, {}, query);

	return response;
}
