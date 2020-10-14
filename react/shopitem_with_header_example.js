import React from "react";
import ReactDOM from "react-dom";
// import './style.css'


const ShopItemHeader = ({ title, image}) => {
    return (
        <header>
        <h1>{title}</h1>
        <img src={image}/>
    </header>
)
};

const ShopItemDescription = ({ description}) => (
    <article>
    <p>{description}</p>
    </article>
);

const ShopItemPricing = ({ price }) => (
    <footer>
    Cena: {price} zł
<button>Kup!</button>
</footer>
);

const ShopItem = ({ title, image, description, price }) => {
    return (
        <section>
        <ShopItemHeader title={title} image={image} />
    <ShopItemDescription description={description} />
    <ShopItemPricing price={price} />
    </section>
)
};

const App = () => {
    const item = {
        title: "MacBook Pro",
        image: "https://bit.ly/2EEtduD",
        description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
        price: 9999,
    };
    return (
        <ShopItem {...item} />
)
}

ReactDOM.render(
<App/>,
    document.getElementById("app")
);