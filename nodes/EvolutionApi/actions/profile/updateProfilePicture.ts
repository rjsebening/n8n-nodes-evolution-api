import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { IProfileUpdatePicture } from '../../types/api';

export async function updateProfilePicture(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;

	const body: IProfileUpdatePicture = {
		picture: this.getNodeParameter('picture', index) as string,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/chat/updateProfilePicture/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
