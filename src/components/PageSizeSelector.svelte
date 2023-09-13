<script lang="ts">
	let urlParams = new URLSearchParams(window.location.search);

	function handleClick(event) {
		event.
		urlParams.set('page_size', page);
		window.location.replace(
			`..${window.location.pathname}?${urlParams.toString()}`,
		);
	}
</script>

<select on:input={handleClick} form="search" id="">
	<option value="10">10</option>
	<option value="20">20</option>
	<option value="50">50</option>
	<option value="100">Max</option>
</select>
