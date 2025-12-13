import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { IStorageGetMediaUrl } from '../../types/api';

export async function getMediaUrl(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;

	const body: IStorageGetMediaUrl = {
		id: this.getNodeParameter('id', index) as string,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/s3/getMediaUrl/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
