import React from 'react';

const CommentsCount = ({count}) => {
	return (
		<div className="container p-3">
			<h3>Количество комментариев - {count}</h3>
		</div>
	);
};

export default CommentsCount;
