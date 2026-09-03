import Header from "./Header"
import Cardpizza from "./Cardpizza"

function Home(){
    return(
        <>
        <Header/>
        <section className="main">
        <Cardpizza name="Pepperoni" url="https://assets-us-01.kc-usercontent.com/4353bced-f940-00d0-8c6e-13a0a4a7f5c2/2ac60829-5178-4a6e-80cf-6ca43d862cee/Quick-and-Easy-Pepperoni-Pizza-700x700.jpeg?w=1280&auto=format" precio={8000} ingredientes={['mozarella, pepperoni, tomate, oregano']}/>
        <Cardpizza name="Mexicana" url="https://campra.com.mx/wp-content/uploads/2025/10/pizza-a-a-mexicana-chorizo.jpg" precio={9200} ingredientes={['mozarella, carne, tomate, jalapeño']}/>
        <Cardpizza name="Suprema" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqiOseWn7DpzuWrmRym1ReIdtpfLBZC7_BdDSrFXfk33d2GniqDCthebk&s=10" precio={8900} ingredientes={['mozarella, carne, tomate, oregano, chile, cebolla, jamon']}/>
        </section>
        
        
        </>
    )
}

export default Home