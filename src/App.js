import React, { useState } from "react";
import marked from "marked";
import "./App.css";
import "../node_modules/github-markdown-css/github-markdown.css";

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

function App() {
  const [preview, setPreview] = useState(marked(placeholder));

  return (
    <>
      <h1 id="title">
        <code>Mardown previewer</code>
      </h1>
      <main>
        <section id="left-area">
          <textarea
            id="editor"
            cols="115"
            rows="50"
            onChange={event => setPreview(marked(event.target.value))}
          >
            {placeholder}
          </textarea>
        </section>
        <section id="right-area">
          <div id="preview" className="markdown-body" dangerouslySetInnerHTML={{ __html: preview }}></div>
        </section>
      </main>
    </>
  );
}

export default App;
