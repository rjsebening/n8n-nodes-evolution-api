import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function updateGroupDescription(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const groupJid = this.getNodeParameter('groupJid', index) as string;
	const description = this.getNodeParameter('description', index) as string;

	const body = {
		description,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/group/updateGroupDescription/${instanceName}`,
		body as unknown as IDataObject,
		{ groupJid },
	);

	return response;
}
