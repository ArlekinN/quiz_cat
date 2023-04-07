function Loading({setPage}){

  const endLoading = ()=>{
    setTimeout(()=>{
      setPage('result')
    }, 3000);
    }
  return(
    <div className="">
      <p className="text_loading">Считаем насколько ты хорош...</p>
      <div >
        <div className="lap-container" >
        <img src="img/lapka.png" className="lap"></img>
        <img src="img/lapka.png" className="lap"></img>
        <img src="img/lapka.png" className="lap"></img>
        <img src="img/lapka.png" className="lap"></img>
        <img src="img/lapka.png" className="lap"></img>
        </div>
      </div>
      {endLoading()}

    </div>
  )
}

  export default Loading;