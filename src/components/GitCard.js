import React from "react";
import "../styles/app.css";

function GitCard({ name, content, lang, url }) {
  return (
    <>
      <div className="git-box">
        <a className="git-link" href={url}>
          <h2 className="git-title">{name}</h2>
        </a>
        <p className="git-content">
          {content}
        </p>
        <h4 className="git-lang">{lang}</h4>
      </div>
    </>
  );
}

export default GitCard;
