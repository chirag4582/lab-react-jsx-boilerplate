import './App.css';

function App(props) {
  // code here
  return(
    <div >
      <h3 >Kalvium gallery</h3>
      <div className='container'>
        {
          props.images.map((elt)=>{
            return <img className="image" src={elt.img} alt="elephant" ></img>
          })
        }
      </div>
    </div>
  )
}

export default App;
