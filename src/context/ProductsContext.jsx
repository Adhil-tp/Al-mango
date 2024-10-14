import React,{createContext,useContext, useState} from "react";
import foodProducts from "../data/foodProducts";

const ProductsContext = createContext();

export const ProductsProvider = ({children})=>{
    return(
        <ProductsContext.Provider value={{foodProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () =>useContext(ProductsContext)