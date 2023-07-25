import { Layout } from "../../Components/Layout/Layout"

export function Contacto() {
  return (
    <Layout>
        <div className="flex items-center justify-center w-4/6 h-5/6 bg-gray-100">
            <div className="bg-white shadow-xl rounded-lg p-8 flex">
                <div className="w-2/3 pr-8">
                    <h2 className="text-4xl font-semibold mb-6">Luis Angel Melendez</h2>
                    <p className="text-lg mb-4">Desarrollador web</p>
                    <p className="text-lg mb-4">correo electronico: angelmelen88@gmail.com</p>

                   
                </div>
                <div className="w-1/3">
                    <img className="h-full w-full object-cover rounded-lg" src="https://blog.uber-cdn.com/cdn-cgi/image/width=2161,height=1081,quality=80,onerror=redirect,format=auto/wp-content/uploads/2018/12/MX_Vive-como-nunca-antes-Ciudad-de-M%C3%A9xico-con-estos-X-lugares-de-inter%C3%A9s.jpg" alt="Imagen de la tarjeta" />
                </div>
            </div>
        </div>
    </Layout>
  )
}

