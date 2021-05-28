import "./styles/app.css";
import { useEffect, useState } from "react";
import GitCard from "./components/GitCard";
function App() {
  const [repos, setRepos] = useState([]);
  const handleClick = async () => {
    /** Set Your GIT URL HERE */
    const response = await fetch(
      "https://api.github.com/users/magento/repos"
    );
    setRepos(await response.json());
  };
  useEffect(() => {
    handleClick();
  }, []);
  return (
    <>
      <div className="container">
        {repos.map((item, index) => {
          return (
            <GitCard
              key={index}
              name={item.name}
              content={item.description}
              lang={item.language}
              url={item.html_url}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
