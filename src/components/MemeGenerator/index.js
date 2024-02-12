import {Component} from 'react'

import {
  MainContainer,
  Container,
  ParaElement,
  ContainerTwo,
  Heading,
  InsideContainer,
  ColorInput,
  ParaElement1,
  Inside,
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
    color: 'white',
    top: '',
    bottom: '',
    fontSize: fontSizesOptionsList[0].displayText,
    meme: false,
    fontFamily: 'Roboto',
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

  colorChange = event => {
    this.setState({color: event.target.value})
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

  fontFamilyChange = event => {
    this.setState({fontFamily: event.target.value})
  }

  render() {
    const {meme, color, top, bottom, fontSize, fontFamily} = this.state
    console.log(fontFamily)
    return (
      <MainContainer>
        <InsideContainer>
          <Container>
            <Heading>Wedding Card Design</Heading>
            <FormElement onSubmit={this.formSubmitted}>
              <LabelElement htmlFor="image">Color</LabelElement>
              <ColorInput
                id="image"
                type="color"
                onChange={this.colorChange}
                color={color}
              />
              <LabelElement htmlFor="top">Male Name</LabelElement>
              <InputElement id="top" type="text" onChange={this.topChange} />
              <LabelElement htmlFor="bottom">Female Name</LabelElement>
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
              <LabelElement htmlFor="font">Font Family</LabelElement>
              <InputElement
                id="font"
                as="select"
                value={fontFamily}
                onChange={this.fontFamilyChange}
              >
                <option value="Roboto" selected>
                  Roboto
                </option>
                <option value="Bree-serif">Bree-Serif</option>
                <option value="Monospace">Monospace</option>
                <option value="Courier New">Courier New</option>
                <option value="Papyrus">Papyrus</option>
                <option value="Brush Script MT">Brush Script MT</option>
                <option value="Comic Sans MS">Comic Sans MS</option>
              </InputElement>
              <ButtonElement type="submit">Generate</ButtonElement>
            </FormElement>
          </Container>
          <ContainerTwo data-testid="meme">
            <ParaElement1 fontFamily={fontFamily} color={color}>
              Wedding Invitation
            </ParaElement1>
            {meme ? (
              <Inside>
                <ParaElement
                  fontsize={fontSize}
                  fontFamily={fontFamily}
                  color={color}
                >
                  {top}
                </ParaElement>
                <ParaElement
                  fontsize={fontSize}
                  fontFamily={fontFamily}
                  color={color}
                >
                  WEDS
                </ParaElement>
                <ParaElement
                  fontsize={fontSize}
                  fontFamily={fontFamily}
                  color={color}
                >
                  {bottom}
                </ParaElement>
              </Inside>
            ) : null}
          </ContainerTwo>
        </InsideContainer>
      </MainContainer>
    )
  }
}
export default MemeGenerator
