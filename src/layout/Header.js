import React from 'react';
import { Paper, Tabs } from '@material-ui/core';
import { Tab } from '@material-ui/core';
import { useStyles } from '../Css/css';

export default ({ items, setIndex }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();
  return (
    <Paper>
      <Tabs
        indicatorColor='primary'
        textColor='primary'
        centered
        value={value}
        onChange={handleChange}
        className={classes.header}
      >
        {items.map((item, index) => {
          console.log(index);
          return (
            <Tab
              label={item.name}
              onClick={() => setIndex(index)}
              key={item.id}
            />
          );
        })}
      </Tabs>
    </Paper>
  );
};
