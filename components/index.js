
var Message = React.createClass({
	render: function() {
		return (
			<div className="message">
				<p className="message-title">{this.props.title}</p>
				<p className="message-date">{this.props.created}</p>
			</div>
		)
	}
});

var Messages = React.createClass({
	getInitialState: function() {
		return {
			loading: true,
			data: [
				{
					title: '',
					created: '',
				},
				{
					title: '',
					created: '',
				}
			]
		};
	},

	renderMessages() {
		return this.state.data.map( (message, index) => {
			return (
				<Message {...message} key={index} />
			);
		});
	},

	loading() {
		return this.state.loading ? 'placeholder' : '';
	},

	componentDidMount() {
		var self = this;
		setTimeout(function() {
			self.setState({
				loading: false,
				data: [
					{
						title: 'System maintenance between 8am and 9am on Monday 4 October',
						created: '9/25/2016',
					},
					{
						title: 'September expenses are now due!',
						created: '9/24/2016',
					}
				]
			})
		}, 4000);
	},

	render: function() {
		return (
			<div className={'messages ' + this.loading() }>
				<h1>Messages</h1>
				{this.renderMessages()}
			</div>
		);
	}
});

ReactDOM.render(
	<div className="container">
		<Messages />
	</div>,
	document.getElementById('root')
);
