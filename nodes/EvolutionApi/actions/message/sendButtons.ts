import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { ISendButton } from '../../types/api';

export async function sendButtons(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const number = this.getNodeParameter('number', index) as string;
	const title = this.getNodeParameter('title', index) as string;
	const buttons = this.getNodeParameter('buttons', index) as any[];
	const description = this.getNodeParameter('description', index) as string;
	const footer = this.getNodeParameter('footer', index) as string;

	const body: ISendButton = {
		number,
		title,
		buttons,
		description,
		footer,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/message/sendButtons/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
