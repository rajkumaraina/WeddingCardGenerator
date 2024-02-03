import {Component} from 'react'

import {
  MainContainer,
  Container,
  ParaElement,
  ContainerTwo,
  Heading,
  InsideContainer,
  FormElement,
  LabelElement,
  InputElement,
  ButtonElement,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    top: '',
    bottom: '',
    fontSize: fontSizesOptionsList[0].displayText,
    meme: false,
  }

  formSubmitted = event => {
    const {top, bottom, fontSize} = this.state
    event.preventDefault()
    if (top !== '' && bottom !== '' && fontSize !== '') {
      this.setState(prevState => ({meme: !prevState.meme}))
    } else {
      this.setState({meme: false})
    }
  }

  imageChange = event => {
    this.setState({imageUrl: event.target.value})
  }

  topChange = event => {
    this.setState({top: event.target.value})
  }

  bottomChange = event => {
    this.setState({bottom: event.target.value})
  }

  fontSizeChange = event => {
    this.setState({fontSize: event.target.value})
  }

  render() {
    const {meme, imageUrl, top, bottom, fontSize} = this.state
    return (
      <MainContainer>
        <InsideContainer>
          <Container>
            <Heading>Meme Generator</Heading>
            <FormElement onSubmit={this.formSubmitted}>
              <LabelElement htmlFor="image">Image URL</LabelElement>
              <InputElement
                id="image"
                type="text"
                onChange={this.imageChange}
              />
              <LabelElement htmlFor="top">Top Text</LabelElement>
              <InputElement id="top" type="text" onChange={this.topChange} />
              <LabelElement htmlFor="bottom">Bottom Text</LabelElement>
              <InputElement
                id="bottom"
                type="text"
                onChange={this.bottomChange}
              />
              <LabelElement htmlFor="font">Font Size</LabelElement>
              <InputElement
                id="font"
                as="select"
                value={fontSize}
                onChange={this.fontSizeChange}
              >
                {fontSizesOptionsList.map(each => (
                  <option key={each.optionId}>{each.displayText}</option>
                ))}
              </InputElement>
              <ButtonElement type="submit">Generate</ButtonElement>
            </FormElement>
          </Container>
          {meme ? (
            <ContainerTwo data-testid="meme">
              <ParaElement fontsize={fontSize} top>
                {top}
              </ParaElement>
              <ParaElement fontsize={fontSize}>{bottom}</ParaElement>
            </ContainerTwo>
          ) : null}
        </InsideContainer>
      </MainContainer>
    )
  }
}
export default MemeGenerator
