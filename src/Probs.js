
function con(props){
    return <>
     <h3>{props.name}</h3>
     <img src={props.img} alt="dummy img"/>
     <p>{props.nation}</p>
     <p>{props.profession}</p>
     </>
    
}
export default con;