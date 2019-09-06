import React from 'react';

const access_token = '1486862254.726f2ea.fc55084d4d724d27a164f408324cc629'
const url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${access_token}`

class App extends React.Component {

  state = {
    posts: [],
  }

  componentDidMount() {
    // this.getItem()
	// console.log('hi')
  }

  getItemOld = () => {
	fetch(url)
	.then(res => res.json())
	.then(res => {
		console.log(res)
		this.setState({posts: res.data})
	})
	.catch(err => console.log(err))
  }

  getItem = async () => {
		let res = null
		try {
			res = await fetch(url)
			res = await res.json()
			this.setState({posts: res.data})
		} catch(err) {
			console.log(err)
		}
		res && console.log(res) 
  }

  render() {
    return (
      <div>
        {
          this.state.posts.length !== 0 && 
            this.state.posts.map(post => (
              <div key={post.id}>
                <img
					alt="test"
                  src={post.images.thumbnail.url}
                />
                <p>{post.created_time}</p>
              </div>
            ))
        }
      </div>
    );
  }
}

export default App;
