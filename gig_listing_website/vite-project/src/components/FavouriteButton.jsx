const FavouriteButton = (props) => {
    const triggerFavourite = () => {
        if(props.favourite == 'not favourite'){
            props.setFavourite('favourite');
        }else{
            props.setFavourite('not favourite');
        }
    };
    return <button onClick={triggerFavourite}>favourite</button>
}

export default FavouriteButton