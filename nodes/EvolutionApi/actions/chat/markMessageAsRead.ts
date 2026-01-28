/* nodes/EvolutionApi/actions/chat/markMessageAsRead.ts */
import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function markMessageAsRead(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;

	const readMessagesCollection = this.getNodeParameter('readMessages', index, {}) as {
		readMessagesValues?: Array<{
			remoteJid: string;
			fromMe: boolean;
			id: string;
		}>;
	};

	const readMessages = readMessagesCollection.readMessagesValues ?? [];

	const body: IDataObject = {
		readMessages,
	};

	return apiRequest.call(this, 'POST', `/chat/markMessageAsRead/${instanceName}`, body);
}
