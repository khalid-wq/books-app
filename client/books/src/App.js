import React from "react";
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import Books from "./componnent/Books";
import Create from "./componnent/Create";
import Update from "./componnent/Update";

function App() {
  return (
<BrowserRouter>
 <Routes>
      <Route path="/books" element={<Books />} />
      <Route path="/create" element={<Create />} />
      <Route path="/update" element={<Update />} />      
    </Routes>
</BrowserRouter>
   
  );
}

export default App;
