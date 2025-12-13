import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function fetchInstances(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index, '') as string;
	const instanceId = this.getNodeParameter('instanceId', index, '') as string;

	const query: IDataObject = {};
	if (instanceName) query.instanceName = instanceName;
	if (instanceId) query.instanceId = instanceId;

	const response = await apiRequest.call(this, 'GET', '/instance/fetchInstances', {}, query);

	return response;
}
