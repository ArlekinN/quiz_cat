function Result({correct, OnClickAnswer}){
    return(
      <div >
        <p id="text_finish">
        {correct >= 7 ? 'Поздравляем!!!' : 'Не поздравляем!'}
        <br />
        Вы отгадали {correct} ответов из 10</p>
        <img id="image_cat_finish" src="img/cat_result.png" alt="Тут кот в шляпе"></img>
  
        {
          correct >=7 ?
          <a href="img/gramota.png" download> < button className="button_finish" id="button_download"> Получить грамоту</button> </a> :
  
          <div >
            <p className="text_about_bad_result" > Ты еще недостаточно хорош </p>
            <a href="img/gramota.png" download> 
            < button className="button_finish" id="button_not_download" disabled> Получить грамоту</button> </a> 
          </div>
        }
  
        <a  href="/">
          <button className="button_finish button_again_game" >Сыграть еще раз</button>
        </a>
  
        <button className="button_finish answer " onClick={OnClickAnswer}>Ответы</button>
      </div>
    )
  }

  export default Result;