import { useState, useEffect } from "react"
import { Layout } from "../../Components/Layout/Layout"
import { Card } from "../../Components/Card/Card"
import PDetail from "../../Components/PDetail/index"

export function Home() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  

  return (
    <Layout>
      Home aqui las Card
      <div className='grid gap-2 grid-cols-3 w-full max-w-screen-lg'>
        {
          items?.map(item => (
            <Card key={item.id} data={item} />
          ))
          }     

      </div>
      <PDetail/>
    </Layout>
  )
}

