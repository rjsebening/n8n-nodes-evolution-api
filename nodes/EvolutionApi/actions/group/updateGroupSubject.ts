import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function updateGroupSubject(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const groupJid = this.getNodeParameter('groupJid', index) as string;
	const subject = this.getNodeParameter('subject', index) as string;

	const body = {
		subject,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/group/updateGroupSubject/${instanceName}`,
		body as unknown as IDataObject,
		{ groupJid },
	);

	return response;
}
