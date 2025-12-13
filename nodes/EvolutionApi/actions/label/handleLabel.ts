import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { IHandleLabel } from '../../types/api';

export async function handleLabel(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;

	const body: IHandleLabel = {
		number: this.getNodeParameter('number', index) as string,
		labelId: this.getNodeParameter('labelId', index) as string,
		action: this.getNodeParameter('action', index) as 'add' | 'remove',
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/label/handleLabel/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
