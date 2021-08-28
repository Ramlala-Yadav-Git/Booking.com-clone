import styled from 'styled-components'
import { Box } from './Box'

const Div = styled.div`
width:100%;
display: flex;


`

const Cont = styled.div`
width:100%;

`

const Line = styled.div`
border-top:1px solid #0071c2;
margin-top:1px;
`

export const TopSection = () => {

    return (

        <Cont>
        <Div>

          <Box>Info&prices</Box>
          <Box>Facilites</Box>
          <Box>House rules</Box>
          <Box>The fine print</Box>
          <Box>Guest revies (487)</Box>
        
        </Div>
        <Line/>

        </Cont>
    )
}