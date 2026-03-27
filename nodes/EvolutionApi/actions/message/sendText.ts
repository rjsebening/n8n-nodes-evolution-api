import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { ISendText } from '../../types/api';
import { buildMessageOptions } from './helpers';

export async function sendText(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const number = this.getNodeParameter('number', index) as string;
	const text = this.getNodeParameter('text', index) as string;
	const options = this.getNodeParameter('options', index) as IDataObject;

	const body: ISendText = {
		number,
		text,
	};

	if (options.delay !== undefined) {
		body.delay = options.delay as number;
	}

	if (options.linkPreview !== undefined) {
		body.linkPreview = options.linkPreview as boolean;
	}

	Object.assign(body, buildMessageOptions(options));

	const response = await apiRequest.call(
		this,
		'POST',
		`/message/sendText/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
