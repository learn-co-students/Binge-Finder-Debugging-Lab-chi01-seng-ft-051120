import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import TVShow from './TVShow'

class TVShowList extends Component {

  mapAllShows = () => {
    console.log(this.props.shows)
    if (!!this.props.searchTerm){
      let shows = this.props.shows.filter(s => s.name.toLowerCase().includes(this.props.searchTerm))
      return shows.map(show => {
          return (<TVShow show={show} key={show.id} selectShow={this.props.selectShow}/> )
        }
      )
    }
    return this.props.shows.map( (s)=> <TVShow show={s} key={s.id} selectShow={this.props.selectShow}/>)
  }

  render() {
    return (
      <div className="TVShowList">
        <Grid>
          {this.mapAllShows()}
        </Grid>
      </div>
    )
  }

}

export default TVShowList;
