import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { IChatArchive } from '../../types/api';

export async function archiveChat(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const chat = this.getNodeParameter('chat', index) as string;
	const archive = this.getNodeParameter('archive', index) as boolean;

	const body: IChatArchive = {
		chat,
		archive,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/chat/archiveChat/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
