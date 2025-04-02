'use server';

import { supabase } from '@/packages/adapters/supabase/client';

export async function submitApplication({
	fullName,
	mandate,
	election,
}: {
	fullName: string;
	mandate: string;
	election: number;
}) {
	await supabase.from('candidates').insert({
		full_name: fullName,
		mandate,
		election: election,
	});
}
