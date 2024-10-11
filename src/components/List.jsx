import React from 'react'

var placeholder = document.createElement("li");
placeholder.className = 'placeholder';

class List extends React.Component{
constructor(props){
 super(props);
 this.state = {...props}
}
//drag start
dragStart(e){
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.dragged.innerHTML);
}
//drag end
dragEnd(e){
    this.dragged.style.display = "block";
    this.over.parentNode.removeChild(placeholder)
    //update
var data = this.state.colors
var from = Number(this.dragged.dataset.id);
var to = Number(this.over.dataset.id)
if(from < to) to--;
data.splice(to,0,data.splice(from,1)[0])
this.setState({colors:data})
}
//dragover

dragOver(e){
    e.preventDefault();
    this.dragged.style.display = "none";
    this.over = e.target;
    e.target.parentNode.insertBefore(placeholder,e.target)
}


  render() {

    var listItems = this.state.colors.map((item,i)=>{
        return(
            <li style={{backgroundColor : item}}
            data-id={i}
            key={i}
            draggable="true"
            onDragStart={this.dragStart.bind(this)}
            onDragEnd={this.dragEnd.bind(this)}
            >
             {item}
            </li>
        )
    })
    return (
      <>
      <ul onDragOver={this.dragOver.bind(this)}>
        {listItems}
      </ul>
      </>
    )
  }
}

export default List