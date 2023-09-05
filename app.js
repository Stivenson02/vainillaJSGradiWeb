

const uploadProducts = async() => {
	try {
		const respuesta = await fetch(`https://gradistore-spi.herokuapp.com/products/all`);


		// Si la respuesta es correcta
		if(respuesta.status === 200){
            const { products } = await respuesta.json();
			let all_products = '';
			products.nodes.forEach(product => {

				const [tag]= product.tags

				all_products += `
                    <div class="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
                        <img class="rounded-t-lg w-full h-64 " src="${product.featuredImage.url}" alt="" />
                        <div class="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300 mt-2">
							<span class="mr-1 p-1 px-2 font-bold"><start-list tags= "${tag}"></start-list></span>
							<span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">${tag} Tags</span>
                        </div>
                        <div class="desc p-4 text-gray-800">
                            <p class="title font-bold block cursor-pointer hover:underline">${product.title}</p>
                        </div>
						
                    </div> 
				`;
			});

			document.getElementById('contenedor').innerHTML = all_products;

		} else if(respuesta.status === 401){
			console.log('Error en tu consulta, valida los datos');
		} else if(respuesta.status === 404){
			console.log('El producto que buscas no existe');
		} else if(respuesta.status === 500){
			console.log('El servidor no responde, intenta de nuevo');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}

}

uploadProducts();