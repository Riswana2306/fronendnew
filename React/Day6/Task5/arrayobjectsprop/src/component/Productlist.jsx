const Productlist =({value})=>{
    return (<>
    <div>
        {value.map((n,m)=>(
            <div key={m}>
                <p>{n.price}</p>
            </div>
   
        ))}

    


    </div>

    
    
    
    </>)

}
export default Productlist