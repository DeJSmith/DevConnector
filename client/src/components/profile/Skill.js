import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ skill }) => {
	return (
		<div className='p-1'>
			<i className='fa fa-check'></i> {skill}
		</div>
	);
};

Skill.propTypes = {
	skill: PropTypes.string.isRequired
};

export default Skill;
