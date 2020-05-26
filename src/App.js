import React, {Component} from "react";
import {Comments} from "./components/comments-list";
import Form from "./components/form";

class App extends Component {
	state = {
		comments: []
	}

	addComment = (name, date, text) => {
		const newArr = [...this.state.comments] || [];
		newArr.push({name, date, text});
		this.setState({
			comments: newArr
		})
	}

	setComments = () => {
		localStorage.setItem("storage", JSON.stringify(this.state.comments));
	}


	getComments = () => {
		const comments = JSON.parse(localStorage.getItem("storage")) || this.state.comments;
		this.setState({comments});
	}

	deleteItem = (date) => {
		const newComments = this.state.comments.filter(item => item.date !== date);
		this.setState({
			comments: newComments
		})
	}

	componentDidMount() {
		this.getComments();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		this.setComments();
	}


	render() {
		const {comments} = this.state;
		return (
			<>
				<Comments data={comments}
				          deleteItem={this.deleteItem}
				          count={comments.length}
				/>
				<Form addComment={this.addComment}/>
			</>
		);
	}
}

export default App;
