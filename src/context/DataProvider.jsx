import { useState,createContext } from 'react';

export const DataContext = createContext(null);

const DataProvider = ({children}) => {
    const [acc, setacc] = useState('')
  return (
    <DataContext.Provider value={{acc,setacc
    }}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider
