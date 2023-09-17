<script lang="ts">
	import { addSweet } from "$lib/services/sweet";

	let modal: HTMLDialogElement;
	let text: string;
	function onSubmit(): void {
		addSweet(text);
	}
</script>

<button on:click={() => modal.showModal()}>Sweet</button>

<dialog bind:this={modal} class="w-72 md:w-1/2 lg:w-1/3 mx-auto">
	<form method="dialog">
		<div class="relative p-4">
			<button type="button" class="absolute top-0 right-0 m-4" on:click={() => modal.close()}>
				X
			</button>

			<input
				type="text"
				placeholder="Type here"
				class="input input-ghost input-xl w-full"
				bind:value={text}
			/>
		</div>

		<div class="modal-action p-4">
			<button class="btn btn-primary ml-4" on:click={onSubmit}>sweet</button>
		</div>
	</form>
</dialog>
