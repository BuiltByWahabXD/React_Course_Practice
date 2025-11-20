

function List (props){
    
    const itemCategory = props.category;
    const items = props.items;
    
    //fruits.sort( (a,b) => b.calories - a.calories ); //REVERSE ORDER
    //fruits.sort( (a,b) => a.calories - b.calories ); //IN ORDER
    //const lowCal= fruits.filter(fruit => fruit.calories < 100);
    
    const listitems = items.map(item =>    
        <li key={item.id}>
                {item.name} :  &nbsp; 
                {item.calories}
            </li> );   
            
            
    return (
        
        <>  
            <h3 className ="Category-title">{itemCategory}</h3>
            <ol className = "item-list">
                {listitems}
            </ol>
        </>
        );
}

List.defaultProps = {
    category: "category",
    items: []
};

export default List;