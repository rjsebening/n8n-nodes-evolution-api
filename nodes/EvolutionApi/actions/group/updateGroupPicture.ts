import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function updateGroupPicture(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const groupJid = this.getNodeParameter('groupJid', index) as string;
	const image = this.getNodeParameter('image', index) as string;

	const body = {
		image,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/group/updateGroupPicture/${instanceName}`,
		body as unknown as IDataObject,
		{ groupJid },
	);

	return response;
}
