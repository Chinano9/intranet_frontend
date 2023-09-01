<script lang="ts">
	import { getDocumentoEmpleado } from '../lib/recursos_humanos';
	export let id: string;
	export let documento: string;

	function handleClick() {
		let a = document.createElement('a');
		getDocumentoEmpleado(documento, id)
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
class="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
on:click={handleClick}>
	<slot></slot>
</button>
