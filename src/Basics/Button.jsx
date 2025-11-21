function Button() {

    let count = 1;
    const handleClick = (e) => {
        if(count < 4){
            e.target.textContent = `Clicked ${count} times 🫶`;
            count ++;
        }else if(count > 7){
            e.target.textContent = `PLAYER DIED 💀`;
        } else if(count >=4 && count <=7){
            e.target.textContent = `OO BHASS KAR BHAII 🤬🤬🤬`;
            count ++;
        }
        
    }
    return (
        <button onDoubleClick={(e)=>{handleClick(e)}}>Click Me</button>
    );
}

export default Button;