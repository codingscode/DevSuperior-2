type Props = {
    message: String
}

export default function Hello({ message}: Props) {
     return (
         <h1>Component Hello {message} !</h1>
     )
}
