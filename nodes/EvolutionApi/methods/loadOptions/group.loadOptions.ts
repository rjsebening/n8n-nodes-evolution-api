import { ILoadOptionsFunctions, INodePropertyOptions } from 'n8n-workflow';
import { apiRequest } from '../transport/httpClient';

export async function getGroups(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const instanceName = this.getNodeParameter('instanceName') as string;

	if (!instanceName) {
		return [];
	}

	const response = await apiRequest.call(
		this,
		'GET',
		`/group/fetchAllGroups/${instanceName}`,
		{},
		{ getParticipants: 'false' },
	);

	if (!Array.isArray(response)) {
		return [];
	}

	return response.map((item: any) => ({
		name: item.subject || item.id,
		value: item.id,
	}));
}
