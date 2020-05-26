import React from 'react';

const Form = ({addComment}) => {
	const name = React.createRef();
	const comment = React.createRef();

	const checkingValidityForm = (...fields) => {
		return fields.every(field => field.length);
	}

	const sendComment = (e) => {
		e.preventDefault();
		let resName = name.current.value.trim();
		let resComment = comment.current.value.trim();
		const resDate = new Date().toLocaleString();

		if (checkingValidityForm(resName, resComment)) {
			addComment(resName, resDate, resComment);
			name.current.value = "";
			comment.current.value = "";
			name.current.focus();
		} else {
			alert("Все поля обязательны для заполнения!");
		}

	}
	return (
		<>
			<div className="container p-3">
				<h1 className="p-2">Добавить комментарий</h1>
				<div className="row">
					<div className="col-md-12">
						<form>
							<div className="form-group">
								<label htmlFor="name">Имя *</label>
								<input type="text" className="form-control" id="name" required ref={name}/>
							</div>
							<div className="form-group">
								<label htmlFor="message">Комментарий *</label>
								<textarea className="form-control" id="message" rows="3" required ref={comment}/>
							</div>
							<button type="submit" className="btn btn-primary" onClick={(e) => sendComment(e)}>Написать</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Form;
