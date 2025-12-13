import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { IProfileUpdateName } from '../../types/api';

export async function updateProfileName(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;

	const body: IProfileUpdateName = {
		name: this.getNodeParameter('name', index) as string,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/chat/updateProfileName/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
