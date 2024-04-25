import { useState } from "react";
import NewsBoard from "./components/NewsBoard";
import NewsItem from "./components/NewsItem";
import Header from "./components/header";

export const App = () => {

  const [category, setCategory] = useState("general");

  return (
    <div>
      <Header setCategory={setCategory} />
      <NewsBoard category={category} />
      
    </div>
  )
}

export default App;