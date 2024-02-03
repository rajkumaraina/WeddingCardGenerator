import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`
export const Container = styled.div`
display:flex
  flex-direction: column;
  align-items: center;
  width: 50%;
  justify-content: center;
`

export const ContainerTwo = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nature-img.png');
  height: 350px;
  width: 350px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const InsideContainer = styled.div`
  display: flex;
  align-items:center
  height: 100vh;
  width:100%;
`

export const Heading = styled.h1`
  color: #35469c;
  text-align: center;
  font-size: 35px;
`
export const LabelElement = styled.label`
  color: #7e858e;
  width: 80%;
`
export const InputElement = styled.input`
  border: 1px solid #5a7184;
  border-radius: 8px;
  padding: 10px;
  margin: 2px;
  margin-bottom: 18px;
  color: #1e293b;
  cursor: pointer;
  outline: none;
  width: 80%;
`
export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`
export const ButtonElement = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  align-self: flex-start;
  margin-left: 60px;
  padding: 10px;
  width: 25%;
  border: 0 none;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
`
export const ParaElement = styled.p`
  font-size: ${props => {
    console.log(props)
    return props.fontsize
  }}px;
  color: #ffffff;
`
