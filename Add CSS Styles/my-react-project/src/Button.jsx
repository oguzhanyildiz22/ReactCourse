

function Button() {

    const styles = {
        backgroundcolor: "blue",
        color: "black",
        padding: "10px 20px",
        cursor: "pointer",
    }

    return(
        <button style={styles}>Click me</button>
    );
}

export default Button


// 1. EXTERNAL --> for small projects, 
// 2. MODULES --> for individual components, Create a new folder for every components
// 3. INLİNE --> write js code as you can see above.