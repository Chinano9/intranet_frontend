<script lang="ts">
	export let page: string;
	export let isRight: boolean;

	let urlParams = new URLSearchParams(window.location.search);

	function handleClick() {
		urlParams.set('page', page);
		window.location.replace(`..${window.location.pathname}?${urlParams.toString()}`);
	}
</script>

<button
	on:click={handleClick}
	class="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
>
	{#if !isRight}
		<svg
			class="w-5 h-5 mr-1 -ml-1"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				fill-rule="evenodd"
				d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
				clip-rule="evenodd"
			/></svg
		>
	{/if}
	<slot />
	{#if isRight}
		<svg
			class="w-5 h-5 ml-1 -mr-1"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				fill-rule="evenodd"
				d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
				clip-rule="evenodd"
			/></svg
		>
	{/if}
</button>
