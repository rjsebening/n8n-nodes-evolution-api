import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { IGroupCreate } from '../../types/api';

export async function create(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const subject = this.getNodeParameter('subject', index) as string;
	const description = this.getNodeParameter('description', index) as string;
	const participantsString = this.getNodeParameter('participants', index) as string;

	// Defensive splitting of participants
	const participants = participantsString
		.split(',')
		.map((p) => p.trim())
		.filter((p) => p.length > 0);

	const body: IGroupCreate = {
		subject,
		description,
		participants,
	};

	const response = await apiRequest.call(this, 'POST', `/group/create/${instanceName}`, body as unknown as IDataObject);

	return response;
}
