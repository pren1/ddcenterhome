import React from 'react';
import './App.css';
import VMoeLogs from './VMoeLogs';
import VMoeMacro from "./VMoeMacro";
import ProductPack from "./ProductPack";
import DDCProducts from "./DDCProducts";

function App() {
    return (
        <div className="App">
            <Nav/>
            <Hero/>
            <main>
                {DDCProducts.productLargePanel.filter(item=>!!item.name).map((item,i)=>
                    <ProductPack
                        key={i}
                        title={item.name}
                        content={item.content}
                        author={item.author}
                        link={item.link}
                        quote={item.quote}
                    />
                )}

            </main>
            <footer> 2019 - Github DD Center  </footer>
        </div>
    );
}

function Nav() {
    return (
        <header>
            <h1 className="logo-text">Github DD Center</h1>
            <div className="flex-filler"/>
            <a className="mark-github" href="https://github.com/dd-center" target="_blank" rel="noopener noreferrer">
                <svg height="24" viewBox="0 0 16 16" version="1.1"
                     width="24" aria-hidden="true">
                    <path fillRule="evenodd"
                          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
            </a>
        </header>
    );
}

class Hero extends React.Component {
    constructor(...args){
        super(...args);
        this.state={canHover:true};
    }
    componentDidMount() {
        this.setState({canHover:window.scrollY<=32});
        window.onscroll=()=>{
            this.setState({canHover:window.scrollY<=32});
        }
    }

    render() {

        return (
            <div className={"hero "+(this.state.canHover?"canhover":"")}>
                <div className="heroCenter">
                    <div className="heroCenterText">
                        <h1 className="right-border">DD CENTER</h1>
                        <h2>Monitor. Analyze. Optimize.</h2>
                    </div>
                </div>
                <div className="heroBackground">
                    <VMoeLogs style={{height:"50vh"}}/>
                    <VMoeMacro style={{height:"50vh"}}/>
                </div>
            </div>
        )
    }
}


export default App;
