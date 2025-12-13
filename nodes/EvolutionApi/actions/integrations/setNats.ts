import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { IWebhookConfig } from '../../types/api';

export async function setNats(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const configuration = this.getNodeParameter('configuration', index) as IDataObject;

	const body: { sqs: IWebhookConfig } = {
		sqs: configuration as unknown as IWebhookConfig, // NATS usually uses generic webhook config structure in this API
	};

	const response = await apiRequest.call(this, 'POST', `/nats/set/${instanceName}`, body as unknown as IDataObject);

	return response;
}
