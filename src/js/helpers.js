import { createHash } from 'crypto';

export const getHash = (hashType, text) =>
	createHash(hashType).update(text, 'utf8').digest('hex');

export const copyToClipboard = (text) => navigator.clipboard.writeText(text);
