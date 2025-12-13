import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { IStorageGetMedia } from '../../types/api';

export async function getMedia(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;

	const body: IStorageGetMedia = {
		id: this.getNodeParameter('id', index) as string,
		type: this.getNodeParameter('type', index) as string,
		messageId: this.getNodeParameter('messageId', index) as string,
	};

	const response = await apiRequest.call(this, 'POST', `/s3/getMedia/${instanceName}`, body as unknown as IDataObject);

	return response;
}
