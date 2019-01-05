import React from 'react'
import { withStyles } from '@material-ui/core/styles';
//import FilterLink from '../containers/FilterLink'
//simport { VisibilityFilters } from '../actions'
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

const Footer = (classes) => (
  <div className={classes.root} >
  <Grid container spacing={8}>
    <Grid item xs={12} sm={3}>
      {/*<FilterLink filter={VisibilityFilters.SHOW_ALL}>
        All
    </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} color="secondary">
        Active
    </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} color="primary">
        Completed
    </FilterLink>
    </Grid>

    <Grid item xs={12} sm={3}>
      <FilterLink filter={VisibilityFilters.SHOW_TIME} color="primary">
        TIME 7:30
    </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_PRIORITY} color="primary">
        Priotity 1-DoNow
</FilterLink>*/}
    </Grid>

  </Grid >
  </div>
)

export default withStyles(styles)(Footer);
