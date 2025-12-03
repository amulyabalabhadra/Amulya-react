/*const heading = React.createElement("h1", {}, "Hello World");

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading); */

    const parent = React.createElement(
        "div",
        {id : "parent"},
        React.createElement("div",{id : "child"},
            [React.createElement("h1",{},"Hi"),
             React.createElement("h2",{},"Hello"),]
        ),


    );

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);

