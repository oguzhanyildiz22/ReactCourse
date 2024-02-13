/* props = read-only properrties that are shared between components.
           A parent component can send data to a child component. 
           <Component key=value />
*/

import Student from "./Student.jsx"

function App() {
 
  return (
    <>
    <Student name="OziSoftware" age={30}/>
    
    
    </>
  )
}

export default App
