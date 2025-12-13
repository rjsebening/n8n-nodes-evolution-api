import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { ISendStatus } from '../../types/api';

export async function sendStatus(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const type = this.getNodeParameter('type', index) as string;
	const content = this.getNodeParameter('content', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) as IDataObject;

	const body: ISendStatus = {
		type,
		content,
		...additionalFields,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/message/sendStatus/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
