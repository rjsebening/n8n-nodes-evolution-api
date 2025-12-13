import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { IChatwootConfig } from '../../types/api';

export async function setChatwoot(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;

	// Explicitly mapping all potential fields
	const body: IChatwootConfig = {
		enabled: this.getNodeParameter('enabled', index) as boolean,
		accountId: this.getNodeParameter('accountId', index) as string,
		token: this.getNodeParameter('token', index) as string,
		url: this.getNodeParameter('url', index) as string,
		signMsg: this.getNodeParameter('signMsg', index) as boolean,
		reopenConversation: this.getNodeParameter('reopenConversation', index) as boolean,
		conversationPending: this.getNodeParameter('conversationPending', index) as boolean,
		importContacts: this.getNodeParameter('importContacts', index) as boolean,
		importMessages: this.getNodeParameter('importMessages', index) as boolean,
		autoCreate: this.getNodeParameter('autoCreate', index) as boolean,
	};

	const response = await apiRequest.call(this, 'POST', `/chatwoot/set/${instanceName}`, body as unknown as IDataObject);

	return response;
}
