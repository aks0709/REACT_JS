import {useEffect, useState} from "react"

//it is a custom hook   -->hooks are basically functions
function useCurrencyInfo(currency){
    const [data,setData]=useState({})  //if fetch didnt work we have an empty {},by default 
    //we have to make a API CALL
    //we use useEffect  hook which automatically call fetch()
    useEffect(()=>{
      //the value from API is String we need it to convert it to JSON FILE
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)  //since this API contains conversions from particular currency to other ,so we pass variable currency
        .then((response)=>response.json)//then contains callback,we convert response into json file
        .then((response)=>setData(response[currency]))  //json is key value pair we can also access data using []
    },[currency])  //currency is the dependencies ,agar curency change karenge toh humko dubara fetch call karna hai
    console.log(data)
    return data
}

export default useCurrencyInfo;