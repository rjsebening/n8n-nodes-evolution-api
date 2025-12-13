import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function updateSetting(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const groupJid = this.getNodeParameter('groupJid', index) as string;
	const action = this.getNodeParameter('action', index) as string;

	const body = {
		action,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/group/updateSetting/${instanceName}`,
		body as unknown as IDataObject,
		{ groupJid },
	);

	return response;
}
