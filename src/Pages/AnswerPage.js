function Answer({questions}){
    return(
      <div>
        <ul className="answer_quest">
        {questions.map((text) =>(
          <li className="answer_quest_variant" key={text}> 
          <span >{text.number}.  </span> 
          <span>{text.variants[text.correct]}</span><br/>
          <img className="image_answer" src={text.image} alt="Тут кот"></img>
          </li> 
        ))}
       </ul>
        <a  href="/">
          <button className="button_finish play_again_answer_page" >Сыграть еще раз</button>
        </a>
      </div>
    )
  }

  export default Answer;