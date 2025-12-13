import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { IProfileUpdatePrivacy } from '../../types/api';

export async function updatePrivacySettings(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;

	const body: IProfileUpdatePrivacy = {
		readreceipts: this.getNodeParameter('readreceipts', index) as string,
		profile: this.getNodeParameter('profile', index) as string,
		status: this.getNodeParameter('status', index) as string,
		online: this.getNodeParameter('online', index) as string,
		last: this.getNodeParameter('last', index) as string,
		groupadd: this.getNodeParameter('groupadd', index) as string,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/chat/updatePrivacySettings/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
