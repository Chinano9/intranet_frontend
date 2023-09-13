<script lang="ts">
	let urlParams = new URLSearchParams(window.location.search);

	function handleSelect(event: Event) {
		const pageSize: string = event.value;
		urlParams.set('page_size', pageSize);
		window.location.replace(
			`..${window.location.pathname}?${urlParams.toString()}`,
		);
	}
</script>

<select on:input={handleSelect} form="search">
	<option value="10">10</option>
	<option value="20">20</option>
	<option value="50">50</option>
	<option value="100">Max</option>
</select>
