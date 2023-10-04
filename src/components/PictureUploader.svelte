<script lang='ts' >
	import axios from 'axios';
	import { url } from '../lib/utils';
	export let title: string;
	export let foto_url: string;
	export let id_empleado: any;
	let visible = true

	async function handleUpload(e:any){
		const formData = new FormData();
    formData.append('foto', e.target[0].files[0]);
		const endpoint = `${url}empleados/${id_empleado}`;

    try {
      await axios.patch(endpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
					'Access-Control-Allow-Origin':'*',
        },
      });
			location.reload()
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
	}
</script>

<img
	class="mb-4 rounded-lg w-28 sm:mb-0 xl:mb-4 2xl:mb-0 font-bold text-gray-900 dark:text-white mr-4"
	src={foto_url}
	alt="Foto de empleado"
/>
<div>
	<h3 class="mb-1 text-xl font-bold text-gray-900 dark:text-white">
		{title}
	</h3>
	{#if visible}
	<div class="mb-4 text-sm text-gray-500 dark:text-gray-400">
		JPG, GIF o PNG.
	</div>
	<div class="flex items-center space-x-4">
		<button
		on:click={() => visible = !visible}
		type="button"
		class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
		id="subir"
		>
		<svg
		class="w-4 h-4 mr-2 -ml-1"
		fill="currentColor"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
		><path
		d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"
		></path><path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path></svg
		>
		Subir foto
		</button>
	</div>
	{:else}
	<form id="form_foto" method="post" on:submit|preventDefault={handleUpload} enctype="multipart/form-data" class=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
		<label for="foto"></label>
		<input accept="image/png, image/jpeg, image/gif" type="file" name="foto">
		<button 
		class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
		type="submit">
		<svg
		class="w-4 h-4 mr-2 -ml-1"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
				d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"
				></path><path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path></svg
			>
						Subir foto</button
					>
				</form>
	{/if}
</div>

