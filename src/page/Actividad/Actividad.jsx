import { Layout } from "../../Components/Layout/Layout"
import { useState } from 'react';

export function Actividad() {

      // Arreglos
  const arregloOriginal = [
    {
      aseguradora: "AFIRME",
      cotizacion: {
        cliente: {
          tipoPersona: "fisica",
          nombre: "prueba",
          apellidoPat: "prueba",
          apellidoMat: "prueba",
          rfc: "",
          fechaNacimiento: "01-01-2005",
          ocupacion: "",
          curp: "",
          direccion: {
            calle: "oriente 945",
            noExt: "410",
            noInt: "021",
            colonia: "prueba",
            codPostal: "56618",
            poblacion: "mexico",
            ciudad: "cdmx",
            pais: "mexico"
          },
          edad: "18",
          genero: "MASCULINO",
          telefono: "",
          email: ""
        }
      }
    }
  ];

  const [arregloModificado, setArregloModificado] = useState([...arregloOriginal]);

  // Funciones para mostrar los arreglos en pantalla
  const mostrarArregloOriginal = () => {
    setArregloModificado([...arregloOriginal]);
  };

  const mostrarArregloModificado = () => {
    const arregloModificadoCopia = JSON.parse(JSON.stringify(arregloOriginal));
    arregloModificadoCopia[0].aseguradora = "AXA Seguros";
    arregloModificadoCopia[0].cotizacion.cliente.nombre = "Juan";
    arregloModificadoCopia[0].cotizacion.cliente.apellidoPat = "Pérez";
    arregloModificadoCopia[0].cotizacion.cliente.apellidoMat = "García";
    arregloModificadoCopia[0].cotizacion.cliente.genero = "FEMENINO";
    arregloModificadoCopia[0].cotizacion.cliente.direccion.colonia = "Centro";
    arregloModificadoCopia[0].cotizacion.cliente.telefono = "12345 3456";
    arregloModificadoCopia[0].cotizacion.cliente.email= "ejemplo@correo.com";
    setArregloModificado(arregloModificadoCopia);
  };
  return (
    <Layout>
      <div className="max-w-lg mx-auto my-8">
      <div className="flex justify-center mb-4">
        <button className="px-4 py-2 mr-4 bg-blue-500 text-white rounded" onClick={mostrarArregloOriginal}>Mostrar Arreglo Original</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={mostrarArregloModificado}>Mostrar Arreglo Modificado</button>
      </div>
      <pre className="bg-gray-200 p-4 rounded">
        {JSON.stringify(arregloModificado, null, 2)}
      </pre>
    </div>
    </Layout>
  )
}

