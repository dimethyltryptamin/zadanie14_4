var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    pics: 'https://images.pexels.com/photos/902204/pexels-photo-902204.jpeg?h=350&auto=compress&cs=tinysrgb'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    pics: 'https://images.pexels.com/photos/903171/pexels-photo-903171.jpeg?h=350&auto=compress&cs=tinysrgb'
  },
  {
    id: 3,
    title: 'Inny Film',
    desc: 'Jakis inny film',
    pics: 'https://images.pexels.com/photos/902248/pexels-photo-902248.jpeg?h=350&auto=compress&cs=tinysrgb'
  }
];



var Movies = React.createClass({
  propType: {
    key: React.PropTypes.object.isRequierd,
    movie: React.PropTypes.object.isRequierd
  }, 
  render: function() {
    return ( 
      React.createElement('li', {key: this.props.id}, 
        React.createElement(MoviesTit, {movie: this.props.movie}),
        React.createElement(MoviesDes, {movie: this.props.movie}),
        React.createElement(MoviesPics, {movie: this.props.movie})
      )
    )
  } 
});

var MoviesTit = React.createClass({
  propType: {
    movie: React.PropTypes.object.isRequierd,
  },
  render: function() {
    return React.createElement('h2', {}, this.props.movie.title)
  }
});

var MoviesDes = React.createClass({
  propType: {
    movie: React.PropTypes.object.isRequierd,
  },
  render: function() {
    return React.createElement('p', {}, this.props.movie.desc)
  }
});

var MoviesPics = React.createClass({
  propType: {
    movie: React.PropTypes.object.isRequierd,
  },
  render: function() {
    return React.createElement('img', {src: this.props.movie.pics})
  }
});


var moviesElement = movies.map(movie => {
  return React.createElement(Movies, {key: movie.id, movie: movie})
});

var element = React.createElement('div', {}, 
  React.createElement('h1', {}, 'Lista filmów'),
  React.createElement('ul', {}, moviesElement)
);

ReactDOM.render(element, document.getElementById('app'));