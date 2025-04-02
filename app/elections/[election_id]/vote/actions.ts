'use server';

import { supabase } from '@/packages/adapters/supabase/client';
import crypto from 'node:crypto';

function sha256(data: string) {
	const hash = crypto.createHash('sha256');
	hash.update(data);
	return hash.digest('hex');
}

export async function vote({
	election,
	candidate,
	voter,
}: {
	election: number;
	candidate: number;
	voter: string;
}) {
	const hash_content = `${voter}${election}${candidate}${Date.now()}`;
	const hash = sha256(hash_content);
	await supabase.from('votes').insert({
		candidate: candidate,
		election: election,
		voter: voter,
		transaction_hash: `0x1000${hash}`,
	});
}
