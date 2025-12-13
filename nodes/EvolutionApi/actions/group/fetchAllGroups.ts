import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';

export async function fetchAllGroups(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const getParticipants = this.getNodeParameter('getParticipants', index) as boolean;

	const query: IDataObject = {
		getParticipants: getParticipants.toString(),
	};

	const response = await apiRequest.call(this, 'GET', `/group/fetchAllGroups/${instanceName}`, {}, query);

	return response;
}
