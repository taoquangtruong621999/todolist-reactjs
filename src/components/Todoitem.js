import React,{Component} from 'react';
import './Todoitem.css'
import className from 'classnames'
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-done.svg';
class Todoitem extends Component{
    
    render(){
        //cach1
        const { item,onClick } = this.props;
        let url=checkImg;
        if(item.isComplete){
            url=checkCompleteImg
        }
        return(
            <div  className={className('TodoItem',{
                'TodoItem-complete':item.isComplete
            })}>
                <img onClick={onClick} src={url} width={32} />
            <p>{this.props.item.title}</p>
        </div>
        );
    }
}

export default Todoitem;