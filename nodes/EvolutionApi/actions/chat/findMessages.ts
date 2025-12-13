import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function findMessages(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const page = this.getNodeParameter('page', index, 1) as number;
	const offset = this.getNodeParameter('offset', index, 0) as number;

	const body: IDataObject = {
		page,
		offset,
		where: {},
	};

	const response = await apiRequest.call(this, 'POST', `/chat/findMessages/${instanceName}`, body);

	return response;
}
