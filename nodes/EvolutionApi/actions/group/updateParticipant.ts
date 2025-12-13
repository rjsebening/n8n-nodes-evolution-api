import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { IGroupUpdateParticipant } from '../../types/api';

export async function updateParticipant(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const groupJid = this.getNodeParameter('groupJid', index) as string;
	const action = this.getNodeParameter('action', index) as IGroupUpdateParticipant['action'];
	const participantsString = this.getNodeParameter('participants', index) as string;

	const participants = participantsString
		.split(',')
		.map((n) => n.trim())
		.filter((n) => n.length > 0);

	const body: IGroupUpdateParticipant = {
		action,
		participants,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/group/updateParticipant/${instanceName}`,
		body as unknown as IDataObject,
		{ groupJid },
	);

	return response;
}
