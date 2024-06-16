import '../MainContainer/MainContainer.modules.css';

function MainContainer ({ children }){
    return(
        <main className="main-container">
            { children }
        </main>
    );
}

export default MainContainer