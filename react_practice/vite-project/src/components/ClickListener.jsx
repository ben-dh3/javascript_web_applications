
const ClickListener = () => {
    // Defining handleClick inside the ClickListener component.
    const handleClick = (event) => {
        console.log(event);
    };

    return (
        <>
        <button onClick={handleClick}>Click Me!</button>
        </>
    );
};

export default ClickListener