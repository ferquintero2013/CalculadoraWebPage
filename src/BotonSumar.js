import "./BotonSumar.css";

function BotonSumar(){
    return (
        <div class="button-container">
            <button onClick={
                    (event) => { 
                    console.log("hijuepta")
                    console.log(event)
                    }
                }>
                Mi Botón
            </button>
        </div>
    )
  }

  export { BotonSumar };