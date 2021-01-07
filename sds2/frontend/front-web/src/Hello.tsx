import { useEffect } from "react"

type Props = {
    message: String
}

export default function Hello({ message}: Props) {

     useEffect(() => {
         console.log('componente iniciou! repito nº vezes numero de componentes')
     }, [])

     return (
         <h1>Component Hello {message} !</h1>
     )
}
