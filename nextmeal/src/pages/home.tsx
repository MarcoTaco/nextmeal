import { useState } from 'react';
import '../styles/home.scss';

function Home(){
    const [itemList, setItemList] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [displayText, setDisplayText] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleAdd = () => {
        if(itemList.length < 5 && inputValue.trim() != ''){
            setItemList([...itemList, inputValue]);
            setDisplayText(inputValue);
            setInputValue('');
        }
    };

    const handleSearch = () => {

    };

    const handleClear = () => {
        setItemList([]);
        setDisplayText('');
    }

    return(
        <>
            <div className="home-page">
                <section className="hero-section">
                    <div className="food-search">
                        <div className="input-section">
                            <div className="text-input">
                                <input type="text" 
                                    className="ingredients-txt" 
                                    value={inputValue} 
                                    onChange={handleChange} 
                                    placeholder="Enter ingredients here..." />
                            </div>
                            <div className="buttons-food"> 
                                <button onClick={handleAdd} disabled={inputValue.trim() === ''}>Add</button>
                                <button onClick={handleSearch} disabled={itemList.length === 0}>Search</button>
                                <button onClick={handleClear}>Clear</button>
                            </div>
                        </div>
                        <div className="output-section">
                            <ul>
                                {itemList.map((text, index) => (
                                    <li key={index}>{ text }</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home;