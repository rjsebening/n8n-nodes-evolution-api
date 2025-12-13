import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { IWebhookConfig } from '../../types/api';

export async function setRabbitmq(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const configuration = this.getNodeParameter('configuration', index) as IDataObject;

	const body: { rabbitmq: IWebhookConfig } = {
		rabbitmq: configuration as unknown as IWebhookConfig,
	};

	const response = await apiRequest.call(this, 'POST', `/rabbitmq/set/${instanceName}`, body as unknown as IDataObject);

	return response;
}
