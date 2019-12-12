import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Skill from './Skill';

const ProfileAbout = ({
	profile: {
		user: { name },
		skills,
		bio
	}
}) => {
	return (
		<div className='profile-about bg-light p-2'>
			{bio && (
				<Fragment>
					{' '}
					<h2 className='text-primary'>{name.trim().split(' ')[0]}'s Bio</h2>
					<p>{bio}</p>
					<div className='line'></div>
				</Fragment>
			)}

			<h2 className='text-primary'>Skill Set</h2>
			<div className='skills'>
				{skills.length > 0 ? (
					skills.map((skil, index) => <Skill key={index} skill={skil} />)
				) : (
					<h4>No Skills Added</h4>
				)}
			</div>
		</div>
	);
};

ProfileAbout.propTypes = {
	profile: PropTypes.object.isRequired
};

export default ProfileAbout;
