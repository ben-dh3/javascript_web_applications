const OnChange = () => {
    // Defining handleClick inside the ClickListener component.
    const handleChange = (event) => {

        console.log(event.target.value);
    };

    return (
        <>
        <label>
            <input onChange={handleChange} />
        </label>
        </>
    );
};

export default OnChange