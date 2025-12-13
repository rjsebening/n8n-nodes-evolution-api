import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { ISettingsConfig } from '../../types/api';

export async function setSettings(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;

	const body: ISettingsConfig = {
		rejectCall: this.getNodeParameter('rejectCall', index) as boolean,
		msgCall: this.getNodeParameter('msgCall', index) as string,
		groupsIgnore: this.getNodeParameter('groupsIgnore', index) as boolean,
		alwaysOnline: this.getNodeParameter('alwaysOnline', index) as boolean,
		readMessages: this.getNodeParameter('readMessages', index) as boolean,
		readStatus: this.getNodeParameter('readStatus', index) as boolean,
		syncFullHistory: this.getNodeParameter('syncFullHistory', index) as boolean,
	};

	const response = await apiRequest.call(this, 'POST', `/settings/set/${instanceName}`, body as unknown as IDataObject);

	return response;
}
