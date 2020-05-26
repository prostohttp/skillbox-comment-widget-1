import React from 'react';
import CommentsCount from "./CommentsCount";
import "./style.css";

const Comments = ({data, deleteItem, count}) => {
	const deleteComment = (date) => {
		deleteItem(date);
	}

	const commentsList = data.map(({name, date, text}) => {
		return (
			<div className="container p-3" id="comments-area" key={date}>
				<div className="card">
					<div className="icon-trash">
						<button type="button"
						        className="btn btn-danger float-right"
						        onClick={() => deleteComment(date)}
						>
							<i className="fa fa-trash" aria-hidden="true"/>
						</button>
					</div>
					<div className="card-body">
						<h5 className="card-title">{name}</h5>
						<h6 className="card-subtitle mb-2 text-muted">{date}</h6>
						<p className="card-text">{text}</p>
					</div>
				</div>
			</div>
		)
	})

	const commentsRender = count
		? (
			<>
				<CommentsCount count={count}/>
				{commentsList}
			</>
		)
		: <div className="container p-3 text-center">Пусто</div>;
	return (
		<>
			{commentsRender}
		</>
	);
};

export default Comments;
