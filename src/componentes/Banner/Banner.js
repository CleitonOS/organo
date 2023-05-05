import './Banner.css'

//JSX é a forma como React mexe com o DOM
function Banner(){
    //JSX
    return(
        <header className="banner">
            <picture>
                <source srcSet='./imagens/football-banner-mobile.png' media="(max-width: 430px)"></source>
                <img src="./imagens/banner_football-wide.png" alt="Banner principal da página"/>
            </picture>
        </header>
    )
}

export default Banner