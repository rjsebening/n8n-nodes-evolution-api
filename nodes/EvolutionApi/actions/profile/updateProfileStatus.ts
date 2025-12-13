import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { IProfileUpdateStatus } from '../../types/api';

export async function updateProfileStatus(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;

	const body: IProfileUpdateStatus = {
		status: this.getNodeParameter('status', index) as string,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/chat/updateProfileStatus/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
