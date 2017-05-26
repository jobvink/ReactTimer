var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
	return (
		<div className="top-bar">
			<div className="top-bar-left">
				<ul className="menu">
					<li className="menu-text">Reacht Timer App</li>
					<li>
						<IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
					</li>
					<li>
						<Link to="/" activeClassName="active-link" >Countdown</Link>
					</li>
				</ul>
			</div>
			<div className="top-bar-right">
				<ul className="menu">
					<li className="menu-text">
						Gemaakt door <a href="//www.jmcvink.nl/" target="_blank">Job Vink</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

module.exports = Navigation;