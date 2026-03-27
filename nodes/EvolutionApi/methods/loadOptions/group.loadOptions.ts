import { ILoadOptionsFunctions, INodePropertyOptions } from 'n8n-workflow';
import { apiRequest } from '../transport/httpClient';

type GroupOption = {
	name: string;
	value: string;
};

const inFlightGroupRequests = new Map<string, Promise<INodePropertyOptions[]>>();

export async function getGroups(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const instanceName = this.getNodeParameter('instanceName') as string;

	if (!instanceName) {
		return [];
	}

	const credentials = await this.getCredentials('evolutionApi');
	const baseUrl = String((credentials as { baseUrl?: string }).baseUrl || '').replace(/\/$/, '');
	const cacheKey = `${baseUrl}::${instanceName}`;

	const existingRequest = inFlightGroupRequests.get(cacheKey);
	if (existingRequest) {
		return existingRequest;
	}

	const requestPromise = loadGroups.call(this, instanceName);
	inFlightGroupRequests.set(cacheKey, requestPromise);

	try {
		return await requestPromise;
	} finally {
		inFlightGroupRequests.delete(cacheKey);
	}
}

async function loadGroups(
	this: ILoadOptionsFunctions,
	instanceName: string,
): Promise<INodePropertyOptions[]> {
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

	return response
		.map((item: { id?: string; jid?: string; subject?: string }) => {
			const value = item.id || item.jid;
			const name = item.subject || value;

			if (!name || !value) {
				return null;
			}

			return {
				name,
				value,
			};
		})
		.filter((item): item is GroupOption => item !== null)
		.sort((a, b) => a.name.localeCompare(b.name));
}
