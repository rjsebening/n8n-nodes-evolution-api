import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { ICallOffer } from '../../types/api';

export async function offerCall(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;

	const body: ICallOffer = {
		number: this.getNodeParameter('number', index) as string,
		isVideo: this.getNodeParameter('isVideo', index) as boolean,
		callDuration: this.getNodeParameter('callDuration', index) as number,
	};

	const response = await apiRequest.call(this, 'POST', `/call/offer/${instanceName}`, body as unknown as IDataObject);

	return response;
}
