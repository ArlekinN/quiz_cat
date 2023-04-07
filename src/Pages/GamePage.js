
function Game({question, onClickVariant}){
  return(
    <div className="question_page">
    <p id="Number_question">Вопрос {question.number}/10</p>
    <img className="image_cat_question" src={question.image} alt="Тут котик"></img>
    
    <ul className="quest">
      {question.variants.map((text, index) =>(
        <li className="variant_quest" onClick={() =>onClickVariant(index)} key={text}> {text}</li> 
      ))}
    </ul>
    
    </div>
  )
}

  export default Game;
  