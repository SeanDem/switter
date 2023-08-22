<script lang="ts">
	import { db } from '$lib/firebase';
	import { collection, addDoc, getDocs } from 'firebase/firestore';
	import { onMount } from 'svelte';

	type Record = {
		id: string;
		name: string;
	};

	let records: Record[] = [];
	let newRecordName: string = '';

	async function addRecord(): Promise<void> {
		const docRef = await addDoc(collection(db, 'records'), {
			name: newRecordName
		});
		console.log('Record added with ID: ', docRef.id);
		fetchRecords();
	}

	async function fetchRecords(): Promise<void> {
		const querySnapshot = await getDocs(collection(db, 'records'));
		records = querySnapshot.docs.map((doc) => {
			return { id: doc.id, name: doc.data().name }; // Assuming "name" field exists
		});
	}

	// Fetch records on component mount
	onMount(fetchRecords);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<!-- Input and Button to Add a Record -->
<input bind:value={newRecordName} placeholder="Enter record name" />
<button on:click={addRecord}>Add Record</button>

<!-- Display Records -->
<h2>Records:</h2>
<ul>
	{#each records as record (record.id)}
		<li>{record.name}</li>
	{/each}
</ul>
