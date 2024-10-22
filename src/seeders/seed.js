const { Componente, Fabricante, Producto } = require('../models');

async function initialComponentesFabricantesProductos() {
    try {
        const componentes = [
            { nombre: 'Ryzen 5 3450U', descripcion: 'Procesador de 2.10GHz base (4 núcleos) de AMD para portátiles.' },
            { nombre: 'Ryzen 5 5500U', descripcion: 'Procesador de 2.10GHz base (6 núcleos) de AMD para portátiles.' },
            { nombre: 'Ryzen 3 7330U', descripcion: 'Procesador de 2.3GHz base (4 núcleos) de AMD para portátiles.' },
            { nombre: 'Apple M2', descripcion: 'Procesador de apple para Macbooks.' },
            { nombre: 'Pantalla 15 pulgadas 60hz.', descripcion: 'Pantalla LCD para portátiles de 15 pulgadas con una tasa de refresco de 60hz.' },
            { nombre: 'Pantalla 16.5 pulgadas 60hz.', descripcion: 'Pantalla LCD para portátiles de 16.5 pulgadas con una tasa de refresco de 60hz.' },
            { nombre: 'RAM 32GB DDR4 SODIMM', descripcion: 'Memoria RAM DDR4 de 32GB en formato SODIMM.' },
            { nombre: 'RAM 16GB DDR4 SODIMM', descripcion: 'Memoria RAM DDR4 de 16GB en formato SODIMM.' },
            { nombre: 'RAM 8GB DDR4 SODIMM', descripcion: 'Memoria RAM DDR4 de 8GB en formato SODIMM.' },
            { nombre: 'HDD 1TB', descripcion: 'Una unidad de disco duro de 1TB.' },
            { nombre: 'SSD 512GB', descripcion: 'Una unidad de estado sólido de 512GB.' },
            { nombre: 'SSD 256GB', descripcion: 'Una unidad de estado sólido de 256GB.' },
            { nombre: 'SSD M2 1TB', descripcion: 'Una unidad de estado sólido factor M2 de 1TB.' }
        ];

        const createdComponentes = await Promise.all(componentes.map(comp => Componente.create(comp)));

        const fabricantes = [
            { nombre: 'TechCorp', direccion: 'Avenida Corrientes 1094, San Nicolás, C.A.B.A.', numeroContacto: '+5491143712345', pathImgPerfil: '../src/img/fabricantes/fabricante-1-logo.png' },
            { nombre: 'Green Apple Corporation', direccion: 'Avenida Santa Fe 2445, Recoleta, C.A.B.A.', numeroContacto: '+5491148015678', pathImgPerfil: '../src/img/fabricantes/fabricante-2-logo.png' },
            { nombre: 'Noblex', direccion: 'Avenida Rivadavia 4507, Almagro, C.A.B.A.', numeroContacto: '+5491149527890', pathImgPerfil: '../src/img/fabricantes/fabricante-3-logo.png' },
            { nombre: 'Tecnologías Trébol', direccion: 'Avenida Callao 890, Balvanera, C.A.B.A.', numeroContacto: '+5491150315467', pathImgPerfil: '../src/img/fabricantes/fabricante-4-logo.png' },
            { nombre: 'Diamond Solutions', direccion: 'Avenida Belgrano 678, Monserrat, C.A.B.A.', numeroContacto: '+5491143219876', pathImgPerfil: '../src/img/fabricantes/fabricante-5-logo.png' }
        ];

        const createdFabricantes = await Promise.all(fabricantes.map(fab => Fabricante.create(fab)));

        const productos = [
            { nombre: 'Notebook Gaming HX-1000', descripcion: 'Una notebook gama baja para gaming', precio: 899.99, pathImg: '../src/img/productos/producto-1.jpg' },
            { nombre: 'Notebook GreenMac Pro', descripcion: 'Super notebook GreenMac Pro, tope de gama (cargador no incluido)', precio: 2999.99, pathImg: '../src/img/productos/producto-2.jpg' },
            { nombre: 'Notebook Intel CZ-5', descripcion: 'Notebook Intel gama media para oficina', precio: 750.00, pathImgPerfil: '../src/img/productos/producto-3.jpg' },
            { nombre: 'Notebook Gaming HX-2000', descripcion: 'Notebook gama media para gaming', precio: 999.99, pathImg: '../src/img/productos/producto-4.jpg' },
            { nombre: 'Notebook Gaming HX-3000', descripcion: 'notebook gama media-alta para gaming', precio: 1200.99, pathImg: '../src/img/productos/producto-5.jpg' },
            { nombre: 'Notebook Gaming HX-3000 Ultra', descripcion: 'Notebook gama alta para gaming', precio: 1379.99, pathImg: '../src/img/productos/producto-6.jpg' },
            { nombre: 'Notebook Gaming HX-4000', descripcion: 'Notebook tope de gama para gaming (alto consumo)', precio: 1899.99, pathImg: '../src/img/productos/producto-7.jpg' }
        ];

        const createdProductos = await Promise.all(productos.map(prod => Producto.create(prod)));


        await createdProductos[0].addComponentes([createdComponentes[0], createdComponentes[4],createdComponentes[8],createdComponentes[9]]); // Notebook Gaming HX-1000
        await createdProductos[1].addComponentes([createdComponentes[3], createdComponentes[5],createdComponentes[8],createdComponentes[11]]); // Notebook GreenMac Pro
        await createdProductos[2].addComponentes([createdComponentes[1], createdComponentes[4], createdComponentes[8], createdComponentes[9]]); // Notebook Intel CZ-5
        await createdProductos[3].addComponentes([createdComponentes[1], createdComponentes[4], createdComponentes[7], createdComponentes[10]]); // Notebook Gaming HX-2000
        await createdProductos[4].addComponentes([createdComponentes[1], createdComponentes[5], createdComponentes[7],createdComponentes[11], createdComponentes[9]]); // Notebook Gaming HX-3000
        await createdProductos[5].addComponentes([createdComponentes[2], createdComponentes[5],createdComponentes[7],createdComponentes[11], createdComponentes[9]]); // Notebook Gaming HX-3000 Ultra
        await createdProductos[6].addComponentes([createdComponentes[2], createdComponentes[5],createdComponentes[6], createdComponentes[11]]); // Notebook Gaming HX-4000

        await createdFabricantes[0].addProductos([createdProductos[0], createdProductos[3]]); // TechCorp
        await createdFabricantes[1].addProductos([createdProductos[1]]); // Green Apple Corporation
        await createdFabricantes[2].addProductos([createdProductos[2]]); // Noblex
        await createdFabricantes[3].addProductos([createdProductos[4], createdProductos[5]]); // Tecnologías Trébol
        await createdFabricantes[4].addProductos([createdProductos[6]]); // Diamond Solutions

        console.log('Los datos y las relaciones fueron creados exitosamente');
    } catch (error) {
        console.log('Error al crear los datos: ', error);
    }
}

module.exports = initialComponentesFabricantesProductos;
