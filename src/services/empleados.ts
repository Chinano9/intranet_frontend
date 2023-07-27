
export async function getEmpleados(randomize = RANDOMIZE) {
	console.log('getProducts');

	try {
    const response = await fetch('http://localhost:8000/recursos_humanos/');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener la lista de empleados:', error);
    return [];
  }
}
