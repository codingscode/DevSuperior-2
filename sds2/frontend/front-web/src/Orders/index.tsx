import './styles.css'
import StepsHeader from './StepsHeader'
import ProductsList from './ProductsList'

export default function Orders() {
    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList />
        </div>
    )
}
