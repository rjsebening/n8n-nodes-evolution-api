import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { IChatUpdateBlock } from '../../types/api';

export async function updateBlockStatus(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const number = this.getNodeParameter('number', index) as string;
	const status = this.getNodeParameter('status', index) as IChatUpdateBlock['status'];

	const body: IChatUpdateBlock = {
		number,
		status,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/message/updateBlockStatus/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
