import { ILoadOptionsFunctions, INodePropertyOptions } from 'n8n-workflow';
import { apiRequest } from '../transport/httpClient';

export async function getInstances(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const response = await apiRequest.call(this, 'GET', '/instance/fetchInstances');

	if (!Array.isArray(response)) {
		return [];
	}

	return response
		.map((item: any) => {
			// Handle various response structures (flat object or nested instance object)
			const name = item.instanceName || item.name || item.instance?.instanceName;
			return {
				name: name,
				value: name,
			};
		})
		.filter((item) => item.name && item.value);
}
