'use server';

import { supabase } from '@/packages/adapters/supabase/client';

export async function submitApplication({
	fullName,
	mandate,
	election,
	user,
}: {
	fullName: string;
	mandate: string;
	election: number;
	user: string;
}) {
	const existing_vote = await supabase
		.from('candidates')
		.select('*')
		.eq('user', user)
		.eq('election', election)
		.single();

	if (existing_vote.data) {
		throw new Error('You have already applied for this election');
	}

	await supabase.from('candidates').insert({
		full_name: fullName,
		mandate,
		election: election,
		user: user,
	});
}
