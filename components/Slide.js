import styled from 'styled-components'

const Slide = ({img}) => {
    return (
        <IMG src={img} />
    );
};

const IMG = styled.img`
    width: 100%;
    height: 70vh;
`

export default Slide;