import React, {Component} from 'react';

class BlogLatest extends Component {
  render () {
    return (
      <div className="BlogLatest">
        <p className="Heading">Latest from the blog</p>
        <h5 className="SnoWalking">SnoWalking</h5>
        <h6 className='Admin'>Posted by admin on 00/00/0000</h6>
        <p>Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt. Namjusto cras urna urnaretra lor urna neque sed quis orci nulla. Laoremut vitae doloreet</p>
        <div className="ReadMore">
          <a href="#">Read more &#8811;</a>
        </div>
      </div>
    );
  }
}

export default BlogLatest;