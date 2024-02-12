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
  background-image: url('https://img.freepik.com/premium-vector/wedding-card-background-design_894042-100.jpg');
  height: 90vh;
  width: 550px;
  text-align: center;
  background-size: cover;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const Inside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: Center;
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
export const ColorInput = styled(InputElement)`
  background-color: ${props => props.color};
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
  font-size: ${props => props.fontsize}px;

  font-family: ${props => props.fontFamily};
  color: ${props => props.color};
`
export const ParaElement1 = styled.h1`
  font-size: 55px;
  align-self: flex-start;
  font-style: italic;
  color: #ffffff;
`
