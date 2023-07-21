const Component = (props)=>{
        return (
          <div>
              <li className="concept">
                <img src={props.val.image} alt="{props.val.title}" />
                <h2>{props.val.title}</h2>
                <p>{props.val.description}</p>
              </li>
          </div>
        );
}
export default Component;