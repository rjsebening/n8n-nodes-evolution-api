import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { IInstanceCreate } from '../../types/api';

export async function create(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const token = this.getNodeParameter('token', index) as string;
	const integration = this.getNodeParameter('integration', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) as IDataObject;

	// Map UI properties to API Schema
	const body: IInstanceCreate = {
		instanceName,
		token,
		// @ts-ignore
		integration,
		...additionalFields,
	};

	const response = await apiRequest.call(this, 'POST', '/instance/create', body as unknown as IDataObject);

	return response;
}
