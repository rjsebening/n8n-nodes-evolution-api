import { IAuthenticateGeneric, ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';

export class EvolutionApi implements ICredentialType {
	name = 'evolutionApi';
	displayName = 'Evolution API';
	documentationUrl = 'https://doc.evolution-api.com/';
	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: '',
			placeholder: 'https://api.your-domain.com',
			description: 'The URL where your Evolution API instance is hosted',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			description: 'The Global API Key defined in your Evolution API env',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				apikey: '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '/instance/fetchInstances',
			method: 'GET',
		},
	};
}
