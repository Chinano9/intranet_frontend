<script lang="ts">
	let state = true;
	type Filter = {
		text: string;
		name?: string;
		type?: string;
		value?: string;
		options?: Array<Filter>;
	};

	const filters: Array<Filter> = [
		{
			text: 'Contratado desde...',
			name: 'fecha_contratacion__gte',
			type: 'date',
		},
		{
			text: 'Contratado hasta...',
			name: 'fecha_contratacion__lte',
			type: 'date',
		},
		{
			text: 'Ordenar por...',
			name: 'ordering',
			type: 'select',
			options: [
				{
					text: 'Nombre - Ascendente',
					value: 'nombre',
				},
				{
					text: 'Nombre - Descendente',
					value: '-nombre',
				},
				{
					text: 'Apellido paterno - Ascendente',
					value: 'apellido_paterno',
				},
				{
					text: 'Apellido paterno - Descendente',
					value: '-apellido_paterno',
				},
				{
					text: 'Apellido materno - Ascendente',
					value: 'apellido_materno',
				},
				{
					text: 'Apellido materno - Descendente',
					value: '-apellido_materno',
				},
				{
					text: 'Fecha de contratacion - Ascendente',
					value: 'fecha_contratacion',
				},
				{
					text: 'Fecha de contratacion - Descendente',
					value: '-fecha_contratacion',
				},
				{ text: 'Fecha de nacimiento - Ascendente', value: 'fecha_nacimiento' },
				{
					text: 'Fecha de nacimiento - Descendente',
					value: '-fecha_nacimiento',
				},
			],
		},
	];

	function changeState() {
		state = !state;
	}
</script>

<div
	class="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700"
>
	<form class="lg:pr-3" action="#" method="GET" id="search">
		<label for="empleados-search" class="sr-only">Busqueda</label>
		<div class="relative mt-1 lg:w-64 xl:w-96 flex">
			<input
				type="text"
				name="search"
				id="empleados-search"
				class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
				placeholder="Buscar empleados"
			/>

			<button
				type="submit"
				id="search_button"
				class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					height="48"
					viewBox="0 -960 960 960"
					width="48"
					><path
						d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z"
					/></svg
				>
			</button>
		</div>
	</form>
	<div
		class="flex pl-0 mt-3 space-x-1 sm:pl-2 sm:mt-0 max-w-3xl overflow-x-auto"
	>
		{#if state}
			<button
				on:click={changeState}
				on:keypress={changeState}
				class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-6 h-6"
					fill="currentColor"
					viewBox="0 -960 960 960"
				>
					<path
						d="M440-160q-17 0-28.5-11.5T400-200v-240L161-745q-14-17-4-36t31-19h584q21 0 31 19t-4 36L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-276 240-304H240l240 304Zm0 0Z"
					/>
				</svg>
			</button>
		{:else}
			{#each filters as filter}
				{#if filter.type === 'select'}
					<select
						name="ordering"
						form="search"
						class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						id=""
					>
						<option value="" selected disabled>{filter.text}</option>
						{#each filter.options as option}
							<option value={option.value}>{option.text}</option>
						{/each}
					</select>
				{:else}
					<label
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						for={filter.name}>{filter.text}</label
					>
					<input
						class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						form="search"
						type="date"
						name={filter.name}
					/>
				{/if}
			{/each}
			<button
				on:click={changeState}
				on:keypress={changeState}
				class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-6 h-6"
					fill="currentColor"
					viewBox="0 -960 960 960"
				>
					<path
						d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
					/>
				</svg>
			</button>
		{/if}
	</div>
</div>
