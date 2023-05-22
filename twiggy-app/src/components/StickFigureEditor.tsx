import { Box, Button, Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

type ItemProps = {
  key: number;
  item: {
    name: string;
    description: string;
  };
};
const Item = (props: ItemProps) => {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
};

type StickFigureProps = {
  isNavDrawerOpen: boolean;
};
const StickFigureEditor = ({ isNavDrawerOpen }: StickFigureProps) => {
  const items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!'
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!'
    }
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        ml: isNavDrawerOpen ? '240px' : '65px',
        mt: '69px',
        maxWidth: `calc(100% - ${isNavDrawerOpen ? '240px' : '65px'})`
      }}
    >
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
};

export default StickFigureEditor;
