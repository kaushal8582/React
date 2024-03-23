
function customRender(reactElement,root){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    
    //version 1.0.0
    /*
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    */
    //version 1.0.1

    for (const prop in reactElement.props) {
        if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    root.appendChild(domElement)
}

const reactElement ={
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"click me to visit google"
}


const root = document.querySelector("#root")

customRender(reactElement,root);
