<script lang="ts">
	import { getDocumentoEmpleado } from '../lib/recursos_humanos';
	export let id: string = '';
	export let documento: string;

	const urlParams = new URLSearchParams(window.location.search);


	function handleClick() {
		let a = document.createElement('a');
		getDocumentoEmpleado(documento, id, urlParams.toString())
			.then((url) => {
				//Si la request es exitosa se descarga el documento
				document.body.append(a);
				a.download;
				a.setAttribute('rel', 'noopener noreferrer');
				a.setAttribute('target', '_blank');
				a.href = url;
				a.click();
			})
			.catch((error) => {
				// Si sale un error se muestra en la consola
				console.error(error);
			})
			.finally(() => {
				// Se borra el elemento a
				a.remove();
			});
	}
</script>

<button
class="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
on:click={handleClick}>
	<slot></slot>
</button>
