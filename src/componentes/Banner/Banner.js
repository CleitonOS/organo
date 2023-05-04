import './Banner.css'

//JSX é a forma como React mexe com o DOM
function Banner(){
    //JSX
    return(
        <header className="banner">
            <picture>
                <source srcSet='./imagens/Banner-yourteam-football-mobile.png' media="(max-width: 768px)"></source>
                <img src="./imagens/Banner-YourTeam-Football.png" alt="Banner principal da página"/>
            </picture>
        </header>
    )
}

export default Banner