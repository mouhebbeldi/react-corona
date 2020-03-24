import _ from 'lodash'
import React, { Component, createRef } from 'react'
import {
  Grid,
  Header,
  Image,
  Item,
  Rail,
  Ref,
  Segment,
  Sticky,
} from 'semantic-ui-react'

const Placeholder = () => <Image src='/logo192.png' />

export default class StickyExampleOversized extends Component {
  state = {}
  contextRef = createRef()

  render() {
    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <Ref innerRef={this.contextRef}>
            <Segment>
              {_.times(7, (i) => (
                <Placeholder key={i} />
              ))}

              <Rail position='left'>
                <Sticky context={this.contextRef}>
                  <Item.Group divided>
                    {_.times(3, (i) => (
                      <Item key={i}>
                        <Item.Image
                          size='tiny'
                          src='/logo192.png'
                        />
                        <Item.Content>
                          <Item.Header as='a'>Followup Article</Item.Header>
                          <Item.Meta>By Author</Item.Meta>
                        </Item.Content>
                      </Item>
                    ))}
                  </Item.Group>
                </Sticky>
              </Rail>

              <Rail position='right'>
                <Sticky context={this.contextRef}>
                  <Header as='h3'>Stuck Content</Header>
                  <Image src='/logo192.png' />
                </Sticky>
              </Rail>
            </Segment>
          </Ref>
        </Grid.Column>
      </Grid>
    )
  }
}