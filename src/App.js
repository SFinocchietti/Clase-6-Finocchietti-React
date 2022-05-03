import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
//import Main from "./components/ItemListContainer.js"
//import ItemList from "./components/ItemList.js"
import ItemListContainer from "./components/ItemListContainer.js"
import ItemDetail from "./components/ItemDetail.js"


const App = () => {
    return( <>        
        <Header/> 
        <ItemListContainer>
        <p>Proximamente información para inversores </p>          
        </ItemListContainer>
        <ItemDetail/>
        <Footer/>        
        </>
        )
}

export default App

