import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { ISendList } from '../../types/api';

export async function sendList(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const number = this.getNodeParameter('number', index) as string;
	const title = this.getNodeParameter('title', index) as string;
	const buttonText = this.getNodeParameter('buttonText', index) as string;
	const description = this.getNodeParameter('description', index) as string;
	const footerText = this.getNodeParameter('footerText', index) as string;
	// Expecting sections to be passed as JSON or UI Collection in a real scenario,
	// assuming fixed structure from UI for now or raw object input for complexity
	const sections = this.getNodeParameter('sections', index) as any[];

	const body: ISendList = {
		number,
		title,
		buttonText,
		description,
		footerText,
		sections,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/message/sendList/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
