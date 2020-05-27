import React, {Component} from 'react';

class Form extends Component {
	state = {
		name: "",
		text: ""
	}

	focusField = React.createRef();

	checkingValidityForm(...fields) {
		return fields.every(field => field.length);
	}

	handleChange(e, field) {
		this.setState({
			[field]: e.target.value.trim()
		})
	}


	sendComment(e) {
		e.preventDefault();
		let resName = this.state.name;
		let resComment = this.state.text;
		const resDate = new Date().toLocaleString();

		if (this.checkingValidityForm(resName, resComment)) {
			this.props.addComment(resName, resDate, resComment);
			this.setState({
				name: "",
				text: ""
			})
			this.focusField.current.focus();
		} else {
			alert("Все поля обязательны для заполнения!");
		}

	}

	render() {
		return (
			<>
				<div className="container p-3">
					<h1 className="p-2">Добавить комментарий</h1>
					<div className="row">
						<div className="col-md-12">
							<form onSubmit={(e) => this.sendComment(e)}>
								<div className="form-group">
									<label htmlFor="name">Имя *</label>
									<input type="text"
									       className="form-control"
									       id="name"
									       onChange={e => this.handleChange(e, "name")}
									       value={this.state.name}
									       ref={this.focusField}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="message">Комментарий *</label>
									<textarea className="form-control"
									          id="message" rows="3"
									          onChange={e => this.handleChange(e, "text")}
									          value={this.state.text}
									/>
								</div>
								<button type="submit" className="btn btn-primary">Написать</button>
							</form>
						</div>
					</div>
				</div>
			</>
		)
	};
}

export default Form;
