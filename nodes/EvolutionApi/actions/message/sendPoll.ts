import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { apiRequest } from '../../methods/transport/httpClient';
import { ISendPoll } from '../../types/api';

export async function sendPoll(this: IExecuteFunctions, index: number): Promise<any> {
	const instanceName = this.getNodeParameter('instanceName', index) as string;
	const number = this.getNodeParameter('number', index) as string;
	const name = this.getNodeParameter('name', index) as string;
	const selectableCount = this.getNodeParameter('selectableCount', index) as number;

	const rawValues = this.getNodeParameter('values', index) as unknown;

	let values: string[];

	if (Array.isArray(rawValues)) {
		values = rawValues.map((v) => String(v)).filter(Boolean);
	} else if (typeof rawValues === 'string') {
		try {
			const parsed = JSON.parse(rawValues);
			if (Array.isArray(parsed)) {
				values = parsed.map((v) => String(v)).filter(Boolean);
			} else {
				throw new Error();
			}
		} catch {
			values = rawValues
				.split(',')
				.map((v) => v.trim())
				.filter(Boolean);
		}
	} else {
		throw new Error('Poll options must be an array of strings or a JSON array.');
	}

	if (values.length < 2) {
		throw new Error('A poll must contain at least two options.');
	}

	const body: ISendPoll = {
		number,
		name,
		selectableCount,
		values,
	};

	const response = await apiRequest.call(
		this,
		'POST',
		`/message/sendPoll/${instanceName}`,
		body as unknown as IDataObject,
	);

	return response;
}
