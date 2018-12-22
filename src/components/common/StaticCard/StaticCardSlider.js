import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import './StaticCardSlider.css'

const StaticCardSlider = () => (
  <Card>
    <Image src='http://www.skillings.com/wp-content/uploads/2017/02/placeholder-square.jpg' />
    {/* <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
    </Card.Content> */}
    <Card.Content extra>
      <h6><b>Main Heading</b></h6>
      <p>Some related content</p>
      <Button style={{float:'right', backgroundColor: '#5dade2'}}>View</Button>
    </Card.Content>
  </Card>
)

export default StaticCardSlider;
