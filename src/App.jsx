//You need to import the component you want to render in App.jsx 
// For example, if you want to render the ArrayUpdatorObject component, you would do it like this:
//import ArrayUpdatorObject from "./UpdateArrayInObject/ArrayUpdatorObject.jsx";
//Then, you can use that component inside the App function as shown below:
//return (
//    <>  
//      <ArrayUpdatorObject/>
//    </>
//  );

import ToDoList from "./ToDoListApp/To_Do_List.jsx";
function App() {

     
  return (
    <>  
      <ToDoList/>
    </>
  );
}

export default App;
