
//method to render/inject into root/index.html
function customRender(reactElement,mainContainer){
    // const domElement=document.createElement(reactElement.type)  //create element of type reactElement.type ie; <a></a>
    // domElement.innerHTML=reactElement.children  //add sentence click me to visit...
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // mainContainer.appendChild(domElement)  //add this anchor tag into root id div 
    
    //in above code we have to set attributes ---> very hectic
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children

    for (const prop in reactElement.props) {
        if (prop==='children')  continue   
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)

}


//how react see 
const reactElement = {
    type : 'a',
    props :{  //properties
        href:'https://www.google.com/',
        target:'_blank'
    },
    children : 'CLICK ME TO VISIT GOOGLE'
}

const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)
//humko react element banakar index.html par render karwana hai
//it contains two parameter 
//1) what to inject 2) where to inject

//suppose we want to inject anchor tag