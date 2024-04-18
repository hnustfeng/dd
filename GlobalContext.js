// GlobalContext.js
import React, { createContext, useContext, useState } from 'react';

// 定义全局上下文
// @ts-ignore
const GlobalContext = createContext();

// 初始状态
const initialState = {
    lang: 'chinese',
};

// 创建一个 reducer 函数来处理状态变化

// 创建提供者组件
// @ts-ignore
export function GlobalContextProvider({ children }) {
    const [globalVariable, setGlobalVariable] = useState([]);
    const [connectWallet,setConnectWallet] = useState("")

    return (
        <GlobalContext.Provider value={{ globalVariable, setGlobalVariable,connectWallet,setConnectWallet }}>
            {children}
        </GlobalContext.Provider>
    );
}

// 自定义 hook 用于访问全局状态和 dispatch 函数
export const useGlobal = () => {
    return useContext(GlobalContext);
  };
