import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGithubRepos } from '../../actions/profile';
import Spinner from '../layout/Spinner';

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
	useEffect(() => {
		getGithubRepos(username);
	}, [getGithubRepos]);
	return (
		<div className='prfile-github'>
			<h2 className='text-primary my-1'>Github Repos</h2>
			{repos.length < 1 ? (
				<h4>No Repos</h4>
			) : (
				repos.map((repo, index) => (
					<Fragment key={index}>
						<div className='repo bg-white p-1 my-1'>
							<h4>
								<a href={repo.html_url} target='_blank' rel='noopener noreferer'>
									{repo.name}
								</a>
							</h4>
							<p>{repo.description}</p>
						</div>
						<div>
							<ul>
								<li className='badge badge-primary'>Stars: {repo.stargazers_count}</li>
								<li className='badge badge-dark'>Watchers: {repo.watchers_count}</li>
								<li className='badge badge-primary'>Forks: {repo.forks_count}</li>
							</ul>
						</div>
					</Fragment>
				))
			)}
		</div>
	);
};

ProfileGithub.propTypes = {
	getGithubRepos: PropTypes.func.isRequired,
	repos: PropTypes.array.isRequired,
	username: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
	repos: state.profile.repos
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
