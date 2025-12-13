import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { IProxyConfig } from '../../types/api';

export async function setProxy(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;

	const body: IProxyConfig = {
		enabled: this.getNodeParameter('enabled', index) as boolean,
		host: this.getNodeParameter('host', index) as string,
		port: this.getNodeParameter('port', index) as string,
		protocol: this.getNodeParameter('protocol', index) as string,
		username: this.getNodeParameter('username', index) as string,
		password: this.getNodeParameter('password', index) as string,
	};

	const response = await apiRequest.call(this, 'POST', `/proxy/set/${instanceName}`, body as unknown as IDataObject);

	return response;
}
