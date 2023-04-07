function Start_page({onClickStart}){
    return(
      <div className="start_page">
        <p className="h1">Викторина на знание <br/>пoрод котиков</p>
        <button onClick={onClickStart} className="button_start">Начать</button>
        <div className="image_cat_start">
          <img src="img/cat_main_page.png" class = "image_cat_start_1"  alt="Тут котик"></img>
          <img src="img/cat_main_page.png" class = "image_cat_start_2"  alt="Тут котик"></img>
          <img src="img/cat_main_page.png" class = "image_cat_start_3"  alt="Тут котик"></img>
          <img src="img/cat_main_page.png" class = "image_cat_start_4"  alt="Тут котик"></img>
        </div>
      </div>
    )
  }
  export default Start_page;