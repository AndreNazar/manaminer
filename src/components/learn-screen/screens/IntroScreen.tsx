import LearnButton from "../LearnButton"

const IntroScreen = () => {

    return <div className="learn-screen hide-screen-dark center-screen">
    <p className="intro-style big-p">Добро пожаловать в Manaminer!</p>
    <p className="intro-style discr-p">Суть игры - накопление маны. Чем больше маны, тем выше в рейтинге!</p>
    <p className="intro-style discr-p">Изучайте навыки, выполняйте достижения и иследуйте все предметы в мастерской!</p>
    <LearnButton/>
</div>
}

export default IntroScreen