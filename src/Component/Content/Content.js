import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);

        this.state ={
            trangThai: 1

        }
        
    }

    thongbao = () => { alert("noitification!")} 
    thongbao1 = (x) => { alert(x)} 


    renderForm = () => (
            <div className = "row">
                <div className="form-group">
                    <input type="text" name="ten" className="form-control"/>
                    <div className="btn btn-block btn-danger" onClick ={()=> this.saveClick()}>Save</div>
                </div>
            </div>
    )

    renderButton = () => (
            <div className="row">
            <div className="btn btn-group">
                <div className="btn btn-info" onClick={() => this.editClick()}>Edit</div>
                <div className="btn btn-warning" onClick={() => this.thongbao1("remove")}>remove</div>
            </div>

            </div>
    )

    displayCheck = () => {
        if(this.state.trangThai === 1){
            return this.renderForm();
        } else {
            return this.renderButton();
        }
    }
    
    editClick = () => {
        this.setState({trangThai:1});
    }
    saveClick = () => {
        this.setState({trangThai:0});
    }

    render() {
        return (
            
           
                <div className="col-lg-4">
                    <div className="row">
                    <div className={"col-lg-5 "}>
                    <div className="p-1">
                        <img className="img-fluid" src={this.props.linkpicture} alt="" />
                    </div>
                    </div>
                    <div className="col-lg-7 ">
                    <div className="p-1">
                        <h2 className="display-6">{this.props.tieude}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse. </p>
                        
                        {this.displayCheck()}


                    </div>
                    </div>
                    </div>
                
                    </div>
                
                
           
            

        );
    }
}

export default Content;