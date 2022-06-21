import './App.css';
import Item from './components/Item/Item';

function App() {
  return (
    <div className="App">
      <div className='gradient'>
        <div className='container'>
          <h1>Ты сегодня покормил кота?</h1>
          <div className='items'>
            <Item food="фуа-гра" portionsNumber="10" miceNumber="1" weight="0,5" enabled={true} chosen={false}/>
            <Item food="рыбой" portionsNumber="40" miceNumber="2" weight="2" enabled={true} chosen={true}/>
            <Item food="курой" portionsNumber="100" miceNumber="5" weight="5" enabled={false} chosen={false}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
