import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function toggleEphemeral(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const groupJid = this.getNodeParameter('groupJid', index) as string;
	const expiration = this.getNodeParameter('expiration', index) as number;

	const body = {
		expiration,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/group/toggleEphemeral/${instanceName}`,
		body as unknown as IDataObject,
		{ groupJid },
	);

	return response;
}
