import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectSubreddit, initialFetchPosts, fetchPostsIfNeeded, invalidateSubreddit } from '../actions'
import Picker from '../components/Picker'
import ImageGridList from '../components/ImageGridList'
import Typography from '@material-ui/core/Typography';
import CircularIndeterminate from './CircularIndeterminate'
import ContainedButtons from './ContainedButtons'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import PaperSheet from './PaperSheet'

class Home extends Component {
    static propTypes = {
        selectedSubreddit: PropTypes.string.isRequired,
        posts: PropTypes.array.isRequired,
        isFetching: PropTypes.bool.isRequired,
        lastUpdated: PropTypes.number,
        dispatch: PropTypes.func.isRequired
    }
    componentWillMount() {
        const { dispatch } = this.props
        dispatch(initialFetchPosts())
    }
    componentDidMount() {

        const { dispatch, selectedSubreddit } = this.props
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedSubreddit !== this.props.selectedSubreddit) {
            const { dispatch, selectedSubreddit } = this.props
            dispatch(fetchPostsIfNeeded(selectedSubreddit))
        }
    }

    handleChange = nextSubreddit => {
        this.props.dispatch(selectSubreddit(nextSubreddit))
    }

    handleRefreshClick = e => {
        e.preventDefault()

        const { dispatch, selectedSubreddit } = this.props
        dispatch(initialFetchPosts())
        dispatch(invalidateSubreddit(selectedSubreddit))
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    render() {
        const { selectedSubreddit, initial, posts, isFetching, lastUpdated } = this.props
        const isEmpty = posts.length === 0
        return (
            <Fragment>

                <GridList cellHeight={100} cols={2}>

                    <GridListTile>
                        <Typography variant="h6" gutterBottom>
                            {initial && <Picker value={selectedSubreddit}
                                onChange={this.handleChange}
                                options={initial}
                                inputLabel="Breed" />
                            }
                        </Typography>
                    </GridListTile>
                    <GridListTile>
                        <Typography variant="h6" gutterBottom>
                            {lastUpdated &&
                                <span>
                                    Last updated at {new Date(lastUpdated).toLocaleTimeString()}
                                </span>
                            }
                            {!isFetching &&
                                <ContainedButtons cbOnClick={this.handleRefreshClick} />
                            }
                        </Typography>
                    </GridListTile>
                </GridList>
                <PaperSheet>
                    {isEmpty
                        ? (isFetching ? <CircularIndeterminate /> : <h2>Empty.</h2>)
                        : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                            <ImageGridList tileData={posts} />
                        </div>
                    }
                </PaperSheet>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    const { selectedSubreddit, initialPostsBySubreddit, postsBySubreddit } = state
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    }
    const { items2: initial } = initialPostsBySubreddit || { items2: [] }
    return {
        selectedSubreddit,
        initial,
        posts,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(Home)
